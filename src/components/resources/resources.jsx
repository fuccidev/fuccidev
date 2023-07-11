import "./resources.scss";
import { ArrowBackIosNew } from "@mui/icons-material";
import { useState } from "react";

export default function Resources() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            title: "Quality Manager",
            subtitle: "Biolife Plasma Services",
            list: ["Hosted 5 external audits on location and travelled to support external audits at 4 additional locations from government and international agencies.", "Performed monthly comprehensive internal system audits to ensure compliance and reporting to headquarters to trend issues throughout company.", "Led our region within the company with 13% voluntary turnover, compared to company average of 38%.", "Developed 3 employees within 2 years that promoted to new locations into senior management roles.", "Trained region staff as subject matter expert for Trackwise - Root Cause analysis and investigations for process deviations."]
        },
        {
            id: "2",
            title: "B.S. in Computer Science",
            subtitle: "Colorado State University Global",
            list: ["Projected to graduate in December of 2023.", "Pursuing degree while working full time in QA Management Role.", "Two courses left are Graphics and Visualization and Introduction to Artificial Intelligence.", "Switched major of study when relocating to Riverside, CA during pandemic for promotion.", "Learned basics of HTML, CSS, JavaScript.  Self taught Python3 through online resources.", "Hoping to switch career paths from QA to Software Engineer and leverage the skills and work ethic from my current role in a new capacity."]
        },
        {
            id: "3",
            title: "Data Analytics Certificate",
            subtitle: "Google - Coursera",
            list: ["Completed in summer of 2023 to supplement my learning on the job in role as QA Manager.", "Learned Tableau, strengthened SQL skills, R, data cleaning.", "Used skills to assist operational excellence team reconfigure dashboards for daily use.", "Assisted team with vendor equipment study for material defects after software update to monitor and trend issues before and after implementation."]
        },
        {
            id: "4",
            title: "Personal Assessment",
            list: ["Motivated to learn new skills and to start career in different capacity.", "Excited about creative problem solving, I love finally solving a tough puzzle!", "I place a lot of value on self awareness. I think knowing limitations is as valuable as knowing strengths, and knowing where you can improve can help direct time and efforts.", "I have developed the skills to wear different hats. With employees I have found ways to be relational and to get results by communicating in ways they respond to best.  With external auditors I am able to represent the company with professionalism and poise.", "I view management as not having more power, but having more agency and responsibility.  While I would be happy in a management role I am also willing to take a junior role to start something I am passionate about and to learn. "]
        }
    ];

    const handleClick = (direction) => {
        direction === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="resources" id="resources">
            <h1>Experiences</h1>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container" key={d.id}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    {d.title}
                                    <div className="subtext">{d.subtitle}</div>
                                </div>
                            </div>
                            <div className="right">
                                {d.list && (
                                    <ul className="bullets">
                                        {d.list.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowBackIosNew className="arrow left" onClick={() => handleClick("left")} />
            <ArrowBackIosNew className="arrow right" onClick={() => handleClick("right")} />
        </div>
    );
}