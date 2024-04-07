import { parse } from "csv-parse/sync";
import useSWR from "swr";

const fetcher = (args) => fetch(args).then((res) => res.text());

export function getCSVData(packageId: string, resourceId: string) {
    let matrix: string[][] = [["empty"]];

    const { data, error } = useSWR(
        'https://transparenz.karlsruhe.de/dataset/' + packageId + '/resource/' + resourceId + '/download',
        fetcher)
    if (error) return matrix;
    if (!data) return matrix;

    matrix = parse(data, {bom: true});
    matrix = matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
    return matrix;
}