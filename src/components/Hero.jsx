import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const container = useRef(null);
    const avatarRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        // Avatar animation
        gsap.fromTo(avatarRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 5, ease: "elastic.out(1, 0.5)" }
        );

        // Content animation - staggered for badges
        const badges = contentRef.current.querySelectorAll('.badge');
        gsap.fromTo(badges,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, stagger: 0.2, duration: 0.6, delay: 0.5, ease: "power2.out" },
        );

        // Heading animation
        const heading = contentRef.current.querySelector('h1');
        gsap.fromTo(heading,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: "power2.out" }
        );
    }, { scope: container });

    return (
        <div ref={container} className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full px-4 sm:px-12 gap-8">
            <div ref={avatarRef} className="avatar mb-6 md:mb-0">
                <div className="w-40 h-40 md:w-56 md:h-56 max-w-60 rounded-full overflow-hidden">
                    <img src="./images/me.webp" className="object-cover w-full h-full" />
                </div>
            </div>
            <div ref={contentRef} className="flex flex-col items-center md:items-start text-center md:text-left">
                <section className="flex flex-row gap-2 mb-4">
                    <div className="badge badge-outline text-xs p-5 md:p-3 md:text-base opacity-0">IPB University</div>
                    <div className="badge badge-outline text-xs p-5 md:p-3 md:text-base opacity-0">M0403241082</div>
                    <div className="badge badge-outline text-xs p-5 md:p-3 md:text-base opacity-0">Proxy Abelian</div>
                </section>

                <h1 className="hero-h1 m-0 p-0 text-xs sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                    JULIUS CALVIN KURNIADI
                </h1>
            </div>
        </div>
    )
};

export default Hero;