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
                                {/* цена */}
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
                                {/* площадь */}
                            </div>

                            <div className="MainFiltersElement">
                                <label className='MainFiltersElementName' htmlFor="type">Количество человек</label>
                                <select name="people" id="people" className='MainFiltersSelect'>
                                    <option value="2">2</option>
                                    <option value="5">3-5</option>
                                    <option value="10">6-10</option>
                                    <option value="20">11-20</option>
                                    <option value=">20">{'>20'}</option>
                                </select>
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