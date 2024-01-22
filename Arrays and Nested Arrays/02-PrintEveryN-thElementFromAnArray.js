function everyNthElement(arr, step){
    let myArr = []
    for(let i = 0; i < arr.length; i+= step) {
    
     myArr.push(arr[i]);
       
    }
    return myArr;

}
everyNthElement(['5',

'20',

'31',

'4',

'20'],

2);
everyNthElement(['dsa', 'asd', 'test', 'tset'], 2);
everyNthElement(['1', '2', '3', '4', '5'], 6);