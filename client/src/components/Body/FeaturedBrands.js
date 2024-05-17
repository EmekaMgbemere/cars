import React, { useContext } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function FeaturedBrands() {
  

  return (
    <div className='newtrendbest'>
         <div>
            <span className=''>FEATURED BRANDS</span>
        </div>
        <div className='center newtrendbestitems'>
            <div className='bg-danger p-4 trending'></div>
            <div className='bg-success p-4 trending'></div>
        </div>
    </div>
  )
}
