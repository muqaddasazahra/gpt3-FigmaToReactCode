import { useState } from "react";
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./NavBar.css";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
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

      <div className="navbarmenu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu &&
        <div className="navmenu scale-up-center">
          <div className="navmenulinks">
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

          <div className="navmenubuttons">
            <button id="signIn">Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
        }
      </div>
    </div>
  );
}
