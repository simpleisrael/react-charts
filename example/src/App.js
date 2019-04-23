import React, { Component } from 'react'

import {DoughnutChart} from 'react-charts'

const chartDemoData = [
  {'createdGroup': 'Alliance', 'accrualCnt': 55},
  {'createdGroup': 'Swog', 'accrualCnt': 22},
  {'createdGroup': 'CEPT', 'accrualCnt': 91}
];

export default class App extends Component {
  render () {
    return (
      <div>
        <DoughnutChart data={chartDemoData} />
      </div>
    )
  }
}
