import fs from 'fs';
import { CastingContext, parse } from 'csv-parse/sync';
import { mapKey } from './type-declarations';

type age = {
  district: string;
  year: string;
  persons: string;
};

type playground = {
  district: string;
  year: string;
  playgrounds: string;
}

export default function createMap() {
  let ageArray: age[] = loadAgeArray();
  let playArray: playground[] = loadPlaygrounds();
  let ageMap = new Map<string, number>();
  let playMap = new Map<string, number>();
  let combinedMap = new Map<string, string>();
  for(var ageEntry of ageArray) {
    let newKey: string = ageEntry.district+ageEntry.year;
    ageMap.set(newKey, +ageEntry.persons);
  }
  for(var playEntry of playArray) {
    let newKey: string = playEntry.district+playEntry.year;
    playMap.set(newKey, +playEntry.playgrounds);
  }
  for(var mapEntry of Array.from(ageMap.entries())) {
    let playMapEntry = playMap.get(mapEntry[0]);
    if(playMapEntry != null){
      combinedMap.set(mapEntry[0], ""+mapEntry[1]/playMapEntry);
    }
  }
  return combinedMap;
}


function loadAgeArray() {
    const file = fs.readFileSync('data/age.csv', 'utf8');
    const records = parse(file, {bom: true, 
      on_record: convertToAge});
    return records;
}

function loadPlaygrounds() {
  const file = fs.readFileSync('data/playgrounds.csv', 'utf8');
  const records = parse(file, {bom: true, 
    on_record: convertToPlayground});
  return records;
}

function convertToPlayground(record, context: CastingContext){
  if(record === undefined){
    return null;
  }
  if(Array.isArray(record)){
    let array = record as string[];
    let converted: playground = {
      district: array[0],
      year: array[1],
      playgrounds: array[2]
    } 
    return converted;

  }
}

function convertToAge(record, context: CastingContext){
  if(record === undefined){
    return null;
  }
  if(Array.isArray(record)){
    let array = record as string[];
    let converted: age = {
      district: array[0],
      year: array[1],
      persons: array[2]
    } 
    return converted;
  }
}