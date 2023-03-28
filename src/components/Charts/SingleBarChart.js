import React from "react";
import { Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend  
)

function SingleBarChart() {
    const data ={
        labels: ['', '', '', '', '2014', '', '', ''],
        datasets: [
            {
                label: 'Undefined',
                title: 'Frontline',
                data: [,,,,20,,,],
                backgroundColor:'#102060',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const options = {

    }
  return (
    <div className="">
        <Bar
        data = {data}
        options = {options}
        />
    </div>
  );
}

export default SingleBarChart;