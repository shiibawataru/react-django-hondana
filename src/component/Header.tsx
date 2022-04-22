import React from "react";
import { Link } from "react-router-dom";
import AddBook from "../AddBook";

const Header = () => {
  return (
    <div>
      <h1>Bookshelf</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/addbook">add</Link>
      <hr />
    </div>
  );
};

export default Header;
