import SlideShow1 from "../../images/SlideShow/SlideShow1.svg";
import house from '../../images/Popular/popularhome.svg';
import metrs from '../../images/Popular/metrs.svg';
import people from '../../images/Popular/people.svg';
import './styles/Popular.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Popular = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [popularslist, setPopularslist] = useState([]);
    const [title, setTitle] = useState('');
    const [currentElement, setCurrentElement] = useState(null);




    // Функция для определения типа помещения
    function CheckTitle(type) {
        switch (type) {
            case "лофты":
                return 'Лофт';
            case "банкетные залы":
                return 'Банкетный зал';
            case "танцевальные залы":
                return 'Танцевальный зал';
            case "фотостудии":
                return 'Фотостудия';
            default:
                return '';
        }
    }

    // Загрузка данных
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/popular');
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
                setPopularslist(json);
            } catch (error) {
                setErr(error);
                console.error("Ошибка при загрузке данных", error);
            }
        };
        fetchData();
    }, []);

    // Установка таймера для смены элементов
    useEffect(() => {
        if (popularslist.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % popularslist.length);
            }, 4000); // Каждые 4 секунд

            return () => clearInterval(interval); // Очистка таймера при размонтировании
        }
    }, [popularslist]);

    // Обновление текущего элемента при изменении индекса или списка
    useEffect(() => {
        if (popularslist.length > 0) {
            setCurrentElement(popularslist[currentIndex]);
        }
    }, [currentIndex, popularslist]);

    // Обновление заголовка при изменении текущего элемента
    useEffect(() => {
        if (currentElement && currentElement.type) {
            setTitle(CheckTitle(currentElement.type));
        }

    }, [currentElement]);

    // Обработка ошибок и загрузки
    if (err) {
        return <div>Произошла ошибка: {err.message}</div>;
    }
    if (!popularslist || popularslist.length === 0) {
        return <div>Загрузка...</div>;
    }

    return (
        
            <Link className="link-popular" to={`/card/${currentElement?.id}`}>
<div className="allPopular">
            <div className="container_slideShow">
                <img className="image_slideShow" alt="" src={`${currentElement?.images?.[0]?.absolutePath}`
                    || SlideShow1} />
                <div className="background-shadow">
                    <div className="all-text">
                        <div className="name-text">
                            <div>{title} "{currentElement?.name || 'Название не указано'}"</div>
                        </div>
                        <div className="other-text">
                            <div className="elements_text">
                                <div className="element">
                                    <img alt="" src={house} />
                                    <div className="text">{title || 'Тип не указан'}</div>
                                </div>
                                <div className="element">
                                    <img alt="" src={people} />
                                    <div className="text">{currentElement?.capacity} чел.</div>
                                </div>
                                <div className="element">
                                    <img src={metrs} />
                                    <div className="text">{currentElement?.square} м²</div>
                                </div>
                            </div>
                            <div className="right-text">
                                от {currentElement?.priceWeekdays || 'Цена не указана'}p/ч.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Link>

    );
};

export default Popular;