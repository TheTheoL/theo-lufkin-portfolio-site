import "./intro.scss"




export default function Intro() {

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profilepic.jpg" alt="picture of handsome man"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Theo Lufkin</h1>
                    <h3>Front-end  <span>Web Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down errow" />
                </a>
            </div>
        </div>
    )
}
