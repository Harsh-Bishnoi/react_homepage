import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import { AwardLogo, ParticipantsLogo, SpeakerLogo, TopicsLogo } from '../utils/icon'

const Consectetur = () => {
    return (
        <>
            <div className="flex justify-center relative items-center py-[40px] sm:pb-[46px] sm:pt-[50px] bg-[url(/src/assets/images/png/consectetur-bg-img.png)] bg-no-repeat bg-cover bg-center">
                <div className="absolute inset-0 bg-[#2C49FECC]"></div>
                <div className="max-w-[920px] px-4 z-1">
                    <CustomHeading HeadingClass="!text-3xl sm:!text-5xl !leading-[130%] text-center pb-10 text-white" heading="Lorem ipsum dolor sit amet, consectetur" />
                    <CustomDescription discriptionClass="text-center max-w-[735px] font-family-primary text-white pb-[78px] font-normal !leading-[150%] mx-auto" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec " />
                    <div className="sm:max-w-[920px] sm:flex justify-between ">
                        <div className="text-center flex flex-col items-center max-sm:mb-6">
                            <p className='mb-1.5'> <ParticipantsLogo /></p>
                            <h3 className='font-family-primary font-bold text-[35px] leading-[100%] text-white pb-2.5'>8800</h3>
                            <p className='font-family-primary font-normal text-lg text-white'>PARTICIPANTS</p>
                        </div>
                        <div className="text-center flex flex-col items-center max-sm:mb-6">
                            <p className='mb-1.5'> <TopicsLogo /></p>
                            <h3 className='font-family-primary font-bold text-[35px] leading-[100%] text-white pb-2.5'>300</h3>
                            <p className='font-family-primary font-normal text-lg text-white'>TOPICS</p>
                        </div>
                        <div className="text-center flex flex-col items-center max-sm:mb-6">
                            <p className='mb-1.5'><SpeakerLogo /></p>
                            <h3 className='font-family-primary font-bold text-[35px] leading-[100%] text-white pb-2.5'>50</h3>
                            <p className='font-family-primary font-normal text-lg text-white'>SPEAKERS</p>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <p className='mb-1.5'><AwardLogo /></p>
                            <h3 className='font-family-primary font-bold text-[35px] leading-[100%] text-white pb-2.5'>30</h3>
                            <p className='font-family-primary font-normal text-lg text-white'>AWARDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consectetur