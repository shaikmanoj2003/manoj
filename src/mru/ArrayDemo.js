import React from 'react';
import './man.css';

export default function ArrayDemo() {
  const food = [
    "sambar", "vadapav", "dosa", "brinjal"
  ];

  return (
    <>
      {food.map((ele, index) => (
        <h1>{ele}</h1>
      ))}
    </>
  );
}
