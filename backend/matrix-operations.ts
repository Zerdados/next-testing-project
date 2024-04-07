export function getXLabelsFromMatrix(matrix: string[][], xRows: string) {
    if(xRows == null || matrix == null) return null;
    if(matrix.length < 2) return null;
    let positions: string[] = xRows.split("-");
    let init = positions[0] as unknown as number;
    let labels: string[] = matrix[init];
    for (let i = 1; i < positions.length; i++) {
        let index = positions[i] as unknown as number;
        console.log(index);
        for(let j = 0; j < labels.length; j++) {
            labels[j] += matrix[index][j]
        }
    }
    return labels;
}