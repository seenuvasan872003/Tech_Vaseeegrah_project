import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import '../App.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
        } else {
            // Scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);

    const handleSignUpClick = () => {
        window.location.href = 'https://flowcv.me/seenuvasan';
    };

    return (
        <nav className={`bg-[#F5F3EA] shadow-md py-1 fixed w-full z-10 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <img to='/' className="inherit max-w-none" src="https://billzy.com/wp-content/uploads/2024/08/billzy-logo.png" alt="Billzy" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 pr-5">
                        <NavLink to="/pricing" className='text-black hover:text-[#1c58b9]'>
                            Pricing
                        </NavLink>
                        <NavLink to="/" className='text-black hover:text-[#1c58b9]'>
                            About Us
                        </NavLink>
                        <NavLink to="/usecase" className='text-black hover:text-[#1c58b9]'>
                            Use Case
                        </NavLink>
                        <NavLink to="/contact" className='text-black hover:text-[#1c58b9]'>
                            Contact Us
                        </NavLink>
                        <button onClick={handleSignUpClick} className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded">Sign Up</button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={handleSignUpClick} className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-2 px-4 md:py-3 md:px-6 rounded">Sign Up</button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 ml-5">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <NavLink to="/pricing" className='block px-3 py-2 text-black hover:text-[#1c58b9]' onClick={() => setIsOpen(false)}>
                                Pricing
                            </NavLink>
                            <NavLink to="/" className='block px-3 py-2 text-black hover:text-[#1c58b9]' onClick={() => setIsOpen(false)}>
                                About Us
                            </NavLink>
                            <NavLink to="/usecase" className='block px-3 py-2 text-black hover:text-[#1c58b9]' onClick={() => setIsOpen(false)}>
                                Use Case
                            </NavLink>
                            <NavLink to="/contact" className='block px-3 py-2 text-black hover:text-[#1c58b9]' onClick={() => setIsOpen(false)}>
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}