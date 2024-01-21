function cookingByNumbers(numAsStr, act1, act2, act3, act4, act5){
    let num = Number(numAsStr);
    let action = [act1, act2, act3, act4, act5];
    for(let i = 0; i < action.length; i++){
        switch(action[i]){
            case "chop" : num /= 2; break;
            case "dice" : num = Math.sqrt(num); break;
            case "spice" : num += 1; break;
            case "bake" : num *= 3; break;
            case "fillet" : num -= num * 0.20; break;
        }
        console.log(num);
    }
 
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop' );
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');