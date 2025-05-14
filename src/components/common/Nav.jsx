import { useState, useEffect } from 'react';
import logo from '../../assets/images/svg/nav-logo.svg';
import CustomButton from './CustomButton';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav className='px-4'>
            <div className="max-w-[1320px] mx-auto">
                <div className="flex justify-between items-center py-[17px]">
                    <NavLink to="/" className="flex items-center gap-3.5">
                        <img src={logo} alt="nav-logo" className='max-w-[50px] sm:max-w-[98px]' />
                        <p className='font-family-primary font-bold text-2xl sm:text-4xl leading-[135%] text-[#2C49FE] mb-0'>Events<span className='text-[#01C8FF]'>Free</span></p>
                    </NavLink>
                    <div onClick={toggleNavbar} className="z-50 lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
                    </div>
                    <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-[50px] xl:gap-[60px] mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                        <li><NavLink className='font-family-primary font-semibold text-base leading-[100%] text-white hover:text-[#73cbe4] transition-all duration-200 ease-linear' to="/" activeclassname="active" >HOME</NavLink></li>
                        <li><NavLink className='font-family-primary font-semibold text-base leading-[100%] text-white hover:text-[#73cbe4] transition-all duration-200 ease-linear' to="/event" activeclassname="active">EVENTS</NavLink></li>
                        <li><NavLink className='font-family-primary font-semibold text-base leading-[100%] text-white hover:text-[#73cbe4] transition-all duration-200 ease-linear' to="/feed" activeclassname="active">FEED</NavLink></li>
                        <li><NavLink className='font-family-primary font-semibold text-base leading-[100%] text-white hover:text-[#73cbe4] transition-all duration-200 ease-linear' to="/festival" activeclassname="active">FESTIVALS PROFILE</NavLink></li>
                        <li><CustomButton btnClass="text-base" btn="Log Out" /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;