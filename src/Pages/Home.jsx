import React from 'react';
import Banner from '../Components/Banner';
import VolunteerContainer from '../Components/VolunteerContainer';
import Aim from '../Components/Aim';
import Community from '../assets/Community';


const Home = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <Banner></Banner>
            <Aim></Aim>
            <VolunteerContainer></VolunteerContainer>
            <Community></Community>
        </div>
    );
};

export default Home;