import { useEffect, useState } from "react";

const GetTypes = () => {
    const [typesList, setTypesList] = useState([]);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
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
        fetchData();

    }, []);
    console.log(data);
    if (err) return <div>Произошла ошибка: {err}</div>

    return (
        <div className="MainFiltersElement" >
            <label className='MainFiltersElementName' htmlFor="type">Тип помещения</label>
            <select name="type" id="type" className='MainFiltersSelect'>
                <option id="alltypes" value="alltypes">Все типы</option>
                {typesList.map(type => (
                    <option id={type.idTypes} value={type.name}>{type.name}</option>
                ))}
            </select>
        </div >
    )


}

export default GetTypes;