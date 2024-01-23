function rotateArray(arr, rotation){
    let element = '';

    for(let i = 0; i < rotation; i++) {
        element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
}
rotateArray(['1',

'2',

'3',

'4'],

2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
