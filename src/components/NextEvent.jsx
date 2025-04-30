import React from 'react'
import { EventCalender, EventLocation, EventMember, Line } from '../utils/icon'
import CustomHeading from './common/CustomHeading'
import NextEventImg from '../assets/images/png/next-event-img.png'
import CustomButton from './common/CustomButton'


const NextEvent = () => {
    return (
        <>
            <div className="flex justify-center items-center py-10 sm:pt-[68px] sm:pb-20 md:pb-[120px] lg:pb-[155px]">
                <div className="max-w-[1320px] px-4">
                    <div className="flex justify-center pb-3">
                        <Line />
                    </div>
                    <CustomHeading HeadingClass="text-center" heading="Choose your next event" />
                    <div className="flex flex-wrap -mx-3 flex-row items-center justify-center mt-[33px]">
                        {[...Array(9)].map((_, index) => (
                            <div className="w-full sm:w-6/12 lg:w-4/12 px-3 flex justify-center">
                                <div key={index} className='max-w-[424px] w-full p-6 xl:pt-[35px] xl:pr-[37px] xl:pb-[30px] xl:pl-[43px] border border-[#00000033] rounded-[30px] hover:shadow-[0px_8px_35px_0px_#0000001A] hover:border-transparent transition-all duration-200 ease-linear group mb-6'>
                                    <img className='w-full rounded-[20px] mb-[21px] group-hover:rounded-none  transition-all duration-200 ease-linear' src={NextEventImg} alt="img" />
                                    <h2 className='font-family-primary font-semibold text-2xl leading-[150%] text-black mb-3'>Lorem ipsum dolar sit de</h2>
                                    <div className="flex mb-[17px] gap-2">
                                        <EventCalender />
                                        <p className='font-family-primary font-normal text-base leading-[150%] text-black opacity-60'>10/02/2022</p>
                                    </div>
                                    <div className="flex mb-[17px] gap-2">
                                        <EventLocation />
                                        <p className='font-family-primary font-normal text-base leading-[150%] text-black opacity-60'>Mumbai</p>
                                    </div>
                                    <div className="flex mb-8 gap-2">
                                        <EventMember />
                                        <p className='font-family-primary font-normal text-base leading-[150%] text-black opacity-60'>1,080</p>
                                    </div>
                                    <CustomButton btnClass="py-[10px] !px-[27px] !border " btn="Go Check" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NextEvent