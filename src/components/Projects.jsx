import "./Projects.css";

export default function Projects() {
    return (
        <>
            <h3 className="Projects-Title">⭐ Featured projects</h3>
            <section className="Projects">
                <article className="Projects-Project">
                    <h4>password-generator</h4>
                    <p>A simple and easy-to-use password generator project.</p>
                    <div className="Projects-Project-Tools">
                        <div className="Projects-Project-Tools-Item"><span className="html"></span><span>HTML</span></div>
                        <div className="Projects-Project-Tools-Item"><span className="css"></span><span>CSS</span></div>
                            <div className="Projects-Project-Tools-Item"><span className="js"></span><span>JavaScript</span></div>
                    </div>
                </article>

                <article className="Projects-Project">
                    <h4>Project 1</h4>
                    <p>Project 1 description</p>
                </article>
            </section>
        </>
    )
}