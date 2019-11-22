import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/thunks/currentUser';

const Header = ({ logout }) => {
  const handleLogout = () => logout();

    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link
              to="/"
              className="header__title"
            >
              <h1>Todo List Igaku</h1>
            </Link>
            <button
              type="button"
              className="button button--link"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </header>
);
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Header);
