import loftImage from '../../images/Lofts/loftsImage/bigImageAmbra.svg';
import './styles/LoftCardImage.css';

const LoftCardImage = ()=>{
    return(
        <div className="allCardImage">
            <div className="loftCardContainerImage">
                <div className="loftCardImage">
                    <img src={loftImage} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default LoftCardImage;