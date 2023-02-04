import "./Projects.css";

export default function Projects({ projects }) {
    return (
        <>
            <div className="Projects-Title">
                <h3>⭐ Featured projects</h3>
                <a href="https://github.com/ernestpanfiloff?tab=repositories"><button>View more...</button></a>
            </div>

            <section className="Projects">
                {projects
                    .filter(project => project.isFeatured)
                    .map(project => (
                        <article className="Projects-Project" key={project.id}>
                            <h4><a href={project.url} alt={project.name} target="_blank ">{project.name}</a></h4>
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
