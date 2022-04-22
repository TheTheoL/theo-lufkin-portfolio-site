import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",

            title: "Certificate in Web Development",
            desc:
                "I recently earned my certificate through Treehouse in full-stack Web Develpment with a focus in JavaScript and React.",
            img:
                "https://1xqdqy285sk7212bfiejcprr-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/Web-Development-Company-USA.jpg",
        },
        {
            id: "2",

            title: "Masters Degree in Marketing",
            desc:
                "I've earned a Masters degree in marketing with a focus on social media from SNHU in 2017 because of my passion and talent to learn and create unique experiences for consumers online.",
            img:
                "https://marsdd.com/wp-content/uploads/2020/07/Marketing.jpg",
        },
        {
            id: "3",

            title: "Bachelors in English",
            desc:
                "For my undergraduate education I studied English and writing which has helped me tremendously to form skills in creating and writing content online for marketing and now development.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">

            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">

                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>

                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}