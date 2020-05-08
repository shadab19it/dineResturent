import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <nav class='nav justify-content-between'>
          <a className='nav-link active' href='#dino'>
            dine
          </a>
          <a className='nav-link active' style={{ fontSize: "20px" }} href='menu'>
            Menu
          </a>
        </nav>
        <div className='jumbotron' style={{ width: "800px" }}>
          <h1 className='display-3 title'>
            Exquisite dining <br />
            since 1989.
          </h1>
          <p className='description py-4'>
            Experence our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of out farmhouse.
          </p>

          <button className='btn btn-outline-secondary'>BOOK A TABLE</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
