import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Toast } from 'react-hot-toast'
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
    const response = await axios.post("/api/users/logout")
    Toast.success(response.data.message)
    router.push("/")
  }
  return (
    <div>Profile page</div>
  )
}