'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function VerifyEmailPage() {
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
        const urlToken = setToken(window.location.search.split("=")[1])
        verifyUserEmail()
    }, [])

  return (
    <div>page</div>
  )
}