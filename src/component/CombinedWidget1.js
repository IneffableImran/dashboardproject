import React, { Component } from 'react';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';

class CombinedWidget extends Component {

    render() {
        return (
            <>
                <div className="main-container">
                    <Widget1 />
                    <Widget2 />
                    <Widget3 />
                </div>

            </>
        );
    }
}

export default CombinedWidget;
