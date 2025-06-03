import React, { useState } from 'react';
import './SearchTabs.css';

const tabs = [
  { label: 'Hotels', icon: 'fa-hotel' },
  { label: 'Car Rentals', icon: 'fa-car' },
  { label: 'Flights', icon: 'fa-plane-departure' },
  { label: 'Trips', icon: 'fa-route' },
  { label: 'Cruises', icon: 'fa-ship' },
  { label: 'Activities', icon: 'fa-champagne-glasses' },
];

export default function SearchTabs() {
  const [active, setActive] = useState('Hotels');

  return (
    <div className="search-tabs-bar">
      <div className="search-tabs">
        {tabs.map(tab => (
          <button
            key={tab.label}
            className={active === tab.label ? 'active' : ''}
            onClick={() => setActive(tab.label)}
            type="button"
          >
            <i className={`fa-solid ${tab.icon}`}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
