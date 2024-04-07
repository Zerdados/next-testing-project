import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { mapKey } from '../backend/type-declarations';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
  
export default function customChart({ mapArray }){
    let array1 = mapArray as Array<Array<string>>;
    const labels = array1[0];
    const data = {
      labels,
      datasets: [
        {
          label: 'Data',
          data: array1[1],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return () => <Bar data={data} />;
} 