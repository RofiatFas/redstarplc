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

function BarChart() {
    const data ={
        labels: ['#10', '#20', '#30', '#40', '#50', '#60', '#70', '#80'],
        datasets: [
            {
                label: '',
                title: 'Frontline',
                data: [2,4,5,9,4,2.9,3,2],
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

export default BarChart;