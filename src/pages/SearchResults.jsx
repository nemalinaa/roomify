import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideShow1 from '../images/SlideShow/SlideShow1.svg';

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
           {searchData ? searchData.map((el)=>(
            <div className="loftsListElements">
                < Link className="link-card" to={`/card/${el.id}`}>
                    <div className="loftsListElement">
                        <div className="loftsListElementImage">
                            <img src={el?.images?.[0]?.absolutePath || SlideShow1} alt={el.name} />
                        </div>
                        <div className="loftsListElementText">
                            <div className="loftsListElementName">"{el.name}"</div>
                            <div className="loftsListElementLocation">м. {el.metro}</div>
                            <div className="loftsListElementPeople">{el.square}м², {el.capacity} чел.</div>
                            <div className="loftsListElementBottomText">
                                <div className="loftsListElementPrice">от {el.priceWeekdays}р/час</div>
                                <div className="loftsListElementRating">Нет оценок</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
           ))
           :
           "нет подходящих вариантов"
           }
        </div>
    )
};
export default SearchResults;