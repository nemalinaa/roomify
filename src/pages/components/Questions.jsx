import arrowClosed from "../../images/Questions/arrowClosed.svg";
import arrowOpen from "../../images/Questions/arrowOpen.svg";
import { useState } from "react";
import './styles/Questions.css';

const Questions = ()=>{

    return (
        <div className="all-questions">
            <div className="container-questions">
                <div className="main-text-questions">
                    Вопрос-ответ
                </div>
                <div className="background-questions">
                    <div className="questions">
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Как арендовать помещение?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                    Для того, чтобы арендовать помещение вы можете связать с нашими менеджерами по телефону, указанному в карточке помещения, либо написать в WhatsApp
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Можно ли забронировать помещение заранее?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                Да, вы можете забронировать помещение заранее. Чем раньше вы сделаете это, тем выше вероятность того, что нужное вам время будет свободно.
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Есть ли минимальный срок аренды?                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                Да, вы можете уточнить минимальный срок аренды для каждого помещения в его карточке или у менеджера
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                Что делать, если я хочу арендовать помещение на несколько дней?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                Свяжитесь с менеджером и он подскажет вам, доступна ли возможность забронировать конкретное помещение на несколько дней.
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                     Можно ли привозить свою еду/напитки?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                На большинство наших площадок можно приносить свою еду и напитки, о наличии и размере пробкового сбора уточняйте в карточке помещения либо у менеджера.
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Есть ли парковка рядом с помещением?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                У всех наших площадок есть бесплатная паркова неподалеку.
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Есть ли Wi-Fi в помещениях?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                Да, на каждой нашей площадке есть Wi-Fi, обратитесь к менеджеру за названием и паролем сети.
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Каковы условия отмены бронирования?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                При отмене бронирования более за 7 дней до него - предоплата возвращается в полном объеме, при отмене бронироования в период от 7 до 3 дней до события - предоплата возвращается в 50% объеме, при отмене бронирования менее чем за 3 дня до события - предоплата не возвращается.
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Куда обращаться, если возникли проблемы во время аренды?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                По всем возникающим в процессе аренды вопросам обращайтесь к менеджеру.
                            </div>
                            <div className="line-question"></div>
                        </div>
                        <div className="block-question">
                            <div className="question">
                                <div className="text-question">
                                    Как связаться с вами?
                                </div>
                                <div className="arrow">
                                    <img src={arrowClosed} />
                                </div>
                            </div>
                            <div className="answer">
                                Вы можете связаться с нами по почте roomify_help@mail.ru, позвонить по номеру +7 (924) 561 91 38 либо написать нам в WhatsApp.
                            </div>
                            {/* <div className="line-question"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Questions;