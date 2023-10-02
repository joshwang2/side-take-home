import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  // Get current page location
  const location = useLocation();

  return (
    // Create a container div for the layout
    <div className="layout-container">
      {/* Create sticky navigation bar */}
      <nav className="nav-bar">
        <p className="page-name">
          {location.pathname === '/' ? 'Home' : 'Property Listings'}
        </p>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/property-listings">Property Listings</Link>
          </li>
        </ul>
      </nav>
      {/* Render the page content below the static navigation bar */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;