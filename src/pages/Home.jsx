import React, { useContext } from "react"
import { doc } from "firebase/firestore"
import { db, auth } from "../firebase"
import { signOut } from "firebase/auth"
import { AuthContext } from "../context/AuthContext"

export const Home = () => {
  const { currentUser } = useContext(AuthContext)
  const { displayName, email } = currentUser
  const docRef = doc(db, "users", "SF")

  return (
    <div className="formContainer">
      <div className="homeWrapper">
        <h2>Hi there, {displayName}!</h2>
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
    </div>
  )
}
