import { useEffect, useState } from "react";

const GetOptions = ()=>{
    const [optionsList,  setOptionsList] = useState([]);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch('http://localhost:3002/options');
                if(!response.ok){
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
        fetchData();
    }, []);

    if (err) return <div>Произошла ошибка: {err}</div>

    return(
        <div className="MainFiltersElement">
            <label className='MainFiltersElementName' htmlFor="type">Опции площадки</label>
            <select name="options" id="options" className='MainFiltersSelect'>
                <option value="nooptions">Без опций</option>
                {optionsList.map(option =>(
                    <option id={option.id} value={option.name}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}
export default GetOptions;