import {NextRequest} from 'next/server';
import jswt from 'jsonwebtoken';

export const getDataFromToken = async (request: NextRequest) => {
    try {
        request.cookies.get("token")?.value
    } catch (error: any) {
        throw new Error(error.message)
    }
}