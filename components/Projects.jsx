import "./Projects.css";

export function Projects() {
    const projects = [
        {
            id: 1,
            title: "AI-Powered OCR iOS App",
            description:
                "Integrated my custom-made LLM model for text correction with my iOS application. The backend uses Firebase for storing user information, history, and saved PDFs, providing a seamless document scanning and text recognition experience.",
            technologies: ["Swift", "iOS", "LLM", "Firebase", "OCR", "AI/ML"],
            image: "/OCR.jpg",
            link: "https://www.linkedin.com/posts/md-sourav-7ba271230_im-excited-to-share-my-project-an-%F0%9D%97%94%F0%9D%97%9C-activity-7394745221303001089-xknn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADm0Gj4B2uDP-mBpSHVBCUkqPFQfGNTSrsc",
        },
        {
            id: 2,
            title: "Full-Stack iOS E-Commerce App",
            description:
                "A complete e-commerce solution featuring beautiful & responsive UI with SwiftUI, secure authentication using JWT, RESTful API for seamless backend integration, and comprehensive cart, wishlist, and order management. Includes an admin dashboard for product and user management with scalable architecture for future enhancements.",
            technologies: [
                "SwiftUI",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Sequelize",
                "JWT",
            ],
            image: "/ECOM.jpg",
            link: "https://github.com/MdSourav76046/IOSEcommerceAPP",
        },
        {
            id: 3,
            title: "PHP Bookstore CRUD Application",
            description:
                "A dynamic bookstore web application built with PHP and database management, allowing users to upload new books and navigate through a beautifully designed table interface. Features full CRUD operations for efficient book inventory management.",
            technologies: ["PHP", "Laravel", "MySQL", "HTML/CSS", "CRUD"],
            image: "/CRUD.png",
            link: "https://github.com/MdSourav76046/laravel_crud",
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="tech-badge"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
