import React, { useState } from 'react'
import axiops from 'axios'
import Link from 'next/link'
import { Toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function Profilepage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  return (
    <div>Profile page</div>
  )
}