import React, { useState } from 'react';

export default function Select({ title, option, func }) {
  let html = '';
  for (let i = 0; i < option.length; i++) {
    html += `<option value='${option[i][0]}'>${option[i][1]}</option>`;
  }
  return (
    <>
      <label htmlFor={title[0]}>{title[1]} : </label>
      <select
        name={title[0]}
        dangerouslySetInnerHTML={{ __html: html }}
        onChange={func}
      ></select>
    </>
  );
}
