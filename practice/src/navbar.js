import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#">
              <h1 className="nav2">Flex Practice</h1>
            </a>
          </div>

          <ul className="nav2">
            <li>
              <div>
                <a href="/flexExp">Rakesh flex</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/gridExp">Rakesh grid</a>
              </div>
            </li>
            <li>
              <a href="/Rushabh">Rushabh</a>
            </li>

            <li>
              <a href="/Nitya">Nitya</a>
            </li>
            <li>
              <a href="/Nilva">Nilva</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
