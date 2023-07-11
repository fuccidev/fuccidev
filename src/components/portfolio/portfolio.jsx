import "./portfolio.scss"
import React, {useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { skillsPortfolio,
        webPortfolio,
        mobilePortfolio,
        designPortfolio,
        contentPortfolio} from "../../data";
import {KeyboardArrowDown} from "@mui/icons-material";

export default function Portfolio() {
        const [selected, setSelected] = useState("skills");
        const [data, setData] = useState([]);
        const list = [
            {
                id: "skills",
                title: "Skills",
            },
            {
                id: "python",
                title: "Python",
            },
            {
                id: "sql",
                title: "SQL",
            },
            {
                id: "dataanalysis",
                title: "Data Analysis",
            },
        ];

        useEffect(()=>{

            switch(selected){
                case "skills":
                    setData(skillsPortfolio);
                    break;
                case "python":
                    setData(webPortfolio);
                    break;
                case "sql":
                    setData(mobilePortfolio);
                    break;
                case "dataanalysis":
                    setData(designPortfolio);
                    break;
                case "content":
                    setData(contentPortfolio);
                    break;
                default:
                    setData(skillsPortfolio);

            }

        }, [selected])

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="menuBar">
                <ul>
                    {list.map((item) => (
                        <PortfolioList title={item.title}
                                       active={selected=== item.id}
                                       setSelected={setSelected}
                                       id={item.id}
                        />
                    ))}
                </ul>
            </div>

            {
                selected !== "skills" && (
                    <div className="container">
                        {data.map((d)=> (
                            <div className="item">
                                <img src={d.img}/>
                                <h3>{d.title}</h3>
                            </div>
                        ))}
                    </div>
                )
            }


                {
                    selected === "skills" && (
                        <ul className = "skillsList">
                            {data.map((d)=> (
                                <li>{d.skill}</li>
                            ))}
                        </ul>
                    )
                }
            <div className="icon"><a href="#resources">
                <KeyboardArrowDown className="arrow"/>
            </a>
            </div>

        </div>
    )

}