function sortingNumbers(numbers){

    numbers.sort((a, b) => a - b);
    let result = [];

    for (let i = 0, j = numbers.length - 1; i <= j; i++, j--){
        if (i === j) {
            result.push(numbers[i]);
            break;
    }
    result.push(numbers[i]);
    result.push(numbers[j])

}
return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
