import React from 'react';
import "./CommentItem.css"

export default function CommentItem({username,theme=" ",star,text}) {
    let mainClass = `commentItem-container ${theme}`
  return (
    <div className={mainClass}>
        <div className="name">
            <p>{username}</p>
            <img src="./images/star.svg" alt="star" />
        </div>
        <div className="text">
            <p>{text}</p>
        </div>
    </div>
  )
}
