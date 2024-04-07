import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import customChart from '../components/chart';
import createMap from '../backend/import-csv';

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

export default function Page({ mapArray }) {
    const MapWithNoSSR = dynamic(() => import("../components/map"), {
        ssr: false
      })
    let Chart = customChart({mapArray});
    const searchParams = useSearchParams()
    const param = searchParams.get('param')
    
    return ( 
      <main>
        <div> Lorem ipsum dolor sit amet, {param} adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
        <div> <MapWithNoSSR /> </div>
        <div> {mapArray} </div>
        <div> <Chart /> </div>
      </main>
    );
  }