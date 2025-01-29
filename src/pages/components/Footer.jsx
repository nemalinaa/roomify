import logo from "../../images/logo.svg";
import styled from "styled-components";
import './styles/Footer.css';


const Year = {
    margin: 'auto',
    alignText: 'center'
}

// const AStyle = {

// }

const Footer = () => {
    return (
        <div className="all_footer">
            <div className="background">
                <div className="elements">
                    <img className='logo_style' src={logo} />
                    <div className="list">
                        <span>+7 (924) 561 91 38</span>
                        <span>roomify_help@mail.ru</span>
                    </div>
                    <div className='list'>
                        {/* Здесь должны быть роуты */}
                        <a href="">Лофты</a>
                        <a href="">Фотостудии</a>
                        <a href="">Танцевальные залы</a>
                        <a href="">Банкетные залы</a>

                    </div>
                </div>
                <span className='year'>© 2025</span>
            </div>
        </div>

    )
}

export default Footer;