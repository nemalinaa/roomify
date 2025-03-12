import './styles/LoftsSearch.css';
import GetFilters from '../../data/GetFilters';
import { useEffect, useState } from 'react';

const RoomsSearch = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    const [metroList, setMetroList] = useState([]);
    const [metro, setMetro] = useState(null);

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
        fetchDataMetro();
    }, [])
    return (
        <div className="loftsSearchAll">
            <div className="loftsSearchContainer">
                <form method="" action="" className="loftsSearchForm">
                    <div className="loftsSearchFormElements">


                        <div className="loftsSearchFormElement">
                            <label htmlFor="metro" className="loftsSearchFormElementName">Станция метро</label>
                            <select value={metro} onChange={(event) => { setMetro(event.target.value) }} name="metro" id="metro" className="loftsSearchFormSelect">
                                <option id="allmetro" value="allmetro">Все станции</option>
                                {metroList.map(metro => (
                                    <option id={metro.id} value={metro.nameMetro} >{metro.nameMetro}</option>
                                ))
                                }
                            </select>
                        </div>

                        <div className="loftsSearchFormElement">
                            <fieldset>
                                <legend className='loftsSearchFormElementName'>Стоимость <span>₽/час</span></legend>
                                <div className="FieldsetFiltersLoftsSearch">
                                    <input id="mincost" name="min" type='number' placeholder='От' />
                                    <div className="FieldsetFiltersLineLoftsSearch"></div>
                                    <input id="maxcost" name="max" type='number' placeholder='До' />
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <button className="loftsSearchOtherFiltersButton">Другие фильтры</button>
                    <button className="loftsSearchButton">Искать</button>
                </form>
            </div>
        </div>
    )
}

export default RoomsSearch;