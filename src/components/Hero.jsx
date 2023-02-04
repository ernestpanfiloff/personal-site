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
                <div class="Hero-Photo"><img src="me.jpg" alt="" /></div>
                <div class="Hero-Content">
                    <h2 className="Hero-Content-Title">
                        <span class="wave">👋</span> Hi! I'm <span className="highlight">Ernest.</span>
                    </h2>

                    <h2 className="Hero-Content-Title-Mobile">
                        <span class="wave">👋</span> Hi! <br /> I'm <span className="highlight red">Ernest.</span>
                    </h2>

                    <p className="Hero-Content-Subtitle">I'm a front-end developer, currently based in London, England. </p>

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
                            <p>resume</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
