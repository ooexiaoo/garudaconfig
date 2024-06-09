import React, {useState} from 'react'
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
      console.log("Signup success", response.data)
    } catch (error: any) {
      console.log("Signup Failed");
      toast.error(error.response.data.message)
    }
  }

  return (
    <div>Sign up page</div>
  )
}