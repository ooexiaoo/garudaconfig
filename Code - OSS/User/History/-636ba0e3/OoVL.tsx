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
    <div className='bg-black text-white flex flex-col justify-center items-center min-h-screen py-2'>
      <h1>{loading ? "Processing" : "Sign Up"}</h1>
      <hr/>
      <label htmlFor="username">Username</label>
      <input
      id='username'
      value={user.username}
      onChange={(e) => setUser({...user, username: e.target.value})}
      type="text"
      className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
      />

      <hr/>
      <label htmlFor="email">Email</label>
      <input
      id='email'
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      type="text"
      className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
      />
    </div>
  )
}