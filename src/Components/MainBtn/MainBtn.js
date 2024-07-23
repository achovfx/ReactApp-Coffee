import React from 'react';
import "./MainBtn.css"

export default function MainBtn({text}) {
  return (
    <div className='mainbtn-container'>
        <a href="#">{text}</a>
    </div>
  )
}
