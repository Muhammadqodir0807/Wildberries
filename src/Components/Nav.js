

import React, {Component} from 'react';
import Back from "./Back";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="first-div">





                        <ul>
                            <li>
                                <a href='#'>Ru</a>
                                <img className='ms-1' src="images/img-bayroq-rus.svg" alt=""/>
                            </li>
                            <li>
                                <a href="">
                                    <div className="geo">.</div>
                                    {/*<img src="images/navbar-img/img-addres.jpg" alt=""/>*/}
                                </a>
                                <a href="#">Москва</a>
                            </li>
                            <li>
                                <a href="#">
                                    Бесплатная доставка
                                </a>
                            </li>
                            <li>
                                <a className="navbar-one-button" href="#">
                                    Продавайте на Wildberries
                                </a>
                            </li>
                            <li>
                                <a className="navbar-two-button" href="#">
                                    Сообщить о проблеме
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="second-div">
                        <div className="for-img-one">
                            <a href="#">
                                <img src="images/burg.png" alt=""/>
                            </a>
                        </div>
                        <div className="logo-img">
                            <a href="#">
                                WILDBERRIES
                            </a>
                        </div>
                        <div className="for-input">
                            <input type="text" placeholder="Я ищу..."/>
                        </div>
                        <div className="second-left-side">
                            <div className="first-qism">
                                <a href="">
                                    <div className="ras1">.</div>
                                    {/*<img src="images/navbar-img/img-addres.jpg" alt=""/>*/}
                                </a>
                                <br/>
                                <a href="#">Адреса</a>
                            </div>
                            <div className="first-qism">
                                <a href="#">

                                   <div className="ras2">.</div>
                                    {/*<img src="images/navbar-img/img-voyti.jpg" alt=""/>*/}
                                </a>
                                <br/>
                                <a href="#">Войти</a>
                            </div>
                            <div className="first-qism">
                                <a href="#">
                                    <div className="ras3">.</div>
                                    {/*<img src="images/navbar-img/img-korzinka.jpg" alt=""/>*/}
                                </a>
                                <br/>
                                <a href="#">Корзина</a>
                            </div>
                        </div>
                    </div>
                    <div className="oval"></div>
                </div>
            </div>
        );
    }
}

export default Navbar;