import "./topbar.scss"
import MarkunreadMailboxRoundedIcon from '@mui/icons-material/MarkunreadMailboxRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';


export default function Topbar() {
    return (
        <div className="topbar active">
            {/* content that goes inside the toolbar */}
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Theo Lufkin</a>
                    <div className="itemContainer">
                        <AccountBoxRoundedIcon className="icon" />
                        <span>617-939-8888</span>
                    </div>
                    <div className="itemContainer">
                        <MarkunreadMailboxRoundedIcon className="icon" />
                        <span>theo.lufkin@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
