import data from '../data/districts.json';
import useSWR from 'swr';
import { PackageRes, Result } from './type-declarations';

const fetcher = (args) => fetch(args).then((res) => res.json());

export function getJsonData(packageName: string, position) {
    let ids: string[] = getIds(packageName, position);
    const { data, error } = useSWR(
        'https://transparenz.karlsruhe.de/dataset/' + ids[0] + '/resource/' + ids[1] + '/download', 
        fetcher)
    
    if (error) return null;
    if (!data) return null;
    return data;
}

function getIds(packageName: string, position) {
    let ids: string[] = ["empty", "empty"];
    const { data, error } = useSWR(
        'https://transparenz.karlsruhe.de/api/action/package_show?id=' + packageName, 
        fetcher)
    if (error) return ids;
    if (!data) return ids;

    let dataAsPackageResult = data as PackageRes;
    console.log(data);
    if(!dataAsPackageResult.success) return ids;
    ids[0] = dataAsPackageResult.result.id;
    ids[1] = getResourceIdForPosition(data.result, position);

    return ids;
}

function getResourceIdForPosition(res: Result, position: number){
    for(var resource of res.resources){
        if(resource.position == position){
            return resource.id;
        }
    }
    return null;
}