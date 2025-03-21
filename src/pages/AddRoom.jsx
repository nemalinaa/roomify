import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const AddRoom = () => {
    const navigate = useNavigate();

    const [metroList, setMetroList] = useState([])
    const [typesList, setTypesList] = useState([]);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    const [optionsList, setOptionsList] = useState([]);
    const [metro, setMetro] = useState(1);
    const [type, setType] = useState(1);
    const [title, setTitle] = useState('');
    const [priceWeekdays, setPriceWeekdays] = useState(0);
    const [priceWeekends, setPriceWeekends] = useState(0);
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [options, setOptions] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [capacity, setCapacity] = useState(0);
    const [square, setSquare] = useState(0);

    useEffect(() => {
        const fetchDataMetro = async () => {
            try {
                const response = await fetch('http://localhost:3002/metro');
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }
                const json = await response.json();
                setMetroList(json); // Обновляем состояние metroList
                setData(json);
            } catch (error) {
                setErr(error.message); // Сохраняем сообщение об ошибке
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        const fetchDataTypes = async () => {
            try {
                const response = await fetch('http://localhost:3002/types');
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! статус: ${response.status}`);
                }
                const json = await response.json();

                setTypesList(json);
                setData(json);

            } catch (error) {
                setErr(error.message);
                console.error("Ошибка при загрузке данных", error);
            }
        };


        fetchDataTypes();
        fetchDataMetro();
    }, []);

    console.log(typesList);
    console.log(type);
    console.log(metro);
    console.log(priceWeekdays);


    return (
        <div className="AddRoomAll">
            <Link to='/admin'><div className="">Кабинет Админа</div></Link>
            <div className="">
                <form>

                    <input
                        type="text"
                        placeholder="Название"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Описание"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="type">Тип</label>
                    <select value={type} onChange={(event) => { setType(event.target.value) }} name="type" id="type">
                        {typesList.map(type => (
                            <option id={type.idTypes} value={type.idTypes}>{type.name}</option>
                        ))}
                    </select>


                    <input
                        type="text"
                        placeholder="Адрес"
                        name="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />


                    <label htmlFor="metro">Метро</label>
                    <select value={metro} onChange={(event) => { setMetro(event.target.value) }} name="metro" id="metro">
                        {metroList.map(metro => (
                            <option id={metro.idMetro} value={metro.idMetro}>м. {metro.nameMetro}</option>
                        ))}
                    </select>


                    <input
                        type="number"
                        placeholder="Цена (будни)"
                        onChange={(e) => setPriceWeekdays(e.target.value)}
                        required
                    />

                    <input
                        type="number"
                        placeholder="Цена (выходные)"
                        onChange={(e) => setPriceWeekends(e.target.value)}
                        required
                    />



                    <input
                        type="number"
                        placeholder="Площадь"
                        onChange={(e) => setSquare(e.target.value)}
                        required
                    />

                    <input
                        type="number"
                        placeholder="Вместимость"
                        onChange={(e) => setCapacity(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Особенности (через запятую)"
                        value={options.join(',')}
                        onChange={(e) => setOptions(e.target.value.split(',').map(f => f.trim()))}
                    />


                    <input
                        type="file"
                        multiple
                        onChange={(e) => setPhotos([...e.target.files])}
                    />

                    <button type="submit">Добавить помещение</button>
                </form>
            </div >
        </div >
    )
};
export default AddRoom;