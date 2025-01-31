import MainText from './components/MainText.jsx'
import Popular from './components/Popular.jsx';
import Anvantages from './components/Advantages.jsx';
import MainFilters from './components/MainFilters.jsx';
import Questions from './components/Questions.jsx';

const MainPage = () => {
    return (
        <div>
            <MainText />
            <Popular />
            <Anvantages />
            <MainFilters />
            <Questions />
        </div>
    )
}
export default MainPage;