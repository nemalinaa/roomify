import { useState, useEffect } from "react";

const GetFilters = () => {
    const [metroList, setMetroList] = useState([]);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
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

        fetchData();
    }, []); // Убрана зависимость от необъявленной переменной onDataLoaded

    if (err) {
        return <div>Произошла ошибка: {err}</div>; // Отображаем ошибку, если она есть
    }
    return (
        <div className="MainFiltersElement loftsSearchFormElement">
            <label className='MainFiltersElementName loftsSearchFormElementName' htmlFor="type">Станция метро</label>
            <select name="metro" id="metro" className='MainFiltersSelect'>
                <option value="allmetro">Все станции</option>
                {metroList.map(metro => (
                    <option id={metro.id} value={metro.nameMetro} >{metro.nameMetro}</option>
                ))
                }
            </select>
        </div>
    )
}
export default GetFilters;