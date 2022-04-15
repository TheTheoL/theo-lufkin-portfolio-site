import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef, {
            showCursor: false,
            strings: ['Web Developer', 'Yeah!']
        });
    }, []);


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="picture of handsome man"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Theo Lufkin</h1>
                    <h3>Front-end  <span ref={textRef}>Web Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down errow" />
                </a>
            </div>
        </div>
    )
}
