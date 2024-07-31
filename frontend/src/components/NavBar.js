// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = ({ isAuthenticated, logout }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link to="/">ElevateYourSkill</Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li className={styles.navbarLink}><Link to="/">Home</Link></li>
        {isAuthenticated ? (
          <>
            <li className={styles.navbarLink}><a href="#" onClick={logout}>Logout</a></li>
          </>
        ) : (
          <>
            <li className={styles.navbarLink}><Link to="/signup">SignUp</Link></li>
            <li className={styles.navbarLink}><Link to="/information">Information</Link></li>
            <li className={styles.navbarLink}><Link to="/signin">SignIn</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
