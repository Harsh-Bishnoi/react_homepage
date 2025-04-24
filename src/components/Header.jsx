import React from 'react'
import Nav from './Nav'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'
import location from '../assets/images/svg/location.svg'
import date from '../assets/images/svg/date.svg'
import member from '../assets/images/svg/member.svg'
import line from '../assets/images/svg/header-line.svg'

const Header = () => {
    return (
        <div className="relative bg-[url(/src/assets/images/png/header-bg-img.png)] bg-no-repeat bg-center bg-cover pb-10 sm:pb-20 md:pb-[104px]">
            <div className="absolute inset-0 bg-black opacity-57"></div>
            <div className="relative z-10">
                <Nav />
                <div className="max-w-[1320px] px-4 mx-auto">
                    <div className="relative">
                        <h1 className='font-family-primary text-white font-bold text-3xl sm:text-5xl md:text-[64px] leading-[150%] max-w-[1044px] pb-[18px]'>
                            Sed tortor in quisque morbi scelerisque etiam eu.
                        </h1>
                        <img className='absolute hidden lg:block left-[27.5%] top-[50%] max-w-[472px]' src={line} alt="" />
                    </div>
                    <CustomDescription discriptionClass="font-family-second text-xl max-w-[800px] mb-[33px] text-white" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,' />
                    <div className="flex items-center gap-6 flex-wrap pb-[145px]">
                        <CustomButton btnClass="text-xl" btn="Get Started" />
                        <a className='font-family-primary font-normal text-xl leading-[150%] text-white' href="">Learn more</a>
                    </div>
                    {/* <div className="max-w-[962px] rounded-[150px] bg-[#2C49FEBD] py-[19px] pr-[23px] pl-[35px] flex items-center">
                        <div className="flex items-center gap-[17px]">
                            <img src={location} alt="location-img" />
                            <div className="">
                                <h4 className='font-family-second leading-[100%] text-xl font-medium text-white mb-1'>Location</h4>
                                <p className='font-family-second leading-[100%] text-sm font-normal text-white opacity-70'>Search by city</p>
                            </div>
                            <div className="flex items-center gap-[17px] relative after:content-[''] after:absolute after:right-[-11px] after:top-1/2 after:translate-y-[-50%] after:h-[50px] after:w-[1px] after:bg-white"> </div>
                        </div>
                        <div className="flex items-center gap-[17px]">
                            <img src={date} alt="date-img" />
                            <div className="">
                                <h4 className='font-family-second leading-[100%] text-xl font-medium text-white mb-1'>Date</h4>
                                <p className='font-family-second leading-[100%] text-sm font-normal text-white opacity-70'>09/23/2021</p>
                            </div>
                        <div className="flex items-center gap-[17px] relative after:content-[''] after:absolute after:right-[-11px] after:top-1/2 after:translate-y-[-50%] after:h-[50px] after:w-[1px] after:bg-white"></div>
                        </div>
                        <div className="flex items-center gap-[17px]">
                            <img src={member} alt="member-img" />
                            <div className="">
                                <h4 className='font-family-second leading-[100%] text-xl font-medium text-white mb-1'>Capicity</h4>
                                <p className='font-family-second leading-[100%] text-sm font-normal text-white opacity-70'>Search by city</p>
                            </div>
                        <div className="flex items-center gap-[17px] relative after:content-[''] after:absolute after:right-[-11px] after:top-1/2 after:translate-y-[-50%] after:h-[50px] after:w-[1px] after:bg-white"></div>
                        </div>
                        <CustomButton btnClass="!py-[25px] rounded-[150px] !px-[40px] !text-xl !leading-[100%] !font-bold !bg-white !text-[#2C49FE]" btn="GO CHECK" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header
