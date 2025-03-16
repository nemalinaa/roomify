import loftImage from '../../images/Lofts/loftsImage/bigImageAmbra.svg';
import './styles/LoftCardImage.css';
import house from '../../images/Lofts/loftsImage/littlehouse.svg';
import metrs from '../../images/Lofts/loftsImage/metrs.svg';
import people from '../../images/Lofts/loftsImage/people.svg';
import whatsapp from '../../images/Lofts/loftsImage/whatsapp.svg';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import GetOptionsCard from '../../data/GetOptionsCard';


const LoftCardImage = () => {
    function CheckTitle(type) {
        switch (type) {
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

    const { id } = useParams();

    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [room, setRoom] = useState({});
    const [title, setTitle] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!id) return; // Проверяем, что id существует

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/rooms/${id}`);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }
                const json = await response.json();
                setData(json); // Оборачиваем объект в массив
                setRoom(json);
                setTitle(CheckTitle(json.idTypes));
                console.log(json);
            } catch (error) {
                setErr(error);
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchData();
    }, [id]); // Добавляем id в зависимости

    console.log(title);

    if (err) {
        return <div>Произошла ошибка: {err.message || JSON.stringify(err)}</div>;
    }

    if (!room || !room.name) {
        return <div>Загрузка...</div>;
    }

    const handleNextImage = () => {
        if (room.images && room.images.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex + 1 < room.images.length ? prevIndex + 1 : 0 // Циклическое переключение
            );
        }
    };

    const handlePrevImage = () => {
        if (room.images && room.images.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex - 1 >= 0 ? prevIndex - 1 : room.images.length - 1 // Циклическое переключение
            );
        }
    };

    return (
        <div className="allCardImage">
            <div className="loftCardContainerImage">
                <div className="loftCardImage">
                    <img
                        src={room?.images?.[currentImageIndex]?.absolutePath || loftImage}
                        alt={room.name || "Изображение помещения"}
                    />
                </div>
                {/* Кнопки для переключения изображений */}
                <div className="imageControls">
                    <button onClick={handlePrevImage} disabled={room.images.length <= 1} />
                    <button onClick={handleNextImage} disabled={room.images.length <= 1} />
                </div>
            </div>
            <div className="loftCardContainerDescription">
                <div className="loftCardMainText">
                    <h3 className="loftCardTitle">{title} "{room.name}"</h3>
                    <span className="loftCardTitleDescription">
                        м. {room.metro || 'Метро не указано'}<br />
                        {room.address || 'Адрес не указан'}
                    </span>
                    <span className="loftCardTitleLine" />
                    <div className="loftCardTitleElements">
                        <div className="loftCardTitleElement">
                            <img src={house} alt="" />
                            <span className="loftCardTitleElementText">{title}</span>
                        </div>
                        <div className="loftCardTitleElement">
                            <img src={metrs} alt="" />
                            <span className="loftCardTitleElementText">{room.square || 'Площадь не указана'}м²</span>
                        </div>
                        <div className="loftCardTitleElement">
                            <img src={people} alt="" />
                            <span className="loftCardTitleElementText">{room.capacity || 'Вместимость не указана'} чел.</span>
                        </div>
                    </div>
                </div>
                <div className="loftCardCostContainer">
                    <h3 className="loftCardCost">
                        <span className="loftCardCostDescription">от</span> {room.priceWeekdays || 'Цена не указана'} р/ч
                    </h3>
                    <div className="loftCardCostButtons">
                        <a className="loftCardCostButton call" href="tel:+79508700100">Позвонить</a>
                        <a href="https://wa.me/79508700100" className="loftCardCostButton write">
                            <img src={whatsapp} alt="" />Написать
                        </a>
                    </div>
                </div>
            </div>
            <div className="loftCardContainerMainText">
                <span className="loftCardDescriptionText">{room.description || 'Описание не указано'}</span>
                {room.id && <GetOptionsCard id={room.id} />}
            </div>
        </div>
    );
};

export default LoftCardImage;