import RoomsMainText from "../pages/components/RoomsMainText.jsx";
import RoomsSearch from "../pages/components/RoomsSearch.jsx";
import RoomsList from "../pages/components/RoomsList.jsx";
import RoomsMap from "../pages/components/RoomsMap.jsx";

import Questions from "./components/Questions";
const Photo =()=>{
    const typeSpace = 4;
    const mainText = "Фотостудии";
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

export default Photo;