import "./intro.scss"
import {KeyboardArrowDown} from "@mui/icons-material";


export default function Intro() {
    return(
        <div className = "intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot.jfif"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Alexander Fucci-Wilson</h1>
                    <h2>Data Analysis</h2>
                    <h2>Computer Science</h2>
                    <h2>Quality Assurance</h2>
                </div>
                <div className="icon"><a href="#biography">
                    <KeyboardArrowDown className="arrow"/>
                </a>
                </div>
            </div>


        </div>
    )

}

