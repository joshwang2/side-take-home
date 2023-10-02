import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/property-listings">Property Listings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;