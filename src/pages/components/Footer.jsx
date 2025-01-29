import logo from "../../images/logo.svg";

const background = {
    width: '1440px',
    height: '408px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    backgroundColor: '#801525',
    marginTop: '40px',
}

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

const AStyle = {
    textDecotarions
}

const Footer = () => {
    return (
        <div style={background}>
            <div style={elements}>
                <img style={logoStyle} src={logo} />
                <div style={list}>
                    {/* Здесь должны быть роуты */}
                    <a style={AStyle} href="">Лофты</a>
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