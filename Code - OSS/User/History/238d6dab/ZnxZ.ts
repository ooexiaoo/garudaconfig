import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest) {
    try {
        const user = await User.findById(request.body.userId)
        if(!user){
            return NextResponse.json({error: "User not found"}, {status:400})
        }
        return NextResponse.json({user})
    } catch (error: any) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}