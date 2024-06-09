'use client'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import toast, { Toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false) // [loading, setLoading]

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/signup', user)
      console.log("Signup success", response.data);
      router.push('/login')
    } catch (error: any) {
      console.log("Signup Failed");
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-2'>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <div className="bg-white rounded-2xl shadow-2xl w-2/3 max-w-4xl">
          <div className="p-5">
            <div className="text-left font-bold">
              <label htmlFor="username">Username</label>
              <input
                className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
    </div>
  )
}