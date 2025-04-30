import React, { useEffect, useState } from 'react';
import { UpArrow } from '../utils/icon';

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
                <div onClick={scrollToTop} className="fixed bottom-5 right-5 cursor-pointer z-2 hover:bg-[#0095BF] p-2 rounded-full shadow-lg bg-[#01C8FF] transition-all duration-200 ease-linear" >
                    <UpArrow />
                </div>
            )}
        </>
    );
};

export default BackToTop;
