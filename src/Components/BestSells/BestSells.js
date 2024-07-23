import React from 'react';
import "./BestSells.css";
import ProductItem from '../ProductItem/ProductItem';

export default function BestSells() {
  return (
    <div className='bestSells-container'>
        <div className="title">
            <h2>
                پرفروش ترین ها
            </h2>
        </div>
        <div className="ProductsList">
            <ProductItem title="کاپوچینو" coffee="50%" milk="50%" price="46000" img="img-capochino.svg"/>
            <ProductItem title="اسپرسو" coffee="50%" milk="50%" price="46000" img="img-esperso.svg"/>
            <ProductItem title="ماکیاتو" coffee="50%" milk="50%" price="46000" img="img-maciato.svg"/>
            <ProductItem title="لاته" coffee="50%" milk="50%" price="46000" img="img-coffee.svg"/>
            
            <ProductItem title="اسپرسو" coffee="50%" milk="50%" price="46000" img="img-esperso.svg"/>
            <ProductItem title="ماکیاتو" coffee="50%" milk="50%" price="46000" img="img-maciato.svg"/>
            <ProductItem title="لاته" coffee="50%" milk="50%" price="46000" img="img-coffee.svg"/>
            <ProductItem title="کاپوچینو" coffee="50%" milk="50%" price="46000" img="img-capochino.svg"/>
        </div>
    </div>
  )
}
