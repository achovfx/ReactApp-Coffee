import React from 'react';
import "./ProductItem.css";

export default function ProductItem({title="بدون نام", coffee="0%", milk="0%", price="0", img="img-coffee.svg"}) {
    let imgPath = `./images/products/${img}`;
    return (
    <div className='productItem-container'>
        <div className="top">
            <div className="img">
                <img src={imgPath} alt="product image" />
            </div>
            <div className="details">
                <h4>{title}</h4>
                <p><span>شیر {milk}</span> | <span>قهوه {coffee}</span></p>
                <h4><span>تومان</span><span>{price}</span></h4>
            </div>
        </div>
        <div className="buy">
            <a href="#">سفارش</a>
        </div>
    </div>
  )
}
