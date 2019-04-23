import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import './doughnut-chart.css'
import {dChart} from './doughnut.d3'

export function DoughnutChart({data, width, height, transTime, cornerRadius, padAngle, variable, category}) {
  useEffect(() => {
    let doughnut = dChart()
      .data(data)
      .width(width || 700)
      .height(height || 500)
      .transTime(transTime || 750)
      .cornerRadius(cornerRadius || 7) // sets how rounded the corners are on each slice
      .padAngle(padAngle || 0.015) // effectively dictates the gap between slices
      .variable(variable || 'accrualCnt')
      .category(category || 'createdGroup')

    d3.select('#chart')
      .call(doughnut)

    return () => {
      d3.select('#chart > *').remove()
    }
  }, data)

  return (<div id='chart' />)
}

DoughnutChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  transTime: PropTypes.number,
  cornerRadius: PropTypes.number,
  padAngle: PropTypes.number,
  variable: PropTypes.string,
  category: PropTypes.string
}
