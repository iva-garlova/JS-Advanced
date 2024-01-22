function rotateArray(arr, rotation){
    let array = '';

    for(let i = 0; i < rotation; i++) {
        array = arr.pop();
        arr.unshift(array);
    }

    console.log(arr.join(' '));
}
rotateArray(['1',

'2',

'3',

'4'],

2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
