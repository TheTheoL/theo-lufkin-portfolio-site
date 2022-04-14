import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            {/* content that goes inside the toolbar */}
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Theo Lufkin</a>
                    <div className="itemContainer">

                    </div>
                </div>

                <div className="right">
                    this is right
                </div>
            </div>
        </div>
    )
}
