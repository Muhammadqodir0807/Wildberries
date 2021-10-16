import React, {Component} from 'react';
import {Link} from "react-router-dom";


const data =[
    {
        id:1,foto:'https://images.wbstatic.net/bners1/383948586978845.jpg'
    },
    {
        id:2,foto:'https://images.wbstatic.net/bners1/1_Scarlett_desk_83838944995.jpg'
    },
    {
        id:3,foto:'https://images.wbstatic.net/bners1/86744579908544.jpg'
    },
    {
        id:4,foto:'https://images.wbstatic.net/bners1/1_Loreal_desk_37383856.jpg'
    },
    {
        id:5,foto:'https://images.wbstatic.net/bners1/gillette_oral_desk_839949677.jpg'
    },
    {
        id:6,foto:'https://images.wbstatic.net/bners1/Uni_desk_83349567.jpg'
    },
    {
        id:7,foto:'https://images.wbstatic.net/bners1/1_Tefal_desk_473849967.jpg'
    },
    {
        id:8,foto:'https://images.wbstatic.net/bners1/desk_87384959677.jpg'
    }

];

class MainParts extends Component {
    render() {
        return (
            <div>
                <div className="select mt-5 mb-5">
                    <div className="row">
                        {
                            data.map((item,index) => (

                                <Link to={"/two"} className="col-3 mt-4">
                                    <div className="box-img">
                                        <img src={item.foto} alt=""/>
                                    </div>
                                </Link>

                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MainParts;