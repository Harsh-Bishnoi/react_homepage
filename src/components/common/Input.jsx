import React from 'react'

const Input = ({ text, type, inputClass }) => {
    return (
        <input className={`font-family-primary font-normal text-base leading-[100%] text-[#000000B2] lg:max-w-[279px] max-sm:mb-4 w-full border border-[#00000066] rounded-[5px] h-[42px] px-[17px] ${inputClass}`} type={type} placeholder={text} />
    )
}

export default Input