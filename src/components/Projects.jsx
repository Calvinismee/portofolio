import React, { useState, useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectList = [
    {
        title: 'Get It Done',
        description: 'A minimalist web application designed to boost productivity by combining a to-do list manager with an integrated Pomodoro timer. Users can easily create, track, and organize their tasks while maintaining focus through structured work sessions. With its clean and distraction-free interface, the app helps streamline daily planning, balance work and rest, and improve overall time management.',
        type: 'Personal',
        badges: ['Fullstack','Next.js', 'React.js', 'Tailwind', 'Firebase'],
        videos_url: ['./videos/basic_2.webm', './videos/tomorrow.webm', './videos/pomodoro.webm'],
        url:'https://getitdone-theta-ebon.vercel.app/',
    },
    {
        title: 'IT-Today 2025',
        description: 'The official website of “IT Today 2025”, a major technology event organized by HIMALKOM IPB. It provides access to various competitions such as GameToday (Game Jam), MineToday (Data Mining & Machine Learning), HackToday (CTF for cybersecurity), and UXToday (UI/UX design). Features include registration, login (with Google integration), and a centralized dashboard to easily manage and participate in contests.',
        type: 'Group',
        badges: ['Frontend','React.js', 'Tailwind'],
        videos_url: ['./videos/ittod.webm'],
        url:'https://ittoday.web.id/',
    },
];

const Projects = () => {
    // Track active video index for each project (by project index)
    const [activeIndexes, setActiveIndexes] = useState(
        ProjectList.map(() => 0)
    );
    
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
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
        
        // Cards animation with stagger effect
        const cards = container.current.querySelectorAll('.card');
        gsap.fromTo(cards,
            { opacity: 0, y: 100 },
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.3,
                duration: 0.8,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%"
                }
            }
        );
    }, { scope: container });

    // Handle dot click
    const handleDotClick = (projectIdx, videoIdx) => {
        setActiveIndexes((prev) =>
            prev.map((val, idx) => (idx === projectIdx ? videoIdx : val))
        );
        // Scroll to the video
        document.getElementById(`video${projectIdx}-${videoIdx}`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    };

    return (
        <div ref={container} className="component-container px-2 ">
            <header>
                <h1 className="text-center about-h1">Latest Work</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {ProjectList.map((project, idx) => (
                    <div className="card bg-base-100 w-full max-w-xs sm:max-w-md mx-auto shadow-sm" key={idx}>
                        <div className="flex flex-col gap-0">
                            <figure>
                                <div className="carousel w-full">
                                    {project.videos_url.map((video_url, video_idx) => (
                                        <div
                                            key={video_idx}
                                            id={`video${idx}-${video_idx}`}
                                            className="carousel-item relative w-full"
                                            style={{ display: activeIndexes[idx] === video_idx ? "block" : "none" }}
                                        >
                                            <div className="relative group">
                                                <video
                                                    autoPlay
                                                    loop
                                                    src={video_url}
                                                    className="w-full h-full rounded transition-all duration-300 group-hover:blur-sm group-hover:brightness-75"
                                                />
                                                <button
                                                    className="hover:cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ pointerEvents: "auto" }}
                                                    onClick={() => {window.open(project.url)}}
                                                >
                                                    <span className="bg-white/80 text-black px-4 py-2 shadow font-semibold">
                                                        See More
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </figure>
                            {/* Dots navigation below the carousel */}
                            <div className="flex max-h-10 w-full justify-center gap-2 mt-2">
                                {project.videos_url.map((_, navIdx) => (
                                    <button
                                        key={navIdx}
                                        type="button"
                                        onClick={() => handleDotClick(idx, navIdx)}
                                        aria-label={`Go to video ${navIdx + 1}`}
                                    >
                                        <span
                                            className={`inline-block w-2 h-2 rounded-full transition-all duration-300 ${activeIndexes[idx] === navIdx
                                                    ? "bg-gray-600 scale-105"
                                                    : "bg-gray-400 scale-100"
                                                }`}
                                        ></span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="card-body gap-7">
                            <div className="flex flex-col gap-3">
                                <h2 className="card-title">
                                    {project.title}
                                    <div className="badge">{project.type}</div>
                                </h2>
                                <p>{project.description}</p>
                            </div>
                            <div className="card-actions justify-end">
                                {project.badges.map((badge, badge_idx) => (
                                    <div key={badge_idx} className="badge badge-outline">{badge}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;