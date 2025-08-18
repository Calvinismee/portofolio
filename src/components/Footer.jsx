import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const container = useRef(null);
    
    useGSAP(() => {
        gsap.fromTo(container.current,
            { opacity: 0, y: 20 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    toggleActions: "play none none none"
                }
            }
        );
    }, { scope: container });
    
    return (
        <footer ref={container} className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Julius Calvin Kurniadi</p>
            </aside>
        </footer>
    )
};
export default Footer;