import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation'
import Map from '../../components/geojsonmap';

export default function mapWrapper(param: string) {
    const searchParams = useSearchParams();
    const packageName = searchParams.get("packageName");
    const position = searchParams.get("position");
    const MapWithNoSSR = dynamic(() => import("../../components/geojsonmap"), {
        ssr: false
      })

      return <MapWithNoSSR packageName={packageName} position={position} />
  }