import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <h1>contact us</h1>
      <ul className="links">
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>about</Link>
                </li>
            </ul>
    </div>
  );
};

export default Contact;
