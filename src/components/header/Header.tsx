import { useState } from "react"
import { Hamburger, Logo } from "../../assets/images"
import "./Header.css"
const Header = () => {
  const [dropDown,setDropDown] = useState("")
  const handleDropDown = () => {
    setDropDown(dropDown === ""? "active" : "")
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <div onClick={handleDropDown} className="hamburger">
          <img src={Hamburger} alt="Menu" />
        </div>
      </div>
      <div className={`headerLinks ${dropDown}`}>
        <ul>
          <li>About us</li>
          <li>Registration</li>
          <li>Careers</li>
          <li className="contactUs">Contact us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
