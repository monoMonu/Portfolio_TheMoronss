import React from "react"
import DetailsSec from "./components/DetailsSec"
import ProfileSec from "./components/ProfileSec"

function App() {

  return (
    <div className="flex">
      <ProfileSec />
      <DetailsSec />
    </div>
  )
}

export default App
