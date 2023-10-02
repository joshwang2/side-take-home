import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import PropertyListings from './pages/PropertyListings';


function App() {
  // Creates route for various pages
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property-listings" element={<PropertyListings />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
