import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'

connect()

export async function POST(request: NextRequest) {
    try {
        const {email} = await request.json()
        const user = await User.findOne({email: email})
        if (user) {
            return NextResponse.json({message: 'Email already exists'})
        }
    } catch (error: any) {
        return NextResponse.json({error:error.message}, {status:500})
        
    }
}