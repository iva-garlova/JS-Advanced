function solve(args) {

    let initialSum = args[0].reduce((a, b) => a + b);

    for(let i = 0; i < args.length; i++) {
        let rowSum = 0;
        let colSum = 0;

        for(let j = 0; j < args.length; j++) {
            rowSum += args[i][j];
            colSum += args[j][i];
        }

        if (initialSum !== rowSum && initialSum !== colSum) {
            console.log('false');
        }
    }

    console.log('true');
}
//solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
//solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);