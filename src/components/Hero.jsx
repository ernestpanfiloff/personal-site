import React from "react";
import "./Hero.css";
import { annotate } from "rough-notation";

export default class Hero extends React.Component {
    componentDidMount() {
        const highlight = annotate(
            document.querySelector(".highlight"),
            { type: "highlight", color: "#FF002E" }
        );

        // Run highlight.show(); when page finished loading
        window.addEventListener("load", () => {
            highlight.show();
        }
        );
    }

    render() {
        return (
            <div className="Hero">
                <div className="Hero-Photo"><img src="me.jpg" alt="" /></div>
                <div className="Hero-Content">
                    <p className="Hero-Content-Badge"><a href="https://www.linkedin.com/in/ernestaspanfilovas/opportunities/job-opportunities/details/?profileUrn=urn%3Ali%3Afs_normalized_profile%3AACoAAAmC3r8Bn8D0uzFZGz73VCham0zhLlcPFbU" alt="Link to Linkedin" target="_blank">
                        I'm open to work!
                    </a></p>


                    <h2 className="Hero-Content-Title">
                        <span className="wave">👋</span> Hi! I'm <span className="highlight">Ernest.</span>
                    </h2>

                    <h2 className="Hero-Content-Title-Mobile">
                        <span className="wave">👋</span> Hi! <br /> I'm <span className="highlight red">Ernest.</span>
                    </h2>

                    <p className="Hero-Content-Subtitle">I'm a web developer, currently based in London, England. </p>

                    <div className="Hero-Content-Icons">
                        <div className="Hero-Content-Icons-Icon">
                            <img src="github.png" alt="" />
                            <p><a href="https://github.com/ernestpanfiloff" alt="link to github" target="_blank">github</a></p>
                        </div>
                        <div className="Hero-Content-Icons-Icon">
                            <img src="linkedin.png" alt="" />
                            <p><a href="https://www.linkedin.com/in/ernestaspanfilovas/" alt="link to github" target="_blank">linkedin</a></p>
                        </div>
                        <div className="Hero-Content-Icons-Icon">
                            <img src="cv.png" alt="" />
                            <p><a href="Ernestas_Panfilovas_Resume.pdf" alt="download resume" target="_blank">resume</a></p>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}
