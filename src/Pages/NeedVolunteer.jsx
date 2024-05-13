import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Volunteer from '../Components/Volunteer';
import NeedVolunteerCard from '../Components/NeedVolunteerCard';

const NeedVolunteer = () => {
    const volunteers = useLoaderData()
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div className='w-full text-center mt-10'>
                <h3 className='text-3xl font-extrabold'>Need Volunteer Posts</h3>
                <p className='w-[70%] mx-auto mt-4 mb-[80px]'>Here is the all volunteer needed posts made by the members of Volunteer Hub Community. Grab the opportunity and be the member of an excelent team before the deadline is over</p>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {
                    volunteers.map((volunteer) => <NeedVolunteerCard volunteer={volunteer} key={volunteer._id}></NeedVolunteerCard> )
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;