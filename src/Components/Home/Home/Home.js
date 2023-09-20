import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import '../../../App.css'
import '../Banner/Banner.css'
import Items from '../Items/items/Items';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Items></Items>
            <Footer />
        </div>
    );
};

export default Home;