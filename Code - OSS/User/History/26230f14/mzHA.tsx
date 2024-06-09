import React, { useState } from 'react'
import axiops from 'axios'
import Link from 'next/link'
import { Toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function Profilepage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  const getUserDetails = async () => {
    const response = await axios.post("/api/users/me")
    console.log(response.data)
  }
  return (
    <div>Profile page</div>
  )
}