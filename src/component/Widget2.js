import React, { Component } from 'react';
import Chart from "react-apexcharts";
import './style.css'

class Widget2 extends Component {


    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'donut'
                },
            },
            series: [44, 55, 41, 17, 15],
            labels: ['A', 'B', 'C', 'D', 'E']
        }
    }

    handleChange = (event, value) => {
        console.log(event.target.value)
        this.setState({ value: event.target.value })
        this.setState({
            options: {
                ...this.state.options,
                chart: { type: event.target.value }
            }
        })
    }

    render() {

        return (
            <>
                <div>
                <div>
                    <h1>Widget: {"2"}</h1>
                </div>
                <h1>Description : {"Chart (Donut/Pie)"}</h1>
                <hr />
                <div className="donut">

                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="donut">Donut</option>
                        <option value="pie">Pie</option>
                    </select>


                    <Chart options={this.state.options}
                        series={this.state.series}
                        type={this.state.options.chart.type}
                        width="380" />
                </div>
                </div>
            </>
        );
    }
}

export default Widget2;


