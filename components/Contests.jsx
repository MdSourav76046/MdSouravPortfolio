import "./Contests.css";

export function Contests() {
    const contestRankings = [
        {
            rank: "5th",
            contest: "Winter Programming Contest 2024",
            team: "Algo Bangla",
        },
        {
            rank: "13th",
            contest: "IUT 11th National ICT Fest Programming Contest",
            team: "RU_Redemption",
        },
        {
            rank: "15th",
            contest: "CUET IUPC CodeStorm 1.0",
            team: "RU_SFS-2.0",
        },
        {
            rank: "19th",
            contest: "NCPC Preliminary JU 2023",
            team: "RU_Enigma",
        },
        {
            rank: "20th",
            contest: "IUJPC Sylhet Engineering College 2022",
            team: "RU_tourits",
        },
        {
            rank: "35th",
            contest: "Miaki Presents KUET IUPC 2025",
            team: "RU_Ka_mee_ha_mee_haaaaaaa",
        },
        {
            rank: "38th",
            contest: "ICPC Dhaka Regional 2022",
            team: "RU_AuraSphere",
        },
        {
            rank: "38th",
            contest: "SUST CSE Carnival IUPC 2024",
            team: "RU_SFS-2.0",
        },
        {
            rank: "1230th",
            contest: "Meta Hacker Cup Round-2 2023",
            team: "Individual",
        },
    ];

    const platforms = [
        {
            name: "CodeForces",
            profile: "#",
            logo: "https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg",
        },
        {
            name: "LeetCode",
            profile: "#",
            logo: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=256",
        },
        {
            name: "HackerRank",
            profile: "#",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
        },
        {
            name: "CodeChef",
            profile: "#",
            logo: "https://cdn.codechef.com/images/cc-logo.svg",
        },
        {
            name: "AtCoder",
            profile: "#",
            logo: "https://img.atcoder.jp/assets/atcoder.png",
        },
    ];

    return (
        <section id="contests" className="contests">
            <div className="contests-container">
                <h2 className="section-title">
                    Programming Contests & Problem Solving
                </h2>

                <div className="contests-content">
                    <div className="platforms-section">
                        <h3 className="subsection-title">Coding Platforms</h3>
                        <div className="platforms-grid">
                            {platforms.map((platform, index) => (
                                <a
                                    key={index}
                                    href={platform.profile}
                                    className="platform-card"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="platform-icon">
                                        <img
                                            src={platform.logo}
                                            alt={platform.name}
                                        />
                                    </div>
                                    <span className="platform-name">
                                        {platform.name}
                                    </span>
                                    <span className="platform-arrow">→</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="stats-section">
                        <h3 className="subsection-title">
                            Problem Solving Stats
                        </h3>
                        <div className="stats-grid">
                            <div className="stat-box">
                                <div className="stat-number">2500+</div>
                                <div className="stat-label">
                                    Problems Solved
                                </div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">350+</div>
                                <div className="stat-label">
                                    Contests Participated
                                </div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">1708</div>
                                <div className="stat-label">Codeforces Max</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">2009</div>
                                <div className="stat-label">CodeChef Max</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">2173</div>
                                <div className="stat-label">
                                    LeetCode Rating
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rankings-section">
                        <h3 className="subsection-title">Contest Rankings</h3>
                        <div className="rankings-grid">
                            {contestRankings.map((ranking, index) => (
                                <div key={index} className="ranking-card">
                                    <div className="ranking-badge">
                                        {ranking.rank}
                                    </div>
                                    <div className="ranking-details">
                                        <h4 className="ranking-contest">
                                            {ranking.contest}
                                        </h4>
                                        <p className="ranking-team">
                                            Team: {ranking.team}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
