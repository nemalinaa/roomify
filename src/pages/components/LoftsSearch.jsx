import './styles/LoftsSearch.css';
import GetFilters from '../../data/GetFilters';

const LoftsSearch = () => {
    return (
        <div className="loftsSearchAll">
            <div className="loftsSearchContainer">
                <form method="" action="" className="loftsSearchForm">
                    <div className="loftsSearchFormElements">


                        <GetFilters />
                        {/* <label htmlFor="type" className="loftsSearchFormElementName">Станция метро</label>
                            <select name="metro" id="metro" className="loftsSearchFormSelect">
                                <option value="allmetro">Все станции</option>
                                <option value="lublino">Люблино</option>
                                <option value="fili">Фили</option>
                                <option value="ulitsa1905">Улица 1905</option>
                                <option value="pushk">Пушкинская</option>
                            </select> */}

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

export default LoftsSearch;