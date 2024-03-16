import React from 'react';

export default function Result(props) {
  const { fruit, background, color, content } = props.data;
  console.log(props);
  return (
    <div>
      <img src={`${fruit}.jpg`} height={200} alt={fruit} />
      <div style={{ background, color }}>{content}</div>
    </div>
  );
}
