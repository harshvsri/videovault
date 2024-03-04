import { useState } from "react";

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
