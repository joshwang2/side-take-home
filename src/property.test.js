import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import PropertyList from './pages/PropertyListings';

test('Layout renders without errors', () => {
  render(
    <Layout>
      <div>Test Content</div>
    </Layout>
  );

  // Ensure the navigation bar is rendered
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Property Listings')).toBeInTheDocument();
  // Ensure the test content is rendered
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});

test('Layout renders Home when on the home page', () => {
  render(
    <Layout>
      <div>Test Content</div>
    </Layout>
  );

  // Ensure the "Home" page name is rendered when on the home page
  // We do want to keep in mind that "Home" will always be int he navigation bar so we would want to perform another check on wehther a property card is generated potentially
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.queryByText('Property Listings')).not.toBeInTheDocument();
});

test('Layout renders Property Listings when on the property listings page', () => {
  render(
    <Layout>
      <PropertyList />
    </Layout>
  );

  // Ensure the "Property Listings" page name is rendered when on the property listings page
  expect(screen.getByText('Property Listings')).toBeInTheDocument();
  expect(screen.queryByText('Home')).not.toBeInTheDocument();
});