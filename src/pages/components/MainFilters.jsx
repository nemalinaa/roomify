import './styles/MainFilters.css';
import arrowBtn from '../../images/MainFilter/ArrowButton.svg';

import { useEffect, useState } from 'react';


const MainFilters = () => {
    const [optionsList, setOptionsList] = useState([]);
    const [metroList, setMetroList] = useState([]);
    const [typesList, setTypesList] = useState([]);


    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);



    const [mincost, setMincost] = useState(null);
    const [maxcost, setMaxcost] = useState(null);
    const [minsquare, setMinsquare] = useState(null);
    const [maxsquare, setMaxsquare] = useState(null);
    const [capacity, setCapacity] = useState(null);

    const [type, setType] = useState(null);
    const [metro, setMetro] = useState(null);
    const [option, setOption] = useState(null);


    useEffect(() => {
        const fetchDataOptions = async () => {
            try {
                const response = await fetch('http://localhost:3002/options');
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }
                const json = await response.json();
                setOptionsList(json);
                setData(json);
            } catch (error) {
                setErr(error.message);
                console.error("Ошибка при загрузке данных", error);
            }
        };
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
        fetchDataOptions();
    }, []);


    if (err) {
        return <div>Произошла ошибка: {err}</div>; // Отображаем ошибку, если она есть
    }


    const searchelement = { type, metro, mincost, maxcost, option, minsquare, maxsquare };
    console.log(searchelement);

    return (
        <div className="MainFiltersAllContainer">
            <div className="MainFiltersContainer">
                <div className="MainFiltersAll">
                    <form className='MainFiltersForm' action='/lofts' method='get' >
                        <div className="MainFiltersFormElements">
                            <div className="MainFiltersElement" >
                                <label className='MainFiltersElementName' htmlFor="type">Тип помещения</label>
                                <select value={type} onChange={(event) => { setType(event.target.value) }} name="type" id="type" className='MainFiltersSelect'>
                                    <option id="alltypes" value="alltypes">Все типы</option>
                                    {typesList.map(type => (
                                        <option id={type.idTypes} value={type.name}>{type.name}</option>
                                    ))}
                                </select>
                            </div >

                            <div className="MainFiltersElement loftsSearchFormElement">
                                <label className='MainFiltersElementName loftsSearchFormElementName' htmlFor="type">Станция метро</label>
                                <select value={metro} onChange={(event) => { setMetro(event.target.value) }} name="metro" id="metro" className='MainFiltersSelect'>
                                    <option id="allmetro" value="allmetro">Все станции</option>
                                    {metroList.map(metro => (
                                        <option id={metro.id} value={metro.nameMetro} >{metro.nameMetro}</option>
                                    ))
                                    }
                                </select>
                            </div>
                            {/*Возможно будет лучше сделать это чекбоксом, чтобы можно было выбрать много вариантов */}
                            <div className="MainFiltersElement">
                                <fieldset>
                                    <legend className='MainFiltersElementName'>Стоимость <span>₽/час</span></legend>
                                    <div className="FieldsetFilters">
                                        <input value={mincost} onChange={(event) => { setMincost(event.target.value) }} id="mincost" name="min" onkeydown="return event.key !== '-';" min="0" type='number' placeholder='От' />
                                        <div className="FieldsetFiltersLine"></div>
                                        <input value={maxcost} onChange={(event) => { setMaxcost(event.target.value) }} id="maxcost" name="max" onkeydown="return event.key !== '-';" min="0" type='number' placeholder='До' />
                                        {/* вместо мин 0 в значении до нужно поставить константу, где лежит переменная от */}
                                    </div>

                                </fieldset>
                            </div>

                            <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Опции площадки</label>
                                <select value={option} onChange={(event) => { setOption(event.target.value) }} name="options" id="options" className='MainFiltersSelect'>
                                    <option id="nooptions" value="nooptions">Без опций</option>
                                    {optionsList.map(option => (
                                        <option id={option.id} value={option.name}>{option.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="MainFiltersElement">
                                <fieldset>
                                    <legend className='MainFiltersElementName'>Площадь <span>м²</span></legend>
                                    <div className="FieldsetFilters">
                                        <input value={minsquare} onChange={(event) => { setMinsquare(event.target.value) }} id="minsquare" name="minsquare" type='number' onkeydown="return event.key !== '-';" min="0" placeholder='От' />
                                        <div className="FieldsetFiltersLine"></div>
                                        <input value={maxsquare} onChange={(event) => { setMaxsquare(event.target.value) }} id="maxsquare" name="maxsquare" type='number' onkeydown="return event.key !== '-';" min="0" placeholder='До' />

                                    </div>

                                </fieldset>
                            </div>

                            <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Количество человек</label>
                                <input value={capacity} onChange={(event) => { setCapacity(event.target.value) }} placeholder='2' name="people" id="people" type='number' onkeydown="return event.key !== '-';" min="0" className='MainFiltersSelect' />
                            </div>
                        </div>
                        <button className='MainFiltersFormBtn' type='submit'>Подобрать помещение <img src={arrowBtn} /></button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default MainFilters;