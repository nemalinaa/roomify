import { Link } from "react-router";

import './styles/LoftsList.css';
import { useState, useEffect } from "react";
import GetRooms from "../../data/GetRooms.jsx";

const RoomsList = ({ typeSpace }) => {
    console.log(typeSpace)

    function CheckType(type) {
        switch (type) {
            case 1:
                return 'lofts';
            case 2:
                return 'bankets';
            case 3:
                return 'dance';
            case 4:
                return 'photo';
        }

    }



    const [newtype, setType] = useState(CheckType(typeSpace));
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);


    console.log(newtype)
    return (

        <div className="loftsListAll">
            {/* <GetLoftsData onDataLoaded={(data) => setLoftsList(data)} /> */}
            {/* <GetMetroData onDataLoaded={(data) => setMetroList(data)} /> */}
            <div className="loftsListContainer">
                <GetRooms type={newtype} />
            </div>
        </div>
    )
}

export default RoomsList;