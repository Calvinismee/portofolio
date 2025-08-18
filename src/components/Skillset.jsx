import StackIcon from "tech-stack-icons";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skillset = () => {
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
        
        // Section headings animation
        const sectionHeadings = container.current.querySelectorAll('h2');
        gsap.fromTo(sectionHeadings,
            { opacity: 0, y: 20 },
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.3,
                duration: 0.5,
                delay: 0.3,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%"
                }
            }
        );
        
        // Icons animation
        const icons = container.current.querySelectorAll('.tech-icon');
        gsap.fromTo(icons,
            { opacity: 0, scale: 0.5 },
            { 
                opacity: 1, 
                scale: 1, 
                stagger: 0.1,
                duration: 0.5,
                delay: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%"
                }
            }
        );
    }, { scope: container });
    return (
        <div ref={container} className="component-container px-2">
            <header>
                <h1 className="text-center about-h1">Skillset</h1>
            </header>
            <div className="flex flex-col gap-12">
                {/* Core Skills */}
                <div>
                    <h2 className="text-center text-xl font-semibold mb-4">Core Skills</h2>
                    <div className="flex flex-row flex-wrap justify-center gap-6">
                        <StackIcon name="js" className="tech-icon" />
                            <img 
                            src="./images/next.svg"
                            className="tech-icon"
                        />
                        <StackIcon name="react" className="tech-icon" />
                        <StackIcon name="tailwindcss" className="tech-icon" />
                        <StackIcon name="firebase" className="tech-icon" />
                    </div>
                </div>
                {/* Other Skills */}
                <div>
                    <h2 className="text-center text-xl font-semibold mb-4">Other Skills</h2>
                    <div className="flex flex-row flex-wrap justify-center gap-6">
                        <img 
                            src="./images/express.svg"
                            className="tech-icon"
                        />
                        <StackIcon name="nodejs" className="tech-icon" />
                        <StackIcon name="git" className="tech-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skillset;