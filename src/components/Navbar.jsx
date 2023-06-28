import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ShoppingCartSimple } from '@phosphor-icons/react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} color="white"/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar