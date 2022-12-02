import React from "react";

import Carousel from "nuka-carousel";
import { ReactComponent as ValuteConverterIcon } from './svg/moneyexchangecurrencysymbol_109818.svg';
import { ReactComponent as CreditCalc } from './svg/savecostbudgetvaluepricecut_109773.svg';
import { ReactComponent as DepositCalc } from './svg/handlecarepackageshippingbox_109784.svg';

import { ReactComponent as FMember } from './svg/anime-boy-with-t-shirt-1_icon-icons.com_68054.svg';
import { ReactComponent as SMember } from './svg/anime-boy-with-short-trausers_icon-icons.com_68059.svg';
import { ReactComponent as TMember } from './svg/anime-boy-with-big-eyes_icon-icons.com_68064.svg';
import { ReactComponent as FoMember } from './svg/anime-girl-with-ponytail_icon-icons.com_68047.svg';
import { ReactComponent as YLOGO } from './svg/Yandex_logo_Cyrillic.svg';
import { ReactComponent as SravniRu } from './svg/Site_sravni_logo_rus.svg';
import { ReactComponent as CBR } from './svg/100.svg';

import { ReactComponent as AxiosLogo } from './svg/4 slide/Axios_(computer_library)_logo.svg';
import { ReactComponent as DjangoLogo } from './svg/4 slide/Django_(web_framework)-Logo.wine.svg';
import { ReactComponent as MobxLogo } from './svg/4 slide/mobx.svg';
import { ReactComponent as NestJSLogo } from './svg/4 slide/nestjs-seeklogo.com.svg';
import { ReactComponent as PostgreLogo } from './svg/4 slide/Postgresql_elephant.svg';
import { ReactComponent as ReactIcon } from './svg/4 slide/React-icon.svg';
import "./homeCopy.css";


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
                                    <ValuteConverterIcon className="SVG"/>
                                    <h3>Конвертер валют</h3>
                                    <span>—</span>
                                    <p>
                                        инструмент, который
                                        позволит вам рассчитать
                                        соотношения актуальных
                                        курсов денежных средств
                                        всего мира на сегодня. 
                                    </p>
                                </section>
                                <section className="slide-calc-description">
                                    <CreditCalc/>
                                    <h3>Калькулятор кредитов</h3>   
                                    <span>—</span>
                                    <p>
                                         инструмент, что из тысячи предложений о кредитовании
                                        найдёт для вас самое приемлемое. 
                                    </p>
                                </section>
                                <section className="slide-calc-description">
                                    <DepositCalc />
                                    <h3>Калькулятор вкладов</h3>
                                    <span>—</span>
                                    <p>
                                        инструмент, который
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
                                    <FMember/>
                                    <h3>Павел Смирнов</h3>
                                    <p>Тимлид, калькулятор вкладов, back-end</p>
                                </section>
                                <section className="slide-team-member">
                                    <SMember/>
                                    <h3>Илья Лебединский</h3>
                                    <p>Калькулятор кредитов, скрипты</p>
                                </section>
                                <section className="slide-team-member">
                                    <TMember/>  
                                    <h3>Алексей Ширяев</h3>
                                    <p>Конвертер валют, дизайн, вёрстка</p>
                                </section>
                                <section className="slide-team-member">
                                    <FoMember/>
                                    <h3>Александра Быкова</h3>
                                    <p>Бюрократия</p>
                                </section>
                            </div>
                        </section>
                        <section className="slide-container">
                            <h2>Об используемых сервисах</h2>
                            <div className="slide-services">
                                <section className="slide-service">
                                    <CBR className="CBR"/>
                                    <h3>ЦБ РФ</h3>
                                    <p>
                                        Используется для получения актуальных
                                        сведений о состоянии курсов валют
                                    </p>
                                </section>
                                <section className="slide-service">
                                    <SravniRu className="SravniRu"/>
                                    <h3>sravni.ru</h3>
                                    <p>Источник данных о кредитах и вкладах</p>
                                </section>
                                <section className="slide-service">
                                    <YLOGO className="YLOGO"/>
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
                                <ReactIcon className="l1"/>
                                <DjangoLogo className="l2"/>
                                <MobxLogo className="l3"/>
                                <NestJSLogo className="l5"/>
                                <PostgreLogo className="l4"/>
                                <AxiosLogo className="l6"/>
                            </div>
                        </section>
                    
                    </Carousel>
            </div>
        </>
    )
}