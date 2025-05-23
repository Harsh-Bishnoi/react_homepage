import React from 'react'
import Nav from '../common/Nav'
import CustomDescription from '../common/CustomDescription'
import CustomButton from '../common/CustomButton'
import { CalenderLogo, HeaderLine, LocationLogo, MemberLogo } from '../../utils/icon'

const Header = () => {
    return (
        <div className="relative bg-[url(/src/assets/images/png/header-bg-img.png)] bg-no-repeat bg-center bg-cover pb-10 sm:pb-20 md:pb-[104px]">
            <div className="absolute inset-0 bg-black opacity-57"></div>
            <div className="relative z-10">
                <Nav />
                <div className="max-w-[1320px] px-4 mx-auto pt-10 sm:pt-20 md:pt-28 lg:pt-44">
                    <div className="relative">
                        <h1 className='font-family-primary text-white font-bold text-3xl sm:text-5xl md:text-[64px] leading-[150%] max-w-[1044px] pb-[18px]'>
                            Sed tortor in quisque morbi scelerisque etiam eu.
                        </h1>
                        <p className='absolute hidden lg:block left-[27.5%] top-[50%] max-w-[472px]'><HeaderLine /></p>
                    </div>
                    <CustomDescription discriptionClass="font-family-second text-xl max-w-[800px] mb-[33px] text-white" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,' />
                    <div className="flex items-center gap-6 flex-wrap pb-[145px]">
                        <CustomButton btnClass="text-xl" btn="Get Started" />
                        <a className='font-family-primary font-normal text-xl leading-[150%] text-white' href="">Learn more</a>
                    </div>
                    <div className="flex flex-col md:flex-row  w-full max-w-[962px] mb-16 ">
                        <div className="w-full md:w-11/12 bg-blue-600/75 md:rounded-full rounded-2xl p-5">
                            <div className="flex flex-wrap justify-center items-center lg:gap-y-6">
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py -2 px -4 border-0 lg:border-r lg:border-white">
                                    <div className="flex items-center justify-center space-x-4 pb-3">
                                        <p className='size-8'><LocationLogo /></p>
                                        <div>
                                            <p className="text-white text-lg font-medium leading-6">Location</p>
                                            <p className="text-blue-200 text-sm">Search by city</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py -2 px- 4 border-0 lg:border-r lg:border-white">
                                    <div className="flex items-center justify-center space-x-4 pb-3">
                                        <p className='size-8'><CalenderLogo /></p>
                                        <div>
                                            <p className="text-white text-lg font-medium leading-6">Date</p>
                                            <p className="text-blue-200 text-sm">09/23/2021</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py -2 p x-4 border-0 lg:border-r lg:border-white">
                                    <div className="flex items-center justify-center space-x-4 pb-3">
                                        <p className='size-8'><MemberLogo /></p>
                                        <div>
                                            <p className="text-white text-lg font-medium leading-6">Capacity</p>
                                            <p className="text-blue-200 text-sm">Search by city</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py -2 p x-4 flex justify-center lg:justify-end">
                                    <CustomButton btnClass="w-[185px] hover:!bg-[#2C49FE] hover:!text-white h-[70px] rounded-[150px] font-bold leading-[100%] text-xl !text-[#2C49FE] bg-white" btn="GO CHECK" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header