import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from '@/helpers/mailer'

connect()

export async function POST(request: NextRequest){
    try {
        console.log("Received request:", request.body)
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log("Received data:", {username, email, password})

        const user = await User.findOne({email})
        if (user){
            console.log("User already exists:", user.email)
            return NextResponse.json({error: `User with email ${user.email} already exists`}, {status:400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username, email, password: hashedPassword
        })
        console.log("Created user:", newUser)
        const savedUser = await newUser.save()
        console.log("User saved:", savedUser)

        //send verification email
        const verificationResult = await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
        console.log("Verification email sent:", verificationResult)

        return NextResponse.json({message:`User ${username} registered successfully`,
            success:true, user: savedUser})

    } catch (error:any) {
        console.log("Error occurred:", error)
        return NextResponse.json({error:error.message, stack: error.stack}, {status:500})
    }
}
