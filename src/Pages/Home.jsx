import React from 'react';
import Banner from '../Components/Banner';
import VolunteerContainer from '../Components/VolunteerContainer';

const Home = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <Banner></Banner>
            <VolunteerContainer></VolunteerContainer>
        </div>
    );
};

export default Home;