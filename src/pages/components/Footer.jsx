import { Link } from "react-router-dom";
import logo from "../../images/Footer/mainLogo.svg";
import './styles/Footer.css';
import '../../routes';


const Footer = () => {
    return (
        <div className="all_footer">
            <div className="background">
                <div className="elements">
                    <Link to='/' className='link'><img className='logo_style' src={logo} /></Link>
                    <div className="list">
                        <span>+7 (924) 561 91 38</span>
                        <span>roomify_help@mail.ru</span>
                    </div>
                    <div className='list'>
                        {/* Здесь должны быть роуты */}
                        <Link to='/lofts' className='link'>Лофты</Link>
                        <Link to='/photo' className='link'>Фотостудии</Link>
                        <Link to='/dance' className='link'>Танцевальные залы</Link>
                        <Link to='/bankets' className='link'>Банкетные залы</Link>

                    </div>
                </div>

                <span className='year'>© 2025</span>
                <Link to='/adminauth' className='admin'>Для админа</Link>
            </div>
        </div >

    )
}

export default Footer;