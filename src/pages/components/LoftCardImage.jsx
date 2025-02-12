import loftImage from '../../images/Lofts/loftsImage/bigImageAmbra.svg';
import './styles/LoftCardImage.css';
import house from '../../images/Lofts/loftsImage/littlehouse.svg';
import metrs from '../../images/Lofts/loftsImage/metrs.svg';
import people from '../../images/Lofts/loftsImage/people.svg';
import whatsapp from '../../images/Lofts/loftsImage/whatsapp.svg';

const LoftCardImage = () => {
    return (
        <div className="allCardImage">
            <div className="loftCardContainerImage">
                <div className="loftCardImage">
                    <img src={loftImage} alt="" />
                </div>
            </div>
            <div className="loftCardContainerDescription">
                <div className="loftCardMainText">
                    <h3 className="loftCardTitle">Название лофта</h3>
                    <span className="loftCardTitleDescription">м. Бауманская<br />Электрозаводский переулок 2</span>
                    <span className="loftCardTitleLine" />
                    <div className="loftCardTitleElements">
                        <div className="loftCardTitleElement">
                            <img src={house} alt="" />
                            <span className="loftCardTitleElementText">танцевальный зал</span>
                        </div>
                        <div className="loftCardTitleElement">
                            <img src={metrs} alt="" />
                            <span className="loftCardTitleElementText">250м²</span>
                        </div>
                        <div className="loftCardTitleElement">
                            <img src={people} alt="" />
                            <span className="loftCardTitleElementText">25 чел.</span>
                        </div>
                    </div>

                </div>
                <div className="loftCardCostContainer">
                    <h3 className="loftCardCost"><span className="loftCardCostDescription">от</span> 5000 р/ч</h3>
                    <div className="loftCardCostButtons">
                        <button className="loftCardCostButton call">Позвонить</button>
                        <button className="loftCardCostButton write"><img src={whatsapp} alt="" />Написать</button>
                    </div>
                </div>

            </div>
            <div className="loftCardContainerMainText">
                <span className="loftCardDescriptionText">Описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта описание лофта</span>
                <div className="loftCardContainerConditions">
                    <h5 className="loftCardConditionsTitle">Условия аренды:</h5>
                    <ul className="loftCardConditionsList">
                        <li>Условие</li>
                        <li>Условие</li>
                        <li>Условие</li>
                        <li>Условие</li>
                        <li>Условие</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LoftCardImage;