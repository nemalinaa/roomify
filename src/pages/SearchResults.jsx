import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideShow1 from '../images/SlideShow/SlideShow1.svg';
import './components/styles/SearchResults.css';

const SearchResults = () => {

    const [searchData, setSearchData] = useState(null);
    const [err, setErr] = useState(null);
    const [rooms, setRooms] = useState([]);


    // В компоненте SearchResults.jsx (например, при переходе на /results)
    useEffect(() => {
        const fetchSearchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/search', {
                    credentials: 'include' // <--- Добавьте это!
                });
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                const data = await response.json();
                setRooms(data); // Убедитесь, что данные сохраняются в состояние
                console.log('Полученные данные:', data);
            } catch (error) {
                console.error('Ошибка при загрузке:', error);
            }
        };

        fetchSearchData();
    }, []);
    console.log(rooms);
    return (

        <div>
            <div className="loftsAll">
                <div className="loftsContainer">
                    <div className="loftsMainText">Результаты поиска:</div>
                </div>
            </div>
            <div className="loftsListAll">
                <div className="loftsListContainer">
                    <div className="loftsListElements">
                        {rooms ? rooms.map((el) => (
                            <Link className="link-card" to={`/card/${el.id}`}>
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

                        ))
                            :
                            "нет подходящих вариантов"
                        }
                    </div>
                </div>
            </div>

        </div>
    )
};
export default SearchResults;