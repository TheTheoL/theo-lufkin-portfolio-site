import PortfolioList from "../portpolioList/PortfolioList"
import "./portfolio.scss"
import { useEffect, useState } from 'react';

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        },

    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/7-landing.png" alt="" />
                    <h3>Interactive Form</h3>
                </div>
                <div className="item">
                    <img src="assets/scoreboard.png" alt="" />
                    <h3>React Scoreboard</h3>
                </div>
                <div className="item">
                    <img src="assets/to-do.png" alt="" />
                    <h3>Javascript to-do List</h3>
                </div>
                <div className="item">
                    <img src="assets/fullstack.png" alt="" />
                    <h3>React Course Registration</h3>
                </div>
                <div className="item">
                    <img src="assets/randomquotes.png" alt="" />
                    <h3>Quote Generator</h3>
                </div>
                <div className="item">
                    <img src="assets/employeedirc.png" alt="" />
                    <h3>Employee Directory</h3>
                </div>
            </div>
        </div >
    )
}
