import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody {
            return NextResponse.json({message: 'Email already exists'})
        }
    } catch (error: any) {
        return NextResponse.json({error:error.message}, {status:500})
        
    }
}