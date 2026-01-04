import "./Achievements.css";

export default function Achievements() {
    const achievements = [
        {
            id: 1,
            title: "BAF Shaheen Kurmitola Math Olympiad",
            value: "Champion",
            badge: "2019",
            color: "blue",
            image: "/math-award.jpg",
            valueType: "champion",
        },
        {
            id: 2,
            title: "ICRPSET Innovation Champion",
            value: "Champion",
            badge: "2022",
            color: "orange",
            image: "/ieee-award.jpg",
            valueType: "champion",
        },
        {
            id: 3,
            title: "University Badminton Tournament",
            value: "Runner Up",
            badge: "67th Batch",
            color: "purple",
            image: null,
            valueType: "runner-up",
        },
        {
            id: 4,
            title: "Special Achievement Award",
            value: "CSE Department",
            badge: "Programming",
            color: "green",
            image: "/special-award.jpg",
            valueType: "special-award",
        },
        {
            id: 5,
            title: "First Solver - IUT 11th ICT Fest",
            value: "Problem B",
            badge: "RU_Redemption",
            color: "blue",
            image: "/problemb-award.jpg",
            valueType: "first-solver",
        },
    ];

    return (
        <section id="achievements" className="achievements">
            <div className="achievements-container">
                <h2 className="section-title">Achievements</h2>
                <div className="achievements-grid">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className={`achievement-card ${achievement.color}`}
                        >
                            {achievement.image && (
                                <div className="achievement-image-wrapper">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="achievement-image"
                                    />
                                </div>
                            )}
                            <div className="achievement-header">
                                <h3 className="achievement-title">
                                    {achievement.title}
                                </h3>
                                <span className="achievement-badge">
                                    {achievement.badge}
                                </span>
                            </div>
                            <div
                                className={`achievement-value ${
                                    achievement.valueType || ""
                                }`}
                            >
                                {achievement.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
