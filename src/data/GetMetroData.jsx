import { useState, useEffect } from "react";
export const GetMetroData = ()=>{


const GetLoftsData = ({ onDataLoaded }) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('http://localhost:3002/metro');
                const json = await response.json();
                setData(json);
                if (onDataLoaded) onDataLoaded(json);

            } catch (error) {
                setErr(error);
            }




        };
        fetchData();
    }, [onDataLoaded])
    return null;
}
}