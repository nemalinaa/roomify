import RoomsMainText from "../pages/components/RoomsMainText.jsx";
import RoomsSearch from "../pages/components/RoomsSearch.jsx";
import RoomsList from "../pages/components/RoomsList.jsx";
import RoomsMap from "../pages/components/RoomsMap.jsx";

import Questions from "./components/Questions";

const Lofts = () =>{
    const typeSpace = 1;
    const mainText = "Лофты"
    return(
        <div className="">
            <RoomsMainText mainText={mainText}/>
            <RoomsSearch />
            {/* <LoftsMap /> */}
            <RoomsList typeSpace={typeSpace}/>
            <Questions />
        </div>
    )
}

export default Lofts;