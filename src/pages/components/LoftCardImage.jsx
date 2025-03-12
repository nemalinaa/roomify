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



    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(`http://localhost:3002/rooms/${id}`);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
                setRoom(json[0]);
                setTitle(CheckTitle(json[0]?.idTypes));
            } catch (error) {
                setErr(error);
                console.error("Ошибка при загрузке данных", error);
            }
        };
        fetchData();
    }, []);


    if (err) {
        return <div>Произошла ошибка: {err}</div>
    }



    console.log(title);
    console.log(room.id);
    console.log(room.images.path);



    return (
        <div className="allCardImage">
            <div className="loftCardContainerImage">
                <div className="loftCardImage">
                    <img src={loftImage} alt="" />
                </div>
            </div>
            <div className="loftCardContainerDescription">
                <div className="loftCardMainText">
                    <h3 className="loftCardTitle">{title} "{room.name}"</h3>
                    <span className="loftCardTitleDescription">м. {room.metro}<br /> {room.address}</span>
                    <span className="loftCardTitleLine" />
                    <div className="loftCardTitleElements">
                        <div className="loftCardTitleElement">
                            <img src={house} alt="" />
                            <span className="loftCardTitleElementText">{title}</span>
                        </div>
                        <div className="loftCardTitleElement">
                            <img src={metrs} alt="" />
                            <span className="loftCardTitleElementText">{room.square}м²</span>
                        </div>
                        <div className="loftCardTitleElement">
                            <img src={people} alt="" />
                            <span className="loftCardTitleElementText">{room.capacity} чел.</span>
                        </div>
                    </div>

                </div>
                <div className="loftCardCostContainer">
                    <h3 className="loftCardCost"><span className="loftCardCostDescription">от</span> {room.priceWeekdays} р/ч</h3>
                    <div className="loftCardCostButtons">
                        <button className="loftCardCostButton call">Позвонить</button>
                        <button className="loftCardCostButton write"><img src={whatsapp} alt="" />Написать</button>
                    </div>
                </div>

            </div>
            <div className="loftCardContainerMainText">
                <span className="loftCardDescriptionText">{room.description}</span>
                {room.id && <GetOptionsCard id={room.id} />}

            </div>
        </div>
    )
}

export default LoftCardImage;