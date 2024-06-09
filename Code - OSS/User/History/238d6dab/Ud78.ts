import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getDataFromToken } from '@/helpers/getDataFromToken'

connect()

export async function POST(request: NextRequest) {
   await getDataFromToken(request)
}