import { useState } from "react"

function ApplicationStatus() {
  const [status, setStatus] = useState("Applied")

  return (
    <div>
      <h3>Application Status</h3>

      <p>Current status: {status}</p>

      <button onClick={() => setStatus("Interview")}>
        Mark as Interview
      </button>
    </div>
  )
}

export default ApplicationStatus