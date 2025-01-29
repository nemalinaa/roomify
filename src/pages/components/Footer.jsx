import logo from "../../images/logo.svg";
import styled from "styled-components";

const background = styled.div`
    width: 1440px;
    height: 408px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    backgroundColor: #801525;
    margin-top: 40px;
`

// const background = {
//     width: '1440px',
//     height: '408px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '5px',
//     backgroundColor: '#801525',
//     marginTop: '40px',
// }

const elements = {
    display: 'flex',
    justifyСontent: 'space-between',
    alignItems: 'flex-end',
}

const logoStyle = {
    width: '102px',
    height: '88px',
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
        <background>
            <div style={elements}>
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
        </background>
    )
}

export default Footer;