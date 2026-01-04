import "./About.css";

export function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Hello! I'm Md.Sourav, a Software Engineer Level 1 at
                            Enosis Solutions. I'm passionate about creating
                            efficient, scalable, and user-friendly software
                            solutions.
                        </p>
                        <p>
                            During my time at the University of Rajshahi, I was
                            deeply attached to competitive programming, solving
                            over 2500 problems across various online judges. I
                            proudly represented my university in more than 14
                            IUPC, ICPC, and NCPC contests, which honed my
                            problem-solving skills and algorithmic thinking.
                        </p>
                        <p>
                            With a strong foundation in software development and
                            a keen interest in problem-solving, I continuously
                            strive to learn new technologies and improve my
                            skills. I enjoy tackling challenging problems and
                            contributing to innovative projects.
                        </p>
                        <div className="skills">
                            <h3>Skills & Technologies</h3>
                            <div className="skills-grid">
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Java</span>
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">SQL</span>
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">PostgreSQL</span>
                                <span className="skill-tag">Express.js</span>
                                <span className="skill-tag">TypeScript</span>
                                <span className="skill-tag">LLM</span>
                                <span className="skill-tag">PHP</span>
                                <span className="skill-tag">Swift</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <h4>Experience</h4>
                            <p>Software Engineer at Enosis Solutions</p>
                        </div>
                        <div className="stat-card">
                            <h4>Education</h4>
                            <p>B.Sc. in CSE - University of Rajshahi</p>
                            <p>HSC - BAF Shaheen College, Kurmitola</p>
                        </div>
                        <div className="stat-card">
                            <h4>Focus</h4>
                            <p>Full Stack Development & Problem Solving</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
