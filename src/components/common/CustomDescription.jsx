import React from 'react'

const CustomDescription = ({ discriptionClass, text }) => {
    return (
        <>
            <p className={`font-normal leading-[130%] ${discriptionClass}`}>{text}</p>
        </>
    )
}

export default CustomDescription