import React from 'react';

export default function Input({ text, func }) {
  return (
    <>
      <input type="text" placeholder={text} onChange={func} />
    </>
  );
}
