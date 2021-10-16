import React, {Component} from 'react';
import ModalExample from "../Data";

const brends = [
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/13991.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/2292.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/561.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/461.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/1031.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/14278.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/29467.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/13991.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/2292.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/561.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/461.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/1031.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/14278.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/29467.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/13991.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/2292.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/561.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/461.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/1031.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/14278.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/29467.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/13991.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/2292.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/561.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/461.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/1031.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/14278.jpg"},
    {id:1,brend:"https://images.wbstatic.net/brands/small/new/4077.jpg"},

]



class Brends extends Component {
    render() {
        return (
            <div>

                <div className="d-flex">
                <h1>Популярные бренды</h1>
               <a className='ms-4 mt-4 text-danger' href="#">Смотреть все</a>

                </div>
                <div className="row cards">
                    {brends.map((item, index) => (
                        <div className=' col mt-4'>
                            <a href="#">
                            <img src={item.brend} alt=""/>
                            </a>
                        </div>
                    ))

                    }
                </div>

            </div>
        );
    }
}

export default Brends;