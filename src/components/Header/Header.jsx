import "./Header.scss"
import Logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Twitter" />
      <h1>Tweets simulator</h1>
    </div>
  )
}
