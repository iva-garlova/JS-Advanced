function addAndRemoveElements(arr){
    let resultArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'add'){
            resultArr[i] = i + 1;
        } else{
resultArr.pop()
        }
    }
    if(resultArr.length <= 0){
        console.log('Empty');
    } 
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] === undefined || resultArr[i] == '') {
        } else {
            console.log(resultArr[i]);
        }
    }

}
addAndRemoveElements(['add',

'add',

'add',

'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);