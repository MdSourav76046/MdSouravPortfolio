import "./Header.css";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("light-theme");
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img
                        src="/signature1.png"
                        alt="Md.Sourav Signature"
                        className="signature-logo"
                    />
                </div>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? "☀️" : "🌙"}
                </button>
                <button
                    className={`hamburger ${isMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
                    <ul className="nav-menu">
                        <li>
                            <a onClick={() => scrollToSection("home")}>Home</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("about")}>
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("projects")}>
                                My Projects
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("contests")}>
                                Programming Contests
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("experiences")}>
                                Experiences
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("contact")}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
