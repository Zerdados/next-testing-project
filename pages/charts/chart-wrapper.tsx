import dynamic from 'next/dynamic';
import customChart from '../../components/chart';
import createMap from '../../backend/import-csv';

export async function getStaticProps() {
    const map = createMap();
    let mapArray: Array<Array<string>>;
    mapArray = [Array.from(map.keys()), Array.from(map.values())]
    return {
      props: {
        mapArray,
      },
    };
  }

export default function chartWrapper({ mapArray }) {
    const Chart = customChart({mapArray});

      return <Chart />
  }