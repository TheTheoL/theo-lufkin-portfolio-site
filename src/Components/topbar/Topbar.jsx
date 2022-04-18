import "./topbar.scss"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            {/* content that goes inside the toolbar */}
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src="assets/TL.png" />
                    </a>
                    <div className="itemContainer">
                        <AccountBoxRoundedIcon className="icon" />
                        <span>617-939-8888</span>
                    </div>
                    <div className="itemContainer">
                        <AlternateEmailIcon className="icon" />
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
