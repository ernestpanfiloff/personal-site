import "./Tools.css";

export default function Tools({tools}) {
    return (
        <>
            <div className="Tools-Title">
                <h3>🧰 Tools & Skills</h3>
            </div>

            <div className="Tools-Content">

                {tools.map(tool => (
                    <div className="Tools-Content-Item" key={tool.id}>
                        <h4>{tool.category}</h4>
                        <p>{tool.tools.join(", ")}</p>
                    </div>
                ))}
                
            </div>
        </>
    );
}