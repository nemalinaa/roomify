import logo from "../../images/logo.svg";
import loftsLogo from "../../images/loftsLogo.svg";
import danceLogo from "../../images/danceLogo.svg";
import banketLogo from "../../images/banketLogo.svg";
import photoLogo from "../../images/photoLogo.svg";
import search from "../../images/search.svg";
import './styles/Header.css';


const Header = ()=>{
    return (
        <div className="allHeader">
            <div className="container">
                <img src={logo} />

                <div className="buttonsContainer">
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                            {/* <div className="elementImg">
                                <img src={loftsLogo} />
                            </div> */}
                            <div className="elementText">Лофты</div>
                        {/* </div> */}
                    </div>
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                            {/* <div className="elementImg">
                                <img src={banketLogo} />
                            </div> */}
                            <div className="elementText">Банкетные залы</div>
                        {/* </div> */}
                    </div>
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                            {/* <div className="elementImg">
                                <img src={danceLogo} />
                            </div> */}
                            <div className="elementText">Танцевальные залы</div>
                        {/* </div> */}
                    </div>
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                            {/* <div className="elementImg">
                                <img src={photoLogo} />
                            </div> */}
                            <div className="elementText">Фотостудии</div>
                        {/* </div> */}
                    </div>
                </div>

                <div className="searchContainer">
                {/* в инпуте в плейсхолдере можно сделать изменение надписей */}
                    <input className="searchInput" type="search" placeholder="Снять лофт на день рождения..." />
                    <button className="searchButton"><img src={search} /></button>
                </div>
            </div>
        </div>
       
    )
}
export default Header;