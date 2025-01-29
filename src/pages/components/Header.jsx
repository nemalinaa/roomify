import logo from "../../images/logo.svg";
import loftsLogo from "../../images/loftsLogo.svg";
import danceLogo from "../../images/danceLogo.svg";
import banketLogo from "../../images/banketLogo.svg";
import photoLogo from "../../images/photoLogo.svg";
import '@fontsource/onest';


const container = {
    width: '1440px', 
    height: '84px', 
    backgroundColor: '#801525', 
    display: 'flex',
    
}

const elements = {
    display: 'block',
    color: '#fff', 
    fontFamily: 'Onest'
}

const elementContainer = {
    display: 'flex', 
    // alignItems: 'center', 
    justifyContent: 'center',
    width: '90px'
}

const elementImg = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
}
const elementText = {
    textAlign: 'center'
}
const Header = ()=>{
    return (
        <div style={container}>

            <img src={logo} />
            <div style={elementContainer}>
                <div style={elements}>
                    <div style={elementImg}>
                        <img src={loftsLogo} />
                    </div>
                    <div style={elementText}>Лофты</div>
                </div>
            </div>
            <div style={elementContainer}>
                <div style={elements}>
                    <div style={elementImg}>
                        <img src={banketLogo} />
                    </div>
                    <div style={elementText}>Банкетные залы</div>
                </div>
            </div>
            <div style={elementContainer}>
                <div style={elements}>
                    <div style={elementImg}>
                        <img src={danceLogo} />
                    </div>
                    <div style={elementText}>Танцевальные залы</div>
                </div>
            </div>
            <div style={elementContainer}>
                <div style={elements}>
                    <div style={elementImg}>
                        <img src={photoLogo} />
                    </div>
                    <div style={elementText}>Фотостудии</div>
                </div>
            </div>
            
        </div>
    )
}
export default Header;