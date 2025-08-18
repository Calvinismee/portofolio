import { useState, useEffect } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const controlNavbar = () => {
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
            setShow(true);
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className={`navbar bg-base-100 shadow-sm fixed top-0 w-full transition-transform duration-300 z-10 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex-1">
                <a href="#hero" className="btn btn-ghost text-xl">Juliusssan</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </div>
        </div>
    )
};
export default Navbar