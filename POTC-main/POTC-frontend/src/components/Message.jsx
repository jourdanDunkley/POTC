import React from 'react';

export default function Message(props) {
  return (
    <div className='message-box'>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
