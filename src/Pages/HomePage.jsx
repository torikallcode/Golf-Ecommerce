import { Home } from "../components/Layouts/Home"
import Navbar from "../components/Layouts/Navbar"

export const HomePage = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}