import React from 'react';
import "./Poster.css";
import MainBtn from '../MainBtn/MainBtn';

export default function Poster() {
  return (
    <div className='poster-container'>
        <div className="items">
            <div className="right">
                <h3>انواع قهوه فوری</h3>
                <p>انواع قهوه فوری کلاسیک، کافی میکس، کافی میت، کاپوچینو، لاته، موکاچینو، هات چاکلت و نسکافه گلد</p>
                <MainBtn text="همین حالا خرید کن" />
            </div>
            <div className="img">
                <img src="./images/poster/poster-1.svg" alt="poster img"/>
            </div>
        </div>
    </div>
  )
}
