function fruit(fruitType, weightInGrams, pricePerKg){
    let weightInKg = weightInGrams / 1000;
    let moneyNeeded = (pricePerKg * weightInKg).toFixed(2);

    console.log(`I need $${moneyNeeded} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);

}
fruit('orange', 2500, 1.80 );
fruit('apple', 1563, 2.35)