import dynamic from 'next/dynamic';
import Map from '../../components/map';

export default function mapWrapper(param: string) {
    const MapWithNoSSR = dynamic(() => import("../../components/map"), {
        ssr: false
      })

      return <MapWithNoSSR />
  }