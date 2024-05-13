import React from 'react';
import Volunteer from './Volunteer';
import { useLoaderData } from 'react-router-dom';

const VolunteerContainer = () => {
    const volunteers = useLoaderData();
    
    return (
        <div className='lg:w-[1170px] mx-auto my-[100px]'>
            <div className='w-full mb-[60px]'>
                <h3 className='text-center text-2xl font-bold mb-4' >Our Arts and Volunteers </h3>
                <p className='w-[70%] text-center mx-auto'>Explore our Art and Volunteer Section: A sanctuary for creatives, where inspiration flourishes and every project becomes a masterpiece waiting to be born.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                     volunteers.slice(0,6).map(volunteer => <Volunteer volunteer={volunteer} key={volunteer._id}></Volunteer>)
                }
                
            </div>
        </div>
    );
};

export default VolunteerContainer;