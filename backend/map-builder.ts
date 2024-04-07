import L from 'leaflet';
import * as cultureData from '../data/kultur.json';
import * as bikeData from '../data/bikenet.json';

export default function getMap() {
    var map = L.map('map').setView([49.013677698392264,8.404375426378891], 13.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var cultureDataAsFeatureCollection = cultureData as GeoJSON.FeatureCollection<any>;
    var bikeDataAsFeatureCollection = bikeData as GeoJSON.FeatureCollection<any>;

  L.geoJSON(cultureDataAsFeatureCollection).addTo(map);
  L.geoJSON(bikeDataAsFeatureCollection).addTo(map);
  return map;
}