import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "../firebase"
import { doc, setDoc } from "firebase/firestore"

export const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      //Creates user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      try {
        //Updates profile with displayname
        await updateProfile(res.user, {
          displayName,
        })
        //Create users in firestore
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
        })
      } catch (err) {
        setErr(true)
      }
      //Navigates to homepage
      navigate("/")
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
          <button className="btn registerBtn">Sign up</button>
          {err && <p>Something went wrong</p>}
          <p>
            Already signed up? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
