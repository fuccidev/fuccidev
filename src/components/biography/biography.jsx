import "./biography.scss"
import {KeyboardArrowDown} from "@mui/icons-material";

export default function Biography() {
    return(
        <div className = "biography" id="biography">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/family.jpg"/>
                </div>
                <div className="logo">
                    <img src="assets/razorback.png"/>
                </div>
            </div>

            <div className="right">
                <p className="text">Hi! Welcome to my personal website.  My name is Alexander Fucci-Wilson and I'm looking for a career opportunity in Northwest Arkansas or remotely in the fields of Computer Science, Data Analysis, or Quality Assurance.  I am two classes away from finishing my B.S. in Computer Science online while working and am moving back to Northwest Arkansas in August because my Fiancee is starting nursing school.  I am looking to leverage my 5 years of data analysis and quality assurance in a new role or start a new career path in software engineering either in the Northwest Arkansas area or remotely. </p>
                <div className="icon"><a href="#portfolio">
                    <KeyboardArrowDown className="arrow"/>
                </a>
                </div>
            </div>


        </div>
    )
}

