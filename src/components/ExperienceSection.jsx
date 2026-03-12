import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CiCalendarDate } from 'react-icons/ci';
import { GoOrganization } from 'react-icons/go';
import { MdPlace } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'organization', label: 'Organization' },
];

const SECTION_CONTENT = {
  experience: [
    {
      title: 'Front End Developer (Part Time)',
      period: 'Mar 2025 - Sep 2025',
      organization: 'IT-Today 2025 (HIMALKOM IPB)',
      location: 'Indonesia',
      description:[
        '1. Designed UI/UX for authentication page and dashboard using Figma. ',
        '2. Implemented UI/UX design using React.js and Tailwind.css.',
        '3. Integrated backend APIs for real-time data display using Axios.js',
        '4. Added 9,006 lines and removed 4,543 lines of code and pushed 98 commits',
        '5. Evaluated UI/UX design based on various feedbacks',
        '6. Debugged API integration\'s errors'

      ],
    },
  ],
  education: [
    {
      title: 'Bachelor of Computer Science',
      period: '2022 - Present',
      organization: 'IPB University',
      location: 'Bogor, Indonesia',
      description:[
        'Focused on software engineering, data structures, and web development. ',
        'Built team-based projects for fullstack and UI workflows.',
      ],
    },
  ],
  organization: [
    {
      title: 'Himpunan Mahasiswa Ilmu Komputer (HIMALKOM) IPB',
      period: '2026 - Present',
      organization: 'Department Organization',
      location: 'IPB University',
      description:[
        'Contributed to internal web tools and event websites by collaborating ',
        'with design and backend teams on responsive front-end delivery.',
      ],
    },
  ],
};

const getDescriptionLines = (description) => {
  if (Array.isArray(description)) {
    return description.filter(Boolean);
  }

  return String(description)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
};

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const container = useRef(null);

  useGSAP(
    () => {
      const revealItems = container.current?.querySelectorAll('[data-reveal]');
      if (!revealItems?.length) return;

      gsap.fromTo(
        revealItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const items = container.current?.querySelectorAll('.experience-item');
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.12,
          ease: 'power2.out',
        }
      );
    },
    { scope: container, dependencies: [activeTab], revertOnUpdate: true }
  );

  return (
    <section ref={container} className="component-container section-shell px-2">
      <header data-reveal>
        <h1 className="text-center about-h1">Experience Section</h1>
      </header>

      <div className="experience-wrapper" data-reveal>
        <div className="experience-tablist" role="tablist" aria-label="Profile sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`experience-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="experience-panel">
          <div className="experience-timeline">
            {SECTION_CONTENT[activeTab].map((item) => (
              <article className="experience-item" key={`${item.title}-${item.period}`}>
                <span className="experience-dot" aria-hidden="true" />
                <h2 className="experience-role">{item.title}</h2>
                <div className="experience-meta">
                  <span className='flex items-center gap-2'><CiCalendarDate /> {item.period}</span>
                  {activeTab === 'organization' || (
                    <span className='flex items-center gap-2'><GoOrganization /> {item.organization}</span>
                  )}
                  <span className='flex items-center gap-2'><MdPlace /> {item.location}</span>
                </div>
                <div className="experience-description">
                  {getDescriptionLines(item.description).map((line, lineIdx) => (
                    <p className="experience-description-line" key={`${item.title}-line-${lineIdx}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
