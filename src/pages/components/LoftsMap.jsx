import './styles/LoftsMap.css';
import loftsMap from "../../images/Lofts/loftsMap.svg";

const LoftsMap = ()=>{
    return (
        <div className="loftsMapAll">
            <div className="loftsMapContainer">
                <div className="loftsMapElement">
                    <img src={loftsMap} className="loftsMapImage" />
                    <div className="loftsMapBackground"></div>
                    <div className="loftsMapText">
                        <span>Показать на карте</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoftsMap;