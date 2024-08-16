import React from 'react'
import LocationCard from './location-card'

const Locations = () => {
    return (
        <div className='lg:px-4 mt-6 w-full lg:mt-10'>
            <span className='font-thin flex w-full justify-center text-4xl'>
                Our locations
            </span>
            <div className='flex gap-4 mt-4 flex-col md:flex-row'>
                <LocationCard />
                <LocationCard />
            </div>
        </div>
    )
}

export default Locations