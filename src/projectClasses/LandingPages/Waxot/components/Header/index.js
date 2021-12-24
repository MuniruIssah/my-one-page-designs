import React from "react";
import { NavLink } from "react-router-dom";
import './styles.scss'
const WaxotHeader = () => {
  return (
    <header className="waxotHeader">
      <div className="waxotLogo">
        <span>W</span>
        <span>-axot</span>
      </div>
      <ul>
        <NavLink to='/waxot' activeClassName="waxotActiveNavlink">How it works</NavLink>
        <NavLink to='/waxot' activeClassName="waxotActiveNavlink">Personal</NavLink>
        <NavLink to='/waxot' activeClassName="waxotActiveNavlink">Business</NavLink>
        <NavLink to='/waxot' activeClassName="waxotActiveNavlink">Developer</NavLink>
        <NavLink to='/waxot' activeClassName="waxotActiveNavlink"> Help</NavLink>
      </ul>
      <div className="waxotButtonSection">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </header>
  );
};

export default WaxotHeader;
