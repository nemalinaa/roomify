import './styles/MainFilters.css';
import arrowBtn from '../../images/MainFilter/ArrowButton.svg';
// import arrowOpen from '../../images/MainFilter/arrowOpen.svg';
import arrowClosed from '../../images/MainFilter/arrowClosed.svg';

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
    const [type, setType] = useState([]);
    const [metro, setMetro] = useState([]);
    const [option, setOption] = useState([]);

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isMetroOpen, setIsMetroOpen] = useState(false);
    const [isTypesOpen, setIsTypesOpen] = useState(false);

    // Обработчик клика на поле с опциями
    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen); // Переключаем состояние
    };

    const toggleMetro = () => {
        setIsMetroOpen(!isMetroOpen);
    }

    const toggleTypes = () => {
        setIsTypesOpen(!isTypesOpen);
    }

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown') && isOptionsOpen) {
                setIsOptionsOpen(false); // Закрываем список, если кликнули вне поля
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOptionsOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown') && isMetroOpen) {
                setIsMetroOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMetroOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown') && isTypesOpen) {
                setIsTypesOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isTypesOpen]);



    if (err) {
        return <div>Произошла ошибка: {err}</div>; // Отображаем ошибку, если она есть
    };


    const handleOptionChange = (event, optionName) => {
        event.stopPropagation(); // Предотвращаем закрытие списка
        setOption((prevSelected) => {
            if (prevSelected && prevSelected.includes(optionName)) {
                return prevSelected.filter((name) => name !== optionName);
            } else {
                return [...(prevSelected || []), optionName];
            }
        });
    };

    const handleMetroChange = (event, metroName) => {
        event.stopPropagation();
        setMetro((prevSelected) => {
            if (prevSelected && prevSelected.includes(metroName)) {
                return prevSelected.filter((name) => name !== metroName);
            } else {
                return [...(prevSelected || []), metroName];
            }
        });
    };

    const handleTypesChange = (event, typeName) => {
        event.stopPropagation();
        setType((prevSelected) => {
            if (prevSelected && prevSelected.includes(typeName)) {
                return prevSelected.filter((name) => name !== typeName);
            } else {
                return [...(prevSelected || []), typeName];
            }
        });
    };

    const searchelement = { type, metro, mincost, maxcost, option, minsquare, maxsquare };
    console.log(searchelement);

    return (
        <div className="MainFiltersAllContainer">
            <div className="MainFiltersContainer">
                <div className="MainFiltersAll">
                    <form className='MainFiltersForm' action="/" method='get' >
                        <div className="MainFiltersFormElements">
                            <div className="MainFiltersElement" >
                                <label className='MainFiltersElementName' htmlFor="type">Тип помещения</label>
                                <div className="dropdown" onClick={toggleTypes}>
                                    <div className="dropdownLabel">
                                        <span>Все типы</span>
                                        <img src={arrowClosed} alt="" />
                                    </div>
                                    <ul style={{ display: isTypesOpen ? 'block' : 'none' }}>
                                        {typesList.map((currentType) => (
                                            <li key={currentType.idTypes} onClick={(e) => handleTypesChange(e, currentType.idTypes)}>
                                                <input
                                                    type="checkbox"
                                                    checked={type.includes(currentType.idTypes)}
                                                    onChange={() => { }}
                                                />
                                                {currentType.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div >

                            <div className="MainFiltersElement loftsSearchFormElement">
                                <label className='MainFiltersElementName loftsSearchFormElementName' htmlFor="type">Станция метро</label>
                                <div className="dropdown" onClick={toggleMetro}>
                                    <div className="dropdownLabel">
                                        <span>Все станции</span>
                                        <img src={arrowClosed} alt="" />
                                    </div>
                                    <ul style={{ display: isMetroOpen ? 'block' : 'none' }}>
                                        {metroList.map((currentMetro) => (
                                            <li key={currentMetro.idMetro} onClick={(e) => handleMetroChange(e, currentMetro.idMetro)}>
                                                <input
                                                    type="checkbox"
                                                    checked={metro.includes(currentMetro.idMetro)}
                                                    onChange={() => { }}
                                                />
                                                {currentMetro.nameMetro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
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
                                <label className="MainFiltersElementName" htmlFor="option-ul">
                                    Опции площадки
                                </label>
                                <div className="dropdown" onClick={toggleOptions}>
                                    {/* Кнопка для открытия списка */}
                                    <div className="dropdownLabel">
                                        <span>Выбрать опции</span>
                                        <img src={arrowClosed} alt="" />
                                    </div>
                                    <ul style={{ display: isOptionsOpen ? 'block' : 'none' }}>
                                        {optionsList.map((currentOption) => (
                                            <li key={currentOption.idOptions} onClick={(e) => handleOptionChange(e, currentOption.idOptions)}>
                                                <input
                                                    type="checkbox"
                                                    checked={option.includes(currentOption.idOptions)}
                                                    onChange={() => { }}
                                                />
                                                {currentOption.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
            </div >

        </div >
    )
}

export default MainFilters;