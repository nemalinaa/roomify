import LoftsList from "./components/LoftsList";
import LoftsMainText from "./components/LoftsMainText";
import LoftsMap from "./components/LoftsMap";
import LoftsSearch from "./components/LoftsSearch";
import Questions from "./components/Questions";

const Lofts =()=>{
    const typeSpace = 1;
    return(
        <div className="">
            <LoftsMainText />
            <LoftsSearch />
            {/* <LoftsMap /> */}
            <LoftsList typeSpace={typeSpace}/>
            <Questions />
        </div>
    )
}

export default Lofts;