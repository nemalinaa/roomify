import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideShow1 from '../images/SlideShow/SlideShow1.svg';

const GetRooms = ({ type, title }) => {
    console.log(type)
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [roomsList, setRoomsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`http://localhost:3002/${type}/`);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
                setRoomsList(json);

            } catch (error) {
                setErr(error);
                console.error("Ошибка при загрузке данных:", error);
            }




        };
        fetchData();
    }, [type]);

    if (err) {
        return <div>Произошла ошибка: {err.error || err.message || JSON.stringify(err)}</div>;
    }

    if (!roomsList || roomsList.length === 0) {
        return <div>Загрузка...</div>;
    }

    console.log(roomsList);



    return (
        <div className="loftsListElements">
            {roomsList.map(room => (
                < Link className="link-card" to={`/card/${room.id}`}>
                    <div className="loftsListElement">
                        <div className="loftsListElementImage">
                            <img src={room?.images?.[0]?.absolutePath || SlideShow1} alt={room.name} />
                        </div>
                        <div className="loftsListElementText">
                            <div className="loftsListElementName">{title} "{room.name}"</div>
                            <div className="loftsListElementLocation">м. {room.metro}</div>
                            <div className="loftsListElementPeople">{room.square}м², {room.capacity} чел.</div>
                            <div className="loftsListElementBottomText">
                                <div className="loftsListElementPrice">от {room.priceWeekdays}р/час</div>
                                <div className="loftsListElementRating">Нет оценок</div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div >
    )
}

export default GetRooms;