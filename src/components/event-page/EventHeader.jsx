import React from 'react'
import RightArrow from '../../assets/images/svg/right-arrow.svg'
import Nav from '../common/Nav'

const EventHeader = () => {
    return (
        <>
            <div className="flex items-center justify-center bg-[url(/src/assets/images/png/event-hero-bg-img.png)] bg-no-repeat bg-center bg-cover flex-col">
                <div className="w-full">
                    <Nav />
                </div>
                <div className="max-w-[1320px] px-4 w-full py-10 sm:pt-20 md:pt-[100px] sm:pb-14">
                    <p className='font-family-primary flex items-center gap-2 text-white font-normal leading-[150%] text-base mb-0'>Home <span><img src={RightArrow} alt="right-arrow" /></span> Events</p>
                    <h1 className='font-family-primary text-5xl sm:text-[64px] font-semibold leading-[150%] text-white'>Events</h1>
                </div>
            </div>
        </>
    )
}

export default EventHeader