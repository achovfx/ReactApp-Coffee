import React from 'react';
import "./Fav.css";
import ProductItem from '../ProductItem/ProductItem';

export default function Fav() {
  return (
    <div className='fav-container' style={{ backgroundImage: `url(./images/fav/fav-bg.svg)`}}>
        <div className="favContainer">
            <div className="title">
                <h2>
                    محبوب ترین ها
                </h2>
            </div>
            <div className="ProductsList">
                <ProductItem title="لاته" coffee="50%" milk="50%" price="46000" img="img-coffee.svg"/>
                <ProductItem title="ماکیاتو" coffee="50%" milk="50%" price="46000" img="img-maciato.svg"/>
                <ProductItem title="کاپوچینو" coffee="50%" milk="50%" price="46000" img="img-capochino.svg"/>
                <ProductItem title="اسپرسو" coffee="50%" milk="50%" price="46000" img="img-esperso.svg"/>
            </div>
        </div>
    </div>
  )
}
