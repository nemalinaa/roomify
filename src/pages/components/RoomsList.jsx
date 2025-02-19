import { Link } from "react-router";

import './styles/LoftsList.css';
import { useState, useEffect } from "react";
import GetRooms from "../../data/GetRooms.jsx";

const RoomsList = ({ typeSpace }) => {

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
    function CheckTitle(newType){
        switch(newType){
            case 'lofts':
                return 'Лофт';
            case 'bankets':
                return 'Банкетный зал'; 
            case 'dance':
                return 'Танцевальный зал';
            case 'photo':
                return 'Фотостудия';   
        }
    }

    const [newType, setNewType] = useState(CheckType(typeSpace));
    const [title, setTitle] = useState(CheckTitle(newType))

    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    return (

        <div className="loftsListAll">
            {/* <GetLoftsData onDataLoaded={(data) => setLoftsList(data)} /> */}
            {/* <GetMetroData onDataLoaded={(data) => setMetroList(data)} /> */}
            <div className="loftsListContainer">
                <GetRooms type={newType} title={title}/>
            </div>
        </div>
    )
}

export default RoomsList;