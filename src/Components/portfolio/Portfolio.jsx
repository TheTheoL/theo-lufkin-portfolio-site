import PortfolioList from "../portpolioList/PortfolioList"
import "./portfolio.scss"
import { useEffect, useState } from 'react';
// import data
import { featuredPortfolio, reactProjects, otherProjects } from '../../data';

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured Projects"
        },
        {
            id: "react projects",
            title: "React Projects"
        },
        {
            id: "other projects",
            title: "Other Projects"
        }



    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "react projects":
                setData(reactProjects);
                break;
            case "other projects":
                setData(otherProjects);
                break;
            default:
                setData(featuredPortfolio);
            // add other data here when the time comes
        }
    }, [selected])

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
                {data.map((data) => (
                    <div className="item">
                        <img
                            src={data.img}
                            alt="" />
                        <h3>{data.title}</h3>
                    </div>
                ))}

            </div>
        </div >
    )
}
