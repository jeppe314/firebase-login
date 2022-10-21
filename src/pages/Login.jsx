import React from "react"

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="login">Login</span>
        <form className="form" onSubmit={() => console.log("login")}>
          <input type="text" className="username" placeholder="Username" />
          <input type="password" className="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}
