import React, { useState, useEffect } from 'react';
import axios from 'axios';
import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';

function PropertyList() {
  // State to track property data
  const [properties, setProperties] = useState(() => {
    const storedProperties = localStorage.getItem('properties');
    return storedProperties ? JSON.parse(storedProperties) : [];
  });

  // State to track favorite status for each property
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const stateAbbreviations = {
    Alabama: 'AL',
    Alaska: 'AK',
    Arizona: 'AZ',
    Texas: 'TX',
    // TODO: Add more state abbreviations in the future
  };

  // Fetch property data from API
  useEffect(() => {
    axios
      .get('https://api.simplyrets.com/properties', {
        auth: {
          username: 'simplyrets',
          password: 'simplyrets',
        },
      })
      .then((response) => {
        setProperties(response.data);
        console.log('Property data:', response.data);

        // Initialize favorites state with all properties using property IDs
        const initialFavorites = {};
        response.data.forEach((property) => {
          initialFavorites[property.id] = false;
        });

        // Retrieve properties from local storage if available
        const storedProperties = localStorage.getItem('properties');
        if (storedProperties) {
          setProperties(JSON.parse(storedProperties));
        } else {
          setProperties(response.data);
          localStorage.setItem('properties', JSON.stringify(response.data));
        }

        // Retrieve favorites from local storage if available
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        } else {
          setFavorites(initialFavorites);
          localStorage.setItem('favorites', JSON.stringify(initialFavorites));
        }
      })
      .catch((error) => {
        console.error('Error fetching property data:', error);
      });
  }, []);

  // Toggle favorite status for a property
  const toggleFavorite = (propertyIndex) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites];
      newFavorites[propertyIndex] = !newFavorites[propertyIndex];
      localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Save to local storage
      return newFavorites;
    });
  };


  // Format date from TZ to MM/DD/YY
  function formatToMMDDYY(dateTimeString) {
    const date = new Date(dateTimeString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}/${day}/${year}`;
  }

  // Add commas to a number to be displayed as price
  function numberWithCommas(value) {
    // Check if the value is undefined or null
    if (value === undefined || value === null) {
      return '';
    }
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // For uncapitalizing the words in a string except the first letter of each word
  function uncapitalizeWordsExceptFirst(inputString) {
    return inputString.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }

  function calculateBaths(full, half) {
    if (full && half) {
      return `${full + half * 0.5}`;
    } else if (full) {
      return `${full}`;
    } else if (half) {
      return `${half * 0.5}`;
    } else {
      return '0';
    }
  }

  return (
    <div className="property-list">
      {/* Map over properties and display property data */}
      {properties.map((property, index) => (
        <div key={property.id} className="property-item">
          <div className="photo">
            <img src={property.photos[0]} className="property-card" alt="Property Photo" />
            {/* Display filled heart icon if property is favorited, otherwise display empty heart icon */}
            <img
              src={favorites[index] ? heartFill : heartStroke}
              alt="Favorite"
              className="favorite-icon"
              onClick={() => toggleFavorite(index)}
            />
          </div>
          <div>
            <p className="property-details">
              {property.property.bedrooms} BR | {calculateBaths(property.property.bathsFull)} Bath | {numberWithCommas(property.property.area)} Sq Ft
            </p>
            <p className="list-price">
              List Price: ${numberWithCommas(property.listPrice)}
            </p>
            <p className="address">
              Address: {property.address.streetNumberText} {uncapitalizeWordsExceptFirst(property.address.streetName)}, {property.address.city}, {stateAbbreviations[property.address.state]}
            </p>
            <p className="listed-date">
              Listed: {formatToMMDDYY(property.listDate)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
