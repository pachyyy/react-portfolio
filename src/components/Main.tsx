import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
    return (
        <div className="container">
            <div className="about-section">
                <div className="image-wrapper">
                    <img
                        src="https://i.postimg.cc/FHYhzz45/profile-pic.jpg"
                        alt="Avatar"
                    />
                </div>
                <div className="content">
                    <div className="social_icons">
                        <a
                            href="https://github.com/pachyyy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adrianoemmanuel05/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>
                    <h1>Adriano Emmanuel</h1>
                    <p>Computer Science Student</p>

                    <div className="mobile_social_icons">
                        <a
                            href="https://github.com/pachyyy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adrianoemmanuel05/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
