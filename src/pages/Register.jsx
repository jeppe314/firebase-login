import React from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
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
        </form>
      </div>
    </div>
  )
}
