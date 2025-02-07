import { Link } from "react-router-dom";
import logo from "../../images/Header/mainLogo.svg";
import search from "../../images/Header/search.svg";
import './styles/Header.css';
import '../../routes';


const Header = () => {
    return (
        <div className="allHeader">
            <div className="container">

                <Link className="link" to='/'> <img src={logo} /></Link>

                <div className="buttonsContainer">
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                        {/* <div className="elementImg">
                                <img src={loftsLogo} />
                            </div> */}
                        <Link to='/lofts' className="link elementText">Лофты</Link>
                        {/* </div> */}
                    </div>
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                        {/* <div className="elementImg">
                                <img src={banketLogo} />
                            </div> */}
                        <Link to='bankets' className="link elementText">Банкетные залы</Link>
                        {/* </div> */}
                    </div>
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                        {/* <div className="elementImg">
                                <img src={danceLogo} />
                            </div> */}
                        <Link to='dance' className="link elementText">Танцевальные залы</Link>
                        {/* </div> */}
                    </div>
                    <div className="buttonContainer">
                        {/* <div className="buttonElementContainer"> */}
                        {/* <div className="elementImg">
                                <img src={photoLogo} />
                            </div> */}
                        <Link to='/photo' className="link elementText">Фотостудии</Link>
                        {/* </div> */}
                    </div>
                </div>

                <div className="searchContainer">
                    {/* в инпуте в плейсхолдере можно сделать изменение надписей */}
                    <input className="searchInput" type="search" placeholder="Снять лофт на день рождения..." />
                    <button className="searchButton"><img src={search} /></button>
                </div>
            </div >
        </div >

    )
}
export default Header;