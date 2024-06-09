import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function GET(request: NextRequest) {
    try {
        NextResponse.json({message:"User logged out successfully", success:true})
    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}