import React, {Component,useState} from 'react';
import {UncontrolledCollapse, CardBody, Card, Form, FormGroup, Label, Input,} from 'reactstrap';
import axios from "axios";
import ModalExample from "./Data";
import Back from "./Back";
import Footer from "./Footer";
import Cards from "./Cards";





class Main extends Component{



    render() {



        return (


                <div className="row main">
                    <div className="col-3 d-lg-block d-sm-none">
                        <div className='leftpart'>

                            <div className="aksiya">
                                <p>Главная</p>
                                <p>/ Акции /</p>
                                <span>Акция Samsung</span>
                            </div>

                            <div className='bigaksiya'><h1>Акция Samsung</h1></div>
                            <div className="sam"><h5>Акция Samsung</h5></div>


                            <div>
                                <div className="kategoriy" id="toggler" style={{marginBottom: '1rem'}}>
                                    <h5>Категория</h5>
                                </div>
                                <UncontrolledCollapse className="dropdownmain" toggler="#toggler">
                                    <Card className="back">
                                        <CardBody className='p-0'>
                                            <Form>
                                                <FormGroup check inline>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>Пылесос (4)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox" checked="checked"/> <h6>Смартфон
                                                        (44)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>Телевизор (28)</h6>
                                                    </Label>
                                                </FormGroup>

                                            </Form>

                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                                <div className="kategoriy" id="toggler" style={{marginBottom: '1rem'}}>
                                    <h5>Бренд</h5>
                                </div>
                                <UncontrolledCollapse className="dropdownmain" toggler="#toggler">
                                    <Card className="back">
                                        <CardBody className='p-0'>
                                            <Form>
                                                <FormGroup check inline>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>Samsung (73)</h6>
                                                    </Label>

                                                </FormGroup>

                                            </Form>

                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                                <div className="kategoriy" id="toggler" style={{marginBottom: '1rem'}}>
                                    <h5>Цена, ₽</h5>
                                </div>

                                <UncontrolledCollapse className="dropdownmain" toggler="#toggler">
                                    <Card className="back">
                                        <CardBody className='p-0'>
                                            <Form>
                                                <FormGroup check inline className='d-flex ps-0'>
                                                    <Label check className="chek ">
                                                        <Input type="text" value='399891'/>

                                                    </Label>

                                                    <Label check className="chek">
                                                        <Input type="text" value='9847'/>

                                                    </Label>
                                                </FormGroup>


                                            </Form>

                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                                <div className="kategoriy" id="toggler" style={{marginBottom: '1rem'}}>
                                    <h5>Скидка</h5>
                                </div>
                                <UncontrolledCollapse className="dropdownmain" toggler="#toggler">
                                    <Card className="back">
                                        <CardBody className='p-0'>
                                            <Form>
                                                <FormGroup check inline>
                                                    <Label check className="chek">
                                                        <Input type="radio"/> <h6>от 10% и выше</h6>
                                                    </Label>

                                                </FormGroup>

                                            </Form>

                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>


                                <div className="kategoriy" id="toggler" style={{marginBottom: '1rem'}}>
                                    <h5>Разрешение экрана</h5>
                                </div>
                                <UncontrolledCollapse className="dropdownmain" toggler="#toggler">
                                    <Card className="over">
                                        <CardBody className='p-0'>
                                            <Form>
                                                <FormGroup check inline>
                                                    <Label check className="chek">
                                                        <Input type="checkbox" checked="checked"/> <h6>4K UHD
                                                        (3840x2160) (1)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>720*1600 (8)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>1366x768 (2)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>1600x720 (12)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>1920x1080 (1)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>2400x1080 (10)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>3200x1440 (6)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>3840 x 2160 (18)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>3840x2160 (3)</h6>
                                                    </Label><br/>
                                                    <Label check className="chek">
                                                        <Input type="checkbox"/> <h6>7680x4320 (2)</h6>
                                                    </Label>


                                                </FormGroup>

                                            </Form>

                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>


                            </div>


                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="row">
                            <div className='menu'><p>81 товар</p></div>
                            <div className="menu">
                                <p>Сортировать по:</p>
                                <h6>Популярности</h6>
                                <h6>Рейтингу</h6>
                                <h6>Цене</h6>
                                <h6>Скидке</h6>
                                <h6> Обновлению</h6>
                            </div>




                            <Cards/>

                            <div className="texnika d-lg-block d-sm-none">
                                <div><h1>С этими товарами ищут</h1></div>
                                <div className="d-flex">
                                    <div className="smart ms-0">
                                        <p>смартфон</p>
                                    </div>
                                    <div className="smart">
                                        <p>смартфон xiaomi</p>
                                    </div>
                                    <div className="smart">
                                        <p>samsung a52</p>
                                    </div>
                                    <div className="smart">
                                        <p>айфон</p>
                                    </div>
                                    <div className="smart">
                                        <p>samsung galaxy s21</p>
                                    </div>
                                    <div className="smart">
                                        <p>смартфоны</p>
                                    </div>
                                    <div className="smart">
                                        <p>смартфон samsung</p>
                                    </div>
                                    <div className="smart">
                                        <p>iphone</p>
                                    </div>
                                    <div className="smart">
                                        <p>планшет</p>
                                    </div>
                                    <div className="smart">
                                        <p>ноутбук</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

        );
    }
}

export default Main;













