import React from "react";
import '../Navbar/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__name">Quest Fácil</span>
      </div>
      <span className="navbar__links">
        <ul>
          <li className="navbar__talk">
            <a href="#fale_conosco">Fale Conosco</a>
          </li>
        </ul>
        <div className="navbar__buttons">
          <button className="navbar__button navbar__button__join">
            Cadastrar-se
          </button>
          <button className="navbar__button navbar__button__login">Login</button>
        </div>
      </span>
    </nav>
  );
};

export default Navbar;
