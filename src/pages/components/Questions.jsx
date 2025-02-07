import arrowClosed from "../../images/Questions/arrowClosed.svg";
import arrowOpen from "../../images/Questions/arrowOpen.svg";
import { useState } from "react";
import './styles/Questions.css';

const Questions = ()=>{
    const [openQuestions, setOpenQuestions] = useState([]);
    //когда будем переносить в бд - arrow: нам не нужен
    const questions = [
    {
        id: 0,
        question: "Как арендовать помещение?",
        answer: "Для того, чтобы арендовать помещение вы можете связать с нашими менеджерами по телефону, указанному в карточке помещения, либо написать в WhatsApp",
        arrow: arrowClosed
    },
    {   
        id: 1,
        question: "Можно ли забронировать помещение заранее?",
        answer: "Да, вы можете забронировать помещение заранее. Чем раньше вы сделаете это, тем выше вероятность того, что нужное вам время будет свободно.",
        arrow: arrowClosed
    },
    {
        id: 2,
        question: "Есть ли минимальный срок аренды?",
        answer: "Да, вы можете уточнить минимальный срок аренды для каждого помещения в его карточке или у менеджера.",
        // arrow: arrowClosed
    },
    {
        id: 3,
        question: "Что делать, если я хочу арендовать помещение на несколько дней?",
        answer: "Свяжитесь с менеджером и он подскажет вам, доступна ли возможность забронировать конкретное помещение на несколько дней.",
        arrow: arrowClosed
    },
    {
        id: 4,
        question: "Можно ли привозить свою еду/напитки?",
        answer: "На большинство наших площадок можно приносить свою еду и напитки, о наличии и размере пробкового сбора уточняйте в карточке помещения либо у менеджера.",
        arrow: arrowClosed
    },
    {
        id: 5,
        question: "Есть ли парковка рядом с помещением?",
        answer: "У всех наших площадок есть бесплатная паркова неподалеку.",
        arrow: arrowClosed
    },
    {
        id: 6,
        question: "Есть ли Wi-Fi в помещениях?",
        answer: "Да, на каждой нашей площадке есть Wi-Fi, обратитесь к менеджеру за названием и паролем сети.",
        arrow: arrowClosed
    },
    {
        id: 7,
        question: "Каковы условия отмены бронирования?",
        answer: "При отмене бронирования более за 7 дней до него - предоплата возвращается в полном объеме, при отмене бронироования в период от 7 до 3 дней до события - предоплата возвращается в 50% объеме, при отмене бронирования менее чем за 3 дня до события - предоплата не возвращается.",
        arrow: arrowClosed
    },
    {
        id: 8,
        question: "Куда обращаться, если возникли проблемы во время аренды?",
        answer: "По всем возникающим в процессе аренды вопросам обращайтесь к менеджеру.",
        arrow: arrowClosed
    },
    {
        id: 9,
        question: "Как связаться с вами?",
        answer: "Вы можете связаться с нами по почте roomify_help@mail.ru, позвонить по номеру +7 (924) 561 91 38 либо написать нам в WhatsApp.",
        arrow: arrowClosed
    },
    ]
    function clickImage(question){
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
                        {questions.map((question, item)=>(
                            <div key={question.id} className="block-question">
                                <div onClick={()=>clickImage(question)} className="question">
                                    <div className="text-question">
                                        {question.question}
                                    </div>
                                    <div className="arrow">
                                        <img src={openQuestions.includes(question.id) ? arrowOpen : arrowClosed} />
                                    </div>
                                </div>
                                <div
                                    className={`answer ${
                                        openQuestions.includes(question.id) ? "answer-visible" : "answer-hidden"
                                    }`}
                                >
                                    {question.answer}
                                </div>
                                {question.id !== (questions.length-1) &&
                                <div className="line-question"></div> }
                            </div>    
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Questions;