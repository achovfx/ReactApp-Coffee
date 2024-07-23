import React from 'react';
import "./GroupItem.css";

export default function GroupItem({text,img}) {
    let imgPath = `./images/groupIcons/${img}`;
  return (
    <div className='groupItem-container'>
        <div className="img">
            <img src={imgPath} alt="Group Icon"/>
        </div>
        <p>{text}</p>
    </div>
  )
}
