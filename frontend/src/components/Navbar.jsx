
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/students">View Students</Link>
    <Link to="/add">Add Student</Link>
  </div>
);

export default Navbar;
