import React, {useState} from 'react'
import axios from 'axios'
import { Toast } from 'react-hot-toast'

export default function SignupPage() {

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
      console.log("Signup Failed")
    }
  }

  return (
    <div>Sign up page</div>
  )
}