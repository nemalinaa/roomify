import './styles/Advantages.css';
// import './styles/Benefits.css';
import rant from "../../images/Advantages/rant.svg";
import choose from "../../images/Advantages/choose.svg";
import location from "../../images/Advantages/location.svg";

const Anvantages = ()=>{
return (
    <div className="allAdvantages">
        <div className="containerAdvantages">
            <div className="gorizontalStrip"></div>
            <div className="elementsAdvantages">
                <div className="elementAdvantage">
                    <img src={rant} />
                    <div className="textAdvantage">Гибкие условия аренды</div>
                </div>
                <div className="elementAdvantage">
                    <img src={choose} />
                    <div className="textAdvantage">Большой выбор пространств</div>
                </div>
                <div className="elementAdvantage">
                    <img src={location} />
                    <div className="textAdvantage">Удобное расположение</div>
                </div>
            </div>
        </div>
    </div>
)

}
export default Anvantages;