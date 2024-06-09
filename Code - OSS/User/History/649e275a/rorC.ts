import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody);

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User not found"}, {status:400})
        }
        console.log("user exists");

        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({error: "Invalid credentials"}, {status:400})
        }
        return NextResponse.json({message:"Login successful", success:true, user})

    } catch (error: any) {
        return NextResponse.json({error:error.message}, {status:500})
        
    }
}