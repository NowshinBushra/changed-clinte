import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ByAge from '../Shop/ByAge';
import ByBrand from '../Shop/ByBrand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h2 className='text-4xl font-bold text-accent text-center mt-16'>Shop by category</h2>
            <ByAge></ByAge>
            <ByBrand></ByBrand>
        </div>
    );
};

export default Home;