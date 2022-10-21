import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res.user.email)
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="register">New user</span>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="username" placeholder="Username" />
          <input type="text" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <button>Sign up</button>
          {err && <p>Something went wrong</p>}
          <p>Already signed up? <span>Login</span></p>
        </form>
      </div>
    </div>
  )
}
