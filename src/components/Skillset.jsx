import StackIcon from "tech-stack-icons";

const Skillset = () => {
    return (
        <div className="component-container px-2">
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
                            src="/images/next.svg"
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
                            src="/images/express.svg"
                            className="tech-icon"
                        />
                        <StackIcon name="nodejs" className="tech-icon" />
                        <StackIcon name="git" className="tech-icon" />
                        <img 
                            src="/images/py.svg"
                            className="tech-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skillset;