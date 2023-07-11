import "./contact.scss"
import {useState} from "react";

export default function Contact() {

    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contact.jpg"/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"/>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for contacting me, I will respond as soon as I can</span>}
                </form>
            </div>
        </div>



    )
}