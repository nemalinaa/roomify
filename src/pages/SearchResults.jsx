import React, { useEffect, useState } from "react";

const SearchResults = () => {

    const [searchData, setSearchData] = useState([]);
    const [err, setErr] = useState(null);


    useEffect(()=>{
        const fetchSearchData = async()=>{
            try {
                const response = await fetch('http://localhost:3002/search');
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }
                const json = await response.json();
                setSearchData(json)
            } catch (err) {
                setErr(err.message);
                console.error("Ошибка при загрузке данных", err);
            }
        };
        fetchSearchData();
    }, []);
    console.log(searchData)
    return (
        <div>
            mew
        </div>
    )
};
export default SearchResults;