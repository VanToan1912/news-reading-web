import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Navbar.css';

const Navbar = ({ feedURLs, setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleNavLinkClick = (title) => {
    setSelectedCategory(title);
    navigate(`/${title}`);
  };

  let newsList =
    <nav className='navbar'>
      <ul className={`flex-wrap d-flex justify-content-center`}>
        {feedURLs.map(feed => (
          <NavLink
            key={feed.url}
            to={`/${feed.title}`}
            className={`cate-name w-25 ${classes.navLink}`}
            onClick={() => handleNavLinkClick(feed.title)}
          >
            {feed.title}
          </NavLink>
        ))}
      </ul>
    </nav>;

  return (
    <div className='container'>
      {newsList}
    </div>
  );
};

export default Navbar;
