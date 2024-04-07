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
import { getCSVData } from '../backend/import-csv-parametrized';
import { getXLabelsFromMatrix } from '../backend/matrix-operations';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export default function paramChart(packageId, resourceId, xRows, yRow){
    let y = yRow as number;
    let matrix = getCSVData(packageId, resourceId);
    let labels = getXLabelsFromMatrix(matrix, xRows);
    const data = {
      labels,
      datasets: [
        {
          label: 'Data',
          data: matrix[y],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return () => <Bar data={data} />;
} 