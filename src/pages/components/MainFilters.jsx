import './styles/MainFilters.css';
import arrowBtn from '../../images/MainFilter/ArrowButton.svg';

import GetFilters from '../../data/GetFilters';
import GetOptions from '../../data/GetOptions';
import GetTypes from '../../data/GetTypes';
import { useState } from 'react';


const MainFilters = () => {
    const [mincost, setMincost] = useState(null);
    const [maxcost, setMaxcost] = useState(null);
    const [minsquare, setMinsquare] = useState(null);
    const [maxsquare, setMaxsquare] = useState(null);
    const [capacity, setCapacity] = useState(null);
    const [type, setType] = useState(null);

    const SetNewType = (data) => {
        console.log("Получены данные от дочернего компонента:", data);
        setType(data); // Обновляем состояние родительского компонента
    };
    console.log(type);

    return (
        <div className="MainFiltersAllContainer">
            <div className="MainFiltersContainer">
                <div className="MainFiltersAll">
                    <form className='MainFiltersForm' action='/lofts' method='get' >
                        <div className="MainFiltersFormElements">
                            <GetTypes setType={SetNewType} />

                            <GetFilters />
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

                            <GetOptions />
                            {/* <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Опции площадки</label>
                                <select name="options" id="options" className='MainFiltersSelect'>
                                    <option value="nooptions">Без опций</option>
                                    <option value="alcogol">Разрешен алкоголь</option>
                                    <option value="pylon">Есть пилон</option>
                                    <option value="sing">Караоке</option>
                                </select>
                            </div> */}

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