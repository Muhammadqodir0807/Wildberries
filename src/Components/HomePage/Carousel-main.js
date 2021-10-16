
import React from "react";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function CarouselMain() {
    const renderSlides = () =>

            [
                {
                    id:1,foto:"https://images.wbstatic.net/bners1/big_smartphone_1310.jpg"
                },
                {
                    id:2,foto:"https://images.wbstatic.net/bners1/big_avto_1310.jpg"
                },
                {
                    id:3,foto:"https://images.wbstatic.net/bners1/big_delivery_1310.jpg"
                },
                {
                    id:4,foto:"https://images.wbstatic.net/bners1/big_holodilnik_1310_1.jpg"
                },
                {
                    id:5,foto:"https://images.wbstatic.net/bners1/big_zagran_goods_1310.jpg"
                },
                {
                    id:6,foto:"https://images.wbstatic.net/bners1/big_kredit_1310.jpg"
                },
                {
                    id:7,foto:"https://images.wbstatic.net/bners1/big_food_1310.jpg"
                },
                {
                    id:8,foto:"https://images.wbstatic.net/bners1/big_wb_1310.jpg"
                }
            ]
           .map(num => (
            <Link to={"/two"}>
                <img src={num.foto} alt=""/>

            </Link>
        ));

    return (
        <div className="carousel-main">
            <Slider
                dots={false}
                autoplay={true}
                autoplaySpeed={3000}
            >
                {renderSlides()}
            </Slider>
        </div>
    );
}



