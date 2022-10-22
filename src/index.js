import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthContextProvider } from "./context/AuthContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <h3>TESTING</h3>
    </React.StrictMode>
  </AuthContextProvider>
)
