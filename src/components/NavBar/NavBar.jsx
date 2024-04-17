import logo from "../../assets/logo.png"
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navlinks">
          <p>
            <a href="">Home</a>
          </p>
          <p>
            <a href="">What is GPT3?</a>
          </p>
          <p>
            <a href="">Open AI</a>
          </p>
          <p>
            <a href="">case Studies</a>
          </p>
          <p>
            <a href="">Library</a>
          </p>
        </div>
      </div>
      <div className="navbuttons">
        <button id="signIn">Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
