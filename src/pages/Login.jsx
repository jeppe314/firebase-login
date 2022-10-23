import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      setErr(true)
      console.log(err)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="login">Login</span>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <button type="submit" className="btn login">
            Sign in
          </button>
          <p>
            Haven't signed up? <Link to="/register">Register</Link>
          </p>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  )
}
