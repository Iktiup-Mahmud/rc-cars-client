import React from 'react';
import Contact from '../Contact/Contact';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategories from '../HomeCategories/HomeCategories';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCategories></HomeCategories>
            <Contact></Contact>
        </div>
    );
};

export default Home;