import React from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Body/Hero';
import Fresh from './Fresh';
import Trending from './Trending';
import Bestselling from './Bestselling';
import Footer from '../Footer/Footer';
import FeaturedBrands from './FeaturedBrands';
import SpecialOffers from './SpecialOffers';
function Home(){

    return(
        <div>
            <div>
                <Nav />
            </div>

                <div>
                    <Hero />
                </div>

            <div  className='container'>
                <div>
                    <Fresh />
                </div>

                <div>
                    <Trending />
                </div>
                
                <div>
                    <FeaturedBrands />
                </div>

                <div>
                    <Bestselling />
                </div>
                <div>
                    <SpecialOffers />
                </div>
            </div>
            <div>
                <Footer />
            </div>
               
        </div>
    )
}

export default Home;