import React, {useEffect} from 'react';
import * as d3 from "d3";
import './doughnut-chart.css'
import {dChart} from "./doughnut.d3";

export const DoughnutChart = ({data}) => {

  let doughnut = dChart()
        .width(700)
        .height(500)
        .transTime(750)
        .cornerRadius(7) // sets how rounded the corners are on each slice
        .padAngle(0.015) // effectively dictates the gap between slices
        .variable('accrualCnt')
        .category('createdGroup');

    useEffect(() => {

        d3.select('#chart')
            .datum(data)
            .call(doughnut);

        return () => {
            d3.select("#chart > *").remove();
        }
    }, data);
    return  (<div id="chart"> </div>);
};
