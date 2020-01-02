import React, { Component } from "react";
import Chart from "react-apexcharts";
import './style.css'
class Widget1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'line'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
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
                    <h1>Widget: {"1"}</h1>
                </div>
                <h1>Description : {"Chart (Line/Bar/Area)"}</h1>
                
                <hr />
                <div className="app">
                    <div className="row">
                        <div className="mixed-chart">
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="line" >Line</option>
                                <option value="bar">Bar</option>
                                <option value="area">Area</option>
                            </select>

                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type={this.state.options.chart.type}
                                width="500"
                            />

                        </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default Widget1;
