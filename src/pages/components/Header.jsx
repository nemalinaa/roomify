import logo from "../../images/logo.svg";
import loftsLogo from "../../images/loftsLogo.svg";
import danceLogo from "../../images/danceLogo.svg";
import banketLogo from "../../images/banketLogo.svg";
import photoLogo from "../../images/photoLogo.svg";
import search from "../../images/search.svg";
import '@fontsource/onest';


const container = {
    width: '1440px', 
    height: '84px', 
    backgroundColor: '#801525', 
    display: 'flex',
    justifyContent: 'space-around'
}

const buttonsContainer = {
    display: 'flex',
    marginTop: '15px'
}

const elements = {
    display: 'block',
    color: '#fff', 
    fontFamily: 'Onest'
}

const elementContainer = {
    display: 'flex', 
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

const searchContainer = {
    display: 'flex',
    borderRadius: '41px',
    width: '420px',
    height: '45px',
    backgroundColor: '#fff',
    alignItems: 'center'
}
const searchInput = {
    border: 0,
    borderRadius: '41px',
    width: '358px',
    height: '40px',
    paddingLeft: '15px'
}
const searchButton = {
    borderRadius: '22px', 
    width: '60px',
    height: '41px',
    border: 0,
    backgroundColor: '#801525'
}
const Header = ()=>{
    return (
        <div style={container}>

            <img src={logo} />

            <div style={buttonsContainer}>
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
           
           <div style={searchContainer}>
            {/* в инпуте в плейсхолдере можно сделать изменение надписей */}
                <input style={searchInput} type="search" placeholder="Снять лофт на день рождения..." />
                <button style={searchButton}><img src={search} /></button>
           </div>
            
        </div>
    )
}
export default Header;