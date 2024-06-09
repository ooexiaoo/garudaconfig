'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { verify } from 'jsonwebtoken'

export default function VerifyEmailPage() {
   /*  const router = useRouter() */
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token })
            setVerified(true)
            setError(false)
        } catch (error: any) {
            setError(true)
            console.log(error.response.data.message);
        }
    }
    useEffect(() => {
        setError(false)
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")

        /* const {query} = router;
        const urlTokentwo = query.token && setToken(query.token as string) */
    }, [])

    useEffect(() => {
        setError(false)
        if (token) {
            verifyUserEmail();
        }
    }, [token, verifyUserEmail]);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
        <h1 className='text-4xl'>Verify Email</h1>
        <h2 className='text-2xl bg-orange-500 text-black'>
            {token ? `${token}`: "no token"}
        </h2>
        {verified && (<div>
            <h2 className='text-2xl bg-green-500 text-black'>Email verified</h2>
            <Link href={'/login'}>Login</Link>
        </div>)}
        {error && (<div>
            <h2 className='text-2xl bg-red-500 text-black'>Error</h2>
            
        </div>)}
    </div>
  )
}