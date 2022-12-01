import React from "react";
import "./home.css";
import Carousel from "nuka-carousel";

export const Home = ()=> { 
    return(
        <>
            <div className="home-page-container">
                <h1>Финансовый калькулятор</h1>
                    <Carousel 
                        className="Carousel"
                        wrapAround={true}
                        renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                            <button className="slideLeft" onClick={previousSlide} disabled={previousDisabled}>
                              ❮
                            </button>
                          )}
                        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                            <button className="slideRight" onClick={nextSlide} disabled={nextDisabled}>
                              ❯
                            </button>
                        )}
                        defaultControlsConfig={{
                            pagingDotsStyle: {
                              fill: '#449FFB'
                            }
                          }}
                    >
                        <section className="slide-container">
                            <h2>О проекте</h2>
                            <p className="slide-description">
                                Финансовый калькулятор поможет решить проблему выбора
                                кредита и вклада, а также с ним вы всегда будете знать
                                актуальный курс валют.
                            </p>
                            <div className="slide-calcs">
                                <section className="slide-calc-description">
                                    <h3>Конвертер валют</h3>
                                    <p>
                                        — инструмент, который
                                        позволит вам рассчитать
                                        соотношения актуальных
                                        курсов денежных средств
                                        всего мира на сегодня. 
                                    </p>
                                </section>
                                <section className="slide-calc-description">
                                    <h3>Калькулятор кредитов</h3>
                                    <p>
                                        - инструмент, что из тысячи предложений о кредитовании
                                        найдёт для вас самое приемлемое. 
                                    </p>
                                </section>
                                <section className="slide-calc-description">
                                    <h3>Калькулятор влкад</h3>
                                    <p>
                                        — инструмент, который
                                        поможет отыскать место, где ваши деньги не только
                                        сохранятся, но и преумножаться. 
                                    </p>
                                </section>
                            </div>
                            
                        </section>
                        <section className="slide-container">
                            <h2>О команде</h2>
                            <div className="slide-team">
                                <section className="slide-team-member">
                                    <h3>Павел Смирнов</h3>
                                    <p>Тимлид, ...</p>
                                </section>
                                <section className="slide-team-member">
                                    <h3>Илья Лебединский</h3>
                                    <p>...</p>
                                </section>
                                <section className="slide-team-member">
                                    <h3>Алексей Ширяев</h3>
                                    <p>...</p>
                                </section>
                                <section className="slide-team-member">
                                    <h3>Александра Быкова</h3>
                                    <p>...</p>
                                </section>
                            </div>
                        </section>
                        <section className="slide-container">
                            <h2>Об используемых сервисах</h2>
                            <div className="slide-services">
                                <section className="slide-service">
                                    <img alt="CBR" src="#" />
                                    <h3>ЦБ РФ</h3>
                                    <p>
                                        Используется для получения актуальных
                                        сведений о состоянии курсов валют
                                    </p>
                                </section>
                                <section className="slide-service">
                                    <img alt="sravni.ru" src="#" />
                                    <h3>sravni.ru</h3>
                                    <p>Источник данных о кредитах и вкладах</p>
                                </section>
                                <section className="slide-service">
                                    <img alt="YaOAuth" src="#" />
                                    <h3>Yandex OAuth</h3>
                                    <p>
                                        Сервис, позволяющий пользователю совершать
                                        вход через свой аккаунт в Яндексе
                                    </p>
                                </section>
                            </div>
                        </section>
                        <section className="slide-container">
                            <h2>О стеке</h2>
                            <div className="slide-technologies">
                                <img alt="React" src="#" />
                                <img alt="Django" src="#" />
                                <img alt="MobX" src="#" />
                                <img alt="Axios" src="#" />
                                <img alt="NestJs" src="#" />
                                <img alt="PostgreSQL" src="#" />
                            </div>
                        </section>
                    
                    </Carousel>

            </div>
        </>
    )
}