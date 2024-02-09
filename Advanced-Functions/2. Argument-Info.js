function args(...arg){
let result = {};

for (let element of arg){
    let type = typeof(element);
    console.log(`${type}: ${element}`);

    if(!result.hasOwnProperty(type)){
        result[type] = 0;
    }
    result[type] += 1
}
let sortetRes = Object.entries(result).sort((a, b) => b[1] - a[1]);

for(let [key, value] of sortetRes){
    console.log(`${key} = ${value}`);
}
}
args('cat', 42, function () { console.log('Hello world!'); })