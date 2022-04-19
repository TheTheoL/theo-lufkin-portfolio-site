import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore itaque possimus nobis mollitia culpa tempore dolores nihil. Eveniet maxime et ipsum a cumque eligendi nihil placeat minima, consequuntur cum?</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/7-landing.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
