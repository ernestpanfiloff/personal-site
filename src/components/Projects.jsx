import "./Projects.css";

export default function Projects({ projects }) {
    return (
        <>
            <h3 className="Projects-Title">⭐ Featured projects</h3>
            <section className="Projects">
                {projects
                    .filter(project => project.isFeatured)
                    .map(project => (
                        <article className="Projects-Project" key={project.id}>
                            <h4><a href={project.url}>{project.name}</a></h4>
                            <p>{project.description}</p>
                            <div className="Projects-Project-Tools">
                                {project.tools.map(tool => (
                                    <div className="Projects-Project-Tools-Item" key={tool}>
                                        <span className={tool.toLowerCase()}></span>
                                        <span>{tool}</span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
            </section>
        </>
    )
}
