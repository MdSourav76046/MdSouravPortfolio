import "./Experiences.css";

export function Experiences() {
    const experiences = [
        {
            id: 1,
            position: "Software Engineer Level 1",
            company: "Enosis Solutions",
            duration: "Nov 15, 2025 - Present",
            description: [
                "Currently undergoing intense training in full-stack web development",
                "Mastered HTML, CSS, JavaScript, Node.js, Express.js, and TypeScript",
                "Implemented JWT token-based authentication for secure applications",
                "Built and deployed multiple projects connecting frontend, backend, and PostgreSQL database",
                "Developed RESTful APIs and responsive web applications",
            ],
        },
        {
            id: 2,
            position: "Competitive Programming Trainer",
            company: "University of Rajshahi",
            duration: "July 2022 - November 2025",
            description: [
                "Trained 100+ juniors in competitive programming",
                "Prepared students for IUPC, ICPC, and NCPC competitions",
                "Developed curriculum and mentored aspiring programmers",
                "Focused on data structures, algorithms, and problem-solving skills",
            ],
        },
    ];

    return (
        <section id="experiences" className="experiences">
            <div className="experiences-container">
                <h2 className="section-title">Work Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="experience-card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-position">
                                            {exp.position}
                                        </h3>
                                        <h4 className="experience-company">
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <span className="experience-duration">
                                        {exp.duration}
                                    </span>
                                </div>
                                <ul className="experience-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
