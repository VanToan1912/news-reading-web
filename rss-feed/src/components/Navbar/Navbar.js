import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './Navbar.css';

const Navbar = ({ feedURLs, setSelectedCategory }) => {
  const navigate = useNavigate();

  const handleNavLinkClick = (title) => {
    setSelectedCategory(title);
    navigate(`/${title}`);
  };

  let newsList = (
    <nav className='navbar justify-content-center mb-5'>
      <ul className={`d-flex`}>
        {feedURLs.map(feed => (
          <li className={`list-unstyled mx-2`} key={feed.url}>
            <NavLink
              to={`/${feed.title}`}
              className={`cate-name w-25 ${classes.navLink}`}
              onClick={() => handleNavLinkClick(feed.title)}
            >
              {feed.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className='fluid-container'>
      {newsList}
    </div>
  );
};

export default Navbar;
