function sameNumbers(num){
let sum = 0;
let number = num.toString();
let isNotSame = 0;


for(let element = 0; element < number.length; element++){
      let digit = Number(number[element]);
      sum += digit;
      if(digit == number[element + 1] || digit == number[element - 1]){
        isSame = true;
      } else {
isNotSame++;
      }
}
if(isNotSame > 0){
    console.log('false');
    console.log(sum);
} else {
    console.log('true');
    console.log(sum);
}

}
sameNumbers(2222222);
sameNumbers(1234)