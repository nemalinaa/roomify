import logo from "../../images/logo.svg";
import styled from "styled-components";
import './styles/Footer.css';


const logoStyle = {

}

const list = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignText: 'left'
}

const Year = {
    margin: 'auto',
    alignText: 'center'
}

// const AStyle = {

// }

const Footer = () => {
    return (

        <div className="background">
            <div className="elements">
                <img style={logoStyle} src={logo} />
                <div style={list}>
                    {/* Здесь должны быть роуты */}
                    <a href="">Лофты</a>
                    <a href="">Фотостудии</a>
                    <a href="">Танцевальные залы</a>
                    <a href="">Банкетные залы</a>

                </div>
            </div>
            <div style={Year}>2025</div>
        </div>
    )
}

export default Footer;