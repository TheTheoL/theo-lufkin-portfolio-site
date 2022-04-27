import "./topbar.scss"
import { FiMail, FiUser } from "react-icons/fi";


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            {/* content that goes inside the toolbar */}
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">T</a>
                    <div className="itemContainer">
                        <FiUser className="icon" />
                        <span>617-939-8888</span>
                    </div>
                    <div className="itemContainer">
                        <FiMail className="icon" />
                        <span>theo.lufkin@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
