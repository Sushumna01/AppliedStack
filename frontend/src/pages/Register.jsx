import { useState } from "react"
import api from "../services/api"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      console.log("Passwords do not match")
      return
    }

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password
      })

      console.log("Registration successful!")
      console.log("Backend response:", response.data)

    } catch (error) {
      console.log(
        "Registration failed:",
        error.response?.data || error.message
      )
    }
  }

  return (
    <div>
      <h1>Create your AppliedStack account</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

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

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  )
}

export default Register