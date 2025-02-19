import { React, useEffect, useState } from "react";
import { Link } from "react-router";
import imageAmbra from "../images/Lofts/loftsImage/imageAmbra.svg";

const GetDataLofts = ({type, title}) => {
    console.log(type)
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [roomsList, setRoomsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`http://localhost:3002/${type}`);
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
    }, []);

    if (err) {
        return <div>Произошла ошибка: {err}</div>; // Отображаем ошибку, если она есть
    }

    return (
        <div className="loftsListElements">
            {roomsList.map(room => (
                <Link className="link-card" to='/card'>
                    <div className="loftsListElement">
                        <div className="loftsListElementImage">
                            <img src={imageAmbra} />
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
            ))}
        </div>
    )
}

export default GetDataLofts;