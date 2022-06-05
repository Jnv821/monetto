import React from "react"
import "./Home.css"
import { Navbar } from "../../components"
import { HomepageHeader } from "../../components"
import { InfoCards } from "../../components"

function Home() {
  return (
    <>
      <Navbar />
      <HomepageHeader />
      <InfoCards />
    </>
  )
}

export default Home
