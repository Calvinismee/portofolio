import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Heading animation
        const heading = container.current.querySelector('h1');
        gsap.fromTo(heading,
            { opacity: 0, y: -30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Cards animation
        const cards = container.current.querySelectorAll('.card');
        gsap.fromTo(cards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 0.8,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, { scope: container });
    return (
        <div ref={container} className="text-xs sm:text-lg component-container">
            <header>
                <h1 className="text-center about-h1">Get To Know Me</h1>
            </header>
            <div className="flex flex-row gap-5">
                <div className="card p-8 w-full flex flex-col gap-4">
                    <p className="text-justify">
                        I’m an undergraduate Computer Science student at IPB University with a strong curiosity for understanding how things work, whether it’s the logic behind algorithms, the way systems interact, or how small pieces of code come together to form something useful. This curiosity naturally led me to explore the world of web development, where I discovered my passion for building and experimenting. Right now, I’m diving into fullstack development — learning to bring ideas to life by working on both the front-end and back-end. I enjoy exploring new tools, experimenting with different technologies, and constantly challenging myself to create web experiences that are not only functional but also engaging and meaningful.
                    </p>
                </div>
            </div>
        </div>
    )
};
export default About;