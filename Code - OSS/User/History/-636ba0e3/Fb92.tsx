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
      
    }
  }, user)

  return (
    <div>Sign up page</div>
  )
}