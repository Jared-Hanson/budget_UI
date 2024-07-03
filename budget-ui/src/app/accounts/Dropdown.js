import React, { useState, useEffect, useRef } from 'react';
import './accounts_styles/dropdown.css'; // Import your CSS for styling

const Dropdown = ({ categories, onSelect, curText }) => {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // TODO autofill categories

  const handleSelect = (category) => {
    console.log("here?")
    onSelect(category);
  };


  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="dropdown-container">
      {Object.keys(filteredCategories).map(group => (
        <div key={group} className="category-group">
          <div className="group-header">{group}</div>
          {filteredCategories[group].map(category => (
            <div
              key={category}
              className={`category-item ${hoveredCategory === category ? 'highlighted' : ''}`}
              onClick={() => handleSelect(`${group}:${category}`)}
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
            >
              {category}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;