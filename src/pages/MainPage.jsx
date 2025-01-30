import MainText from './components/MainText.jsx'
import Popular from './components/Popular.jsx';
import Anvantages from './components/Advantages.jsx';
import MainFilters from './components/MainFilters.jsx';

const MainPage = () => {
    return (
        <div>
            <MainText />
            <Popular />
            <Anvantages />
            <MainFilters />
        </div>
    )
}
export default MainPage;