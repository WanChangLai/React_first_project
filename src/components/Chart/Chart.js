import React from 'react';
import'./Chart.css'

import ChartBar from './ChartBar';

const Chart = () => {
    <div className='chart'>
      {props.dataPoints.map(dataPoint=>
        <ChartBar 
          key={dataPoint.key}
          value={dataPoint.value} 
          maxValue={null} 
          label={dataPoint.label} />)}
    </div>
};


export default Chart;