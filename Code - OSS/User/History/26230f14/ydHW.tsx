'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast, { Toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Profilepage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  const getUserDetails = async () => {
    const res = await axios.post("/api/users/me")
    if (res.data && res.data.data && res.data.data._id) {
      console.log(res.data.data._id)
    setData(res.data.data._id)
    } else
    console.log("no data")
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
      <hr />
      <h2>{data === "nothing" ? "No data for display" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={logout}>Logout</button>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={getUserDetails}>Get User Details</button>
    </div>
  )
}