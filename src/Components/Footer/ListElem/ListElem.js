import React from 'react';
import "./ListElem.css";

export default function ListElem({title,lnk1,lnk2,lnk3,lnk4,lnk5}) {
  return (
    <div className='listElem-container'>
        <h3>{title}</h3>
        <ul>
            <li>
                <a href="#">{lnk1}</a>
            </li>
            <li>
                <a href="#">{lnk2}</a>
            </li>
            <li>
                <a href="#">{lnk3}</a>
            </li>
            <li>
                <a href="#">{lnk4}</a>
            </li>
            <li>
                <a href="#">{lnk5}</a>
            </li>
        </ul>
    </div>
  )
}
