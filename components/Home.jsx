import "./Home.css";

export function Home() {
    return (
        <section id="home" className="home">
            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-title">
                        <span>
                            Hi, I'm <span className="highlight">Md.Sourav</span>
                        </span>
                        <img
                            src="/arrow.png"
                            alt="arrow"
                            className="arrow-pointer"
                        />
                    </h1>
                    <h2 className="home-subtitle">Software Engineer</h2>
                    <p className="home-description">
                        Passionate about building intelligent solutions with
                        iOS, web, and AI. Competitive programmer who loves
                        turning complex challenges into impact—both in code and
                        teaching.
                    </p>
                    <div className="home-cta">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Get In Touch
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            View My Work
                        </button>
                    </div>
                </div>
                <div className="home-image">
                    <img
                        src="/MdSouravPic.png"
                        alt="Md.Sourav"
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
}
