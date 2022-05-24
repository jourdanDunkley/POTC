import React from 'react';
import Message from './Message';

export default function Container(props) {
  if (props.left == 'true') {
    return (
      <div className='wrapper-box'>
        <div className='wrapper-image flex-item'>
          <img src={props.image} alt='' />
        </div>
        <Message title={props.title} text={props.text}></Message>
      </div>
    );
  } else {
    return (
      <div className='wrapper-box reversed-wrapper'>
        <div className='wrapper-image flex-item'>
          <img src={props.image} alt='' />
        </div>
        <Message title={props.title} text={props.text}></Message>
      </div>
    );
  }
}
