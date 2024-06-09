'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function VerifyEmailPage() {
    const router = useRouter()
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token })
            setVerified(true)
        } catch (error: any) {
            setError(true)
            console.log(error.response.data.message);
        }
    }
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")

        /* const {query} = router;
        const urlTokentwo = query.token && setToken(query.token as string) */
    }, [])

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail()
        }
    }, [token])
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2">
        <h1 className='text-4xl'>Verify Email</h1>
    </div>
  )
}