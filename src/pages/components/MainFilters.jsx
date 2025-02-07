import './styles/MainFilters.css';
import arrowBtn from '../../images/ArrowButton.svg';

const MainFilters = () => {
    return (
        <div className="MainFiltersAllContainer">
            <div className="MainFiltersContainer">
                <div className="MainFiltersAll">
                    <form className='MainFiltersForm' action='#' method='' >
                        <div className="MainFiltersFormElements">
                            <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Тип мероприятия</label>
                                <select name="type" id="type" className='MainFiltersSelect'>
                                    <option value="alltypes">Все типы</option>
                                    <option value="bd">День рождения</option>
                                    <option value="marrige">Свадьба</option>
                                    <option value="corporate">Корпоратив</option>
                                </select>
                            </div>

                            <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Станция метро</label>
                                <select name="metro" id="metro" className='MainFiltersSelect'>
                                    <option value="allmetro">Все станции</option>
                                    <option value="lublino">Люблино</option>
                                    <option value="fili">Фили</option>
                                    <option value="ulitsa1905">Улица 1905</option>
                                    <option value="pushk">Пушкинская</option>
                                </select>
                            </div>
                            {/*Возможно будет лучше сделать это чекбоксом, чтобы можно было выбрать много вариантов */}
                            <div className="MainFiltersElement">
                                <fieldset>
                                    <legend className='MainFiltersElementName'>Стоимость <span>₽/час</span></legend>
                                    <div className="FieldsetFilters">
                                        <input id="mincost" name="min" onkeydown="return event.key !== '-';" min="0" type='number' placeholder='От' />
                                        <div className="FieldsetFiltersLine"></div>
                                        <input id="maxcost" name="max" onkeydown="return event.key !== '-';" min="0" type='number' placeholder='До' />
                                        {/* вместо мин 0 в значении до нужно поставить константу, где лежит переменная от */}
                                    </div>

                                </fieldset>
                            </div>

                            <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Опции площадки</label>
                                <select name="options" id="options" className='MainFiltersSelect'>
                                    <option value="nooptions">Без опций</option>
                                    <option value="alcogol">Разрешен алкоголь</option>
                                    <option value="pylon">Есть пилон</option>
                                    <option value="sing">Караоке</option>
                                </select>
                            </div>

                            <div className="MainFiltersElement">
                                <fieldset>
                                    <legend className='MainFiltersElementName'>Площадь <span>м²</span></legend>
                                    <div className="FieldsetFilters">
                                        <input id="minsquare" name="min" type='number' onkeydown="return event.key !== '-';" min="0" placeholder='От' />
                                        <div className="FieldsetFiltersLine"></div>
                                        <input id="maxsquare" name="max" type='number' onkeydown="return event.key !== '-';" min="0" placeholder='До' />

                                    </div>

                                </fieldset>
                            </div>

                            <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Количество человек</label>
                                <input placeholder='2' name="people" id="people" type='number' onkeydown="return event.key !== '-';" min="0" className='MainFiltersSelect' />
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