function solve(matrices) {

    let initialSum = matrices[0].reduce((a, b) => a + b);

    for(let i = 0; i < matrices.length; i++) {
        let row = 0;
        let col = 0;

        for(let j = 0; j < matrices.length; j++) {
            row += matrices[i][j];
            col += matrices[j][i];
        }

        if (initialSum !== row && initialSum !== col) {
            return 'false';
        }
    }

    return 'true';
}
//solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
//solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);