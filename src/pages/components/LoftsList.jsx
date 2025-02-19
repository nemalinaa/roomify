import { Link } from "react-router";

import './styles/LoftsList.css';
import { useState, useEffect } from "react";
import { GetLoftsData } from "../../data/GetLoftsData.jsx";

const LoftsList = ({ typeSpace }) => {

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



    return (

        <div className="loftsListAll">
            {/* <GetLoftsData onDataLoaded={(data) => setLoftsList(data)} /> */}
            {/* <GetMetroData onDataLoaded={(data) => setMetroList(data)} /> */}
            <div className="loftsListContainer">
                <GetLoftsData type={newtype} />
            </div>
        </div>
    )
}

export default LoftsList;