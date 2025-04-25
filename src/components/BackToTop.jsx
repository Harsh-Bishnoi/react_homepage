import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <div onClick={scrollToTop} className="fixed bottom-5 right-5 cursor-pointer z-50 hover:bg-[#0095BF] p-2 rounded-full shadow-lg bg-[#01C8FF] transition-all duration-200 ease-linear" >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}  >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </div>
            )}
        </>
    );
};

export default BackToTop;
