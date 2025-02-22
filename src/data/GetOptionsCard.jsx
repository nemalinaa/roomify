import { useEffect, useState } from "react";

const GetOptionsCard = ({ id }) => {
    const [optionsList, setOptionsList] = useState(null);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/lofts-with-options/${id}`);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                }

                const json = await response.json();
                setData(json);
                setOptionsList(json);
            } catch (error) {
                setErr(error);
                console.error("Ошибка при загрузке данных", error);
            }


        };

        fetchData();

    }, [id]);


    if (!data || !id) {
        return <div>Загрузка...</div>;
    }

    if (err) {
        return <div>Произошла ошибка: {err}</div>
    }

    return (
        <div className="loftCardContainerConditions">
            <h5 className="loftCardConditionsTitle">Опции площадки:</h5>
            <ul className="loftCardConditionsList">
                {optionsList.map(option => (
                    <li>{option.option_name}</li>
                ))}
            </ul>
        </div>
    )
};

export default GetOptionsCard;