import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast, { Toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function Profilepage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  const getUserDetails = async () => {
    const response = await axios.post("/api/users/me")
    console.log(response.data)
    setData(response.data._id)
  }

  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success("Logout success")
      router.push("/login")
    } catch (error: any) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile page</h1>
    </div>
  )
}