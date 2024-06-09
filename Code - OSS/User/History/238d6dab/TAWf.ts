import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'
import { getDataFromToken } from '@/helpers/getDataFromToken'

connect()

export async function GET(request: NextRequest) {
   try {
       const userId = await getDataFromToken(request)
       const user = await User.findById(userId).select("-password")
       if (!user) {
           return NextResponse.json({
               message: "User not found",
               data: null
           }, {status: 404})
       }
       return NextResponse.json({
           message: "User fetched successfully",
           data: user
       })
   } catch (error: any) {
       return NextResponse.json({
           message: error.message,
           data: null
       }, {status: 500})
   }
}
