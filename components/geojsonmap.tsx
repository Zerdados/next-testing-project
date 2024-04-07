import { MapContainer, TileLayer,Marker,Popup, GeoJSON, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { getJsonData } from '../backend/import-json';

const Map = ({packageName, position}) => {
    var myStyle = {
      "color": "#ff7800",
      "weight": 5,
      "opacity": 1
    };
    const setColor = ({ properties }) => {
      return myStyle;
    };
    var data = getJsonData(packageName, position);
    var dataAsFeatureCollection = data as GeoJSON.FeatureCollection<any>;
    
    return (
      <MapContainer center={[49.013677698392264,8.404375426378891]} zoom={13.5} scrollWheelZoom={false} style={{height: "500px", width: "500px"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker 
        position={[49.013677698392264,8.404375426378891]}
        draggable={true}
        >
          <Popup>
            {packageName}
          </Popup>
        </Marker>
        {dataAsFeatureCollection && (
        <GeoJSON
          data={dataAsFeatureCollection}
        />
        )}
      </MapContainer>
    )
  }
  
  export default Map