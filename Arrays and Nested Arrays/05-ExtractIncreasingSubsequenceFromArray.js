function extract(arr) {
    let biggestNum = arr[0];
    let list = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            biggestNum = arr[i];
            list.push(biggestNum);

        }

    }
    return list;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);