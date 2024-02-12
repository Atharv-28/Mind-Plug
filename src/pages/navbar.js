import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/nav.css"

const Navbar = () => {
    return(
        <>
      <nav className="nav">
        <ul className="navcontainer">
          <li className="navelement">
            <Link className="navtxt" to="/">Home</Link>
          </li>
          <li className="navelement">
            <Link className="navtxt" to="/socialhealth">SocialHealth</Link>
          </li>
          <li className="navelement">
            <Link className="navtxt" to="/healthyrelationship">HealthyRelation</Link>
          </li>
          <li className="navelement">
            <Link className="navtxt" to="/socialnetwork">SocialNetwork</Link>
          </li>
          <li className="navelement">
            <Link className="navtxt" to="/mental&social">Mental & Social</Link>
          </li>
          <li className="navelement">
            <Link className="navtxt" to="/community">Community</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    )
}

export default Navbar;