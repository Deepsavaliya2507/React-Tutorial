import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center mb-5 h-12">
        <div className="ml-32 mr-32">
          <h2>
            <a href="/">Test</a>
          </h2>
        </div>
        <div>
          <ul className="flex">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/one">One</Link>
            </li>
            <li className="mr-4">
              <Link to="/two">Two</Link>
            </li>
            <li className="mr-4">
              <Link to="/three">Three</Link>
            </li>
            <li>
              <Link to="/four">Four</Link>
            </li>
          </ul>
        </div>
        <div className="ml-32 mr-32">
          <button>Hmm</button>
        </div>
      </div>
    </>
  );
}

export default Header;
