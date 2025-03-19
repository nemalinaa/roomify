import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './components/styles/AdminPanel.css';

const AdminPanel = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [roomslist, setRoomslist] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/rooms');
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP:${response.status}`);
                }
                const json = await response.json();
                setData(json);
                setRoomslist(json);
            } catch (error) {
                setErr(error);
                console.error("Ошибка при получении данных", error)
            }
        };
        fetchData();
    }, []);
    if (err) {
        return <div>Произошла ошибка: {err.error || err.message || JSON.stringify(err)}</div>;
    }

    if (!roomslist || roomslist.length === 0) {
        return <div>Загрузка...</div>;
    }

    function setType(newtype) {
        switch (newtype) {
            case 1:
                return 'Лофт';
            case 2:
                return 'Банкетный зал';
            case 3:
                return 'Танцевальный зал';
            case 4:
                return 'Фотостудия';
        }

    }
    console.log(roomslist);
    return (
        <div className="Admin">
            <div className="mainAdmin">
                <h2 className="mainAdminHeader">Кабинет Админа</h2>
                <Link className="" to='/addroom'><button className="addRoomButton">Добавить помещение</button></Link>
                <span className="adminlistHeader">Список помещений</span>

                {roomslist.map(room => (

                    <table>
                        <tbody>
                            <tr className="adminlist">
                                <td className="adminlistElementName"> "{room.name}"</td>
                                <td className="adminlistElementType"> {setType(room.type)}</td>
                                <td className=""><button className="adminlistbutton edit">Редактировать</button> <button className="adminlistbutton delete">Удалить</button></td>

                            </tr>
                        </tbody>
                    </table>
                ))
                }

            </div>
            <div className="">Выйти</div>
        </div>
    )
};
export default AdminPanel;