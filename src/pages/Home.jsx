import React from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "/firebase"
import { AuthContext } from "../context/AuthContext"

export const Home = () => {
  const docRef = doc(db, "users", "SF")

  return (
    <div className="formContainer">
      <div className="homeWrapper">
        <h2>Hello, Name!</h2>
        <button>Log Out</button>
      </div>
    </div>
  )
}
