import React from 'react';

export default function Text({ title, text }) {
  return (
    <div>
      <label htmlFor={title[0]}>{title[1]} : </label>
      <input type="text" />
    </div>
  );
}
