import arrowClosed from "../../images/Questions/arrowClosed.svg";
import arrowOpen from "../../images/Questions/arrowOpen.svg";
import { useEffect, useState } from "react";
import './styles/Questions.css';

const Questions = () => {
    const [openQuestions, setOpenQuestions] = useState([]);

    const [questionslist, setQuestionlist] = useState([]);
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/questions');
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
                };
                const json = await response.json();
                setData(json);
                setQuestionlist(json);
            } catch (error) {
                setErr(error);
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData();
    })


    function clickImage(question) {
        if (openQuestions.includes(question.id)) {
            setOpenQuestions(openQuestions.filter((questionId) => questionId !== question.id));
        } else {
            setOpenQuestions([...openQuestions, question.id]);
        }
    }
    return (
        <div className="all-questions">
            <div className="container-questions">
                <div className="main-text-questions">
                    Вопрос-ответ
                </div>
                <div className="background-questions">
                    <div className="questions">
                        {questionslist.map((question, item) => (
                            <div key={question.id} className="block-question">
                                <div onClick={() => clickImage(question)} className="question">
                                    <div className="text-question">
                                        {question.question}
                                    </div>
                                    <div className="arrow">
                                        <img src={openQuestions.includes(question.id) ? arrowOpen : arrowClosed} />
                                    </div>
                                </div>
                                <div
                                    className={`answer ${openQuestions.includes(question.id) ? "answer-visible" : "answer-hidden"
                                        }`}
                                >
                                    {question.answer}
                                </div>
                                {question.id !== (questionslist.length) &&
                                    <div className="line-question"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Questions;