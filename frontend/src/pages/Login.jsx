import { useState } from "react"
import api from "../services/api"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(event) {
  event.preventDefault()

  try {
    const response = await api.post("/auth/login", {
      email,
      password
    })

    console.log("Login successful!")
    console.log("Backend response:", response.data)

    sessionStorage.setItem("token", response.data.token)
    
    const applications = await api.get("/applications")
    console.log("Applications:", applications.data)

  } catch (error) {
    console.log(
      "Login failed:",
      error.response?.data || error.message
    )
  }
}

  return (
    <div>
      <h1>Login to AppliedStack</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login