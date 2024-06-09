'use client'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import toast, { Toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false) // [loading, setLoading]

  const onLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/login', user)
      console.log("Login success", response.data);
      router.push('/profile')
    } catch (error: any) {
      console.log("Login Failed");
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className='bg-black text-white flex flex-col justify-center items-center min-h-screen py-2'>
      <h1 className='text-3xl font-bold mb-4'>{loading ? "Processing" : "Login"}</h1>
      <hr/>
      <label htmlFor="email">Email</label>
      <input
      id='email'
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      type="text"
      placeholder='Enter your email'
      className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white'
      />

      <hr/>
      <label htmlFor="password">Password</label>
      <input
      id='password'
      value={user.password}
      onChange={(e) => setUser({...user, password: e.target.value})}
      type="password"
      placeholder='Enter your password'
      className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white'
      />
      <button
      onClick={onLogin}
      className='p-2 border rounded-lg border-gray-300 mb-4 focus:outline-none focus:border-gray-600'
      >
        {buttonDisabled ? "No Login" : "Login"}
      </button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  )
}