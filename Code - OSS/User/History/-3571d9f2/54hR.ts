import {NextRequest} from 'next/server';
import jswt from 'jsonwebtoken';

export const getDataFromToken = async (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || ""
    } catch (error: any) {
        throw new Error(error.message)
    }
}