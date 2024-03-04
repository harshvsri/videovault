import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [linksClass, setBtnClass] = useState("links");

  function handleClick() {
    setBtnClass(linksClass === "links" ? "links active" : "links");
  }

  return (
    <nav>
      <div className="heading">
        VIDEO<span>VAULT</span>
      </div>
      <a href="#" className="toggle-btn" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={linksClass}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Subscriptions</a>
          </li>
          <li>
            <a href="#">Your Channel</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
