import SlideShow1 from "../../images/SlideShow1.svg";
import drinks from "../../images/drinks.svg";
import birthday from "../../images/birthday.svg";
import people from "../../images/people.svg";

import './styles/Popular.css';

const Popular = ()=>{
    return (
        <div className="allPopular">
            <div className="container_slideShow">
                <img className="image_slideShow" src={SlideShow1}/>
                <div className="background-shadow">
                    <div className="all-text">
                        <div className="name-text">
                            <div>Лофт "Амбра"</div>
                        </div>
                        <div className="other-text">
                            <div className="elements_text">
                                <div className="element">
                                    <img src={birthday} />
                                    <div className="text">день рождения, девичник, мальчишник</div>
                                </div>
                                <div className="element">
                                    <img src={people} />
                                    <div className="text">10-15 человек</div>
                                </div>
                                <div className="element">
                                    <img src={drinks} />
                                    <div className="text">своя еда и алкоголь</div>
                                </div>
                            </div>
                            <div className="right-text">
                            от 1500p/ч.
                                {/* <div>от 1500p/ч.</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popular;