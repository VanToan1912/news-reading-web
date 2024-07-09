import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Navbar.css';

const Navbar = ({ feedURLs, setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleNavLinkClick = (title) => {
    setSelectedCategory(title);
    navigate(`/home/${title}`);
  };
  return (
    <nav>
      {feedURLs.map(feed => (
        <NavLink
          key={feed.url}
          to={`/home/${feed.title}`}
          className={`title ${classes.navLink}`}
          onClick={() => handleNavLinkClick(feed.title)}
        >
          {feed.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
