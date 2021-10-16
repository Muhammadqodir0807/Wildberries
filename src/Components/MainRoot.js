import React, {Component} from 'react';
import Home from "./HomePage/Home";
import Wildberries from "./Wildberries";

import MainParts from "./HomePage/MainParts";


import {BrowserRouter,Switch,Route} from "react-router-dom"
import Wildberrries from "./Wildberries"
import Back from "./Back";

class MainRoot extends Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/two" exact component={Wildberries} />
                        <Route path="/three" exact component={Back} />
                    </Switch>

                </BrowserRouter>
            </div>
        );
    }
}

export default MainRoot;