import { Link } from "react-router";
import imageAmbra from "../../images/Lofts/loftsImage/imageAmbra.svg";
import './styles/LoftsList.css';
import { useState } from "react";
import { getLofts } from "../../data/getLofts";

const LoftsList = () => {
    
    const [loftsList, setLoftsList] = useState(getLofts());

    return (
        <div className="loftsListAll">
            <div className="loftsListContainer">
                <div className="loftsListElements">
                    {loftsList.map(loft => (
                        <Link className="link-card" to='/card'>
                            <div className="loftsListElement">
                                <div className="loftsListElementImage">
                                    <img src={imageAmbra} />
                                </div>
                                <div className="loftsListElementText">
                                    <div className="loftsListElementName">Лофт "{loft.name}"</div>
                                    <div className="loftsListElementLocation">м. {loft.metro}</div>
                                    <div className="loftsListElementPeople">{loft.square}м, {loft.capacity} чел.</div>
                                    <div className="loftsListElementBottomText">
                                        <div className="loftsListElementPrice">от {loft.priceWeekdays}р/час</div>
                                        <div className="loftsListElementRating">Нет оценок</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LoftsList;