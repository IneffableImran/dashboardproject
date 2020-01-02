import React, { Component } from 'react';
import MapChart from "./MapChart";
import './style.css';
class Widget3 extends Component {
    render() {
        return (
            <>
            <div>
                <div>
                    <h1>Widget: {"3"}</h1>
                </div>
                <h1>Description : {"World Map"}</h1>
                <hr />
                <MapChart />
            </div>
            </>
        );
    }
}

export default Widget3;
