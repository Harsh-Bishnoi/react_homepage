import React from 'react'
import joinUs from '../../assets/images/png/join-us-img.png'
import CustomHeading from '../common/CustomHeading'
import CustomDescription from '../common/CustomDescription'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'
import { Line } from '../../utils/icon'

const JoinUs = () => {
    return (
        <>
            <div className="pb-10 sm:pb-[80px] md:pb-[90px]">
                <div className="max-w-[1284px] px-4 mx-auto">
                    <div className="flex flex-row flex-wrap -mx-3 items-center">
                        <div className="w-full md:w-1/2 px-4 flex justify-center max-lg:mb-5">
                            <img src={joinUs} alt="join-us" />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="">
                                <p className='mb-2.5'><Line /></p>
                                <CustomHeading HeadingClass="mb-4" heading="Join Us !" />
                                <CustomDescription discriptionClass="font-family-primary mb-[15px] text-base !leading-[150%] lg:max-w-[480px] text-[#000000B2]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue " />
                                <CustomHeading HeadingClass="mb-3.5 !text-[35px]" heading="Sign Up" />
                                <div className="sm:flex gap-4 sm:mb-4">
                                    <Input type="text" text="First Name" />
                                    <Input type="text" text="Last Name" />
                                </div>
                                <Input inputClass="mb-4 w-full lg:max-w-[574px]" type="email" text="Email Address" />
                                <div className="sm:flex gap-4 sm:mb-4">
                                    <Input type="password" text="Password" />
                                    <Input type="password" text="Confirm Password" />
                                </div>
                                <textarea className='font-family-primary fw-normal text-base leading-[100%] mb-[37px] text-[#000000B2] w-full lg:max-w-[574px] pt-2.5 border border-[#00000066] rounded-[5px] min-h-[124px] px-[17px]' placeholder='About Me'></textarea>
                                <div className="max-lg:flex justify-center">
                                    <CustomButton btnClass="text-base w-full !border border-[#2C49FE] rounded-[23px] max-w-[574px]" btn="Sign up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinUs