import React from 'react';
import Div from '../Div';

export default function Timeline({ columnData }) {
  return (
    <>
      {columnData.map((item, index) => (
        <Div className="cs-time_line cs-style1" key={index}>
          <h3 className="cs-accent_color">{item.year}</h3>
          <h2>{item.name}</h2>
          <p>{item.position}</p>
          
          {/* Display image instead of type */}
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 'auto', height: 'auto', marginTop: '10px', marginLeft: '-19px' }}
            />
          ) : (
            <p>No image</p> // Optional fallback
          )}
        </Div>
      ))}
    </>
  );
}