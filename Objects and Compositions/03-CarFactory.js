function carFactory(order) {
    let finalProduct = {
         model: order.model,
        engine: null,
        color: null, 
        carriage: null,
        wheels: null}

        let engineType = {
         'SmallEngine': { power: 90, volume: 1800 },

        'NormalEngine' : { power: 120, volume: 2400 },
        
        'MonstarEngine': { power: 200, volume: 3500 }
        }

        if(order.power <= 90){
finalProduct.engine = engineType['SmallEngine'];
        } else if ( order.power <= 120){
            finalProduct.engine = engineType['NormalEngine']
        } else {
            finalProduct.engine = engineType['MonstarEngine']
        }

        if(order.carriage == 'hatchback'){
            finalProduct.carriage = { type: 'hatchback', color: order.color }
        } else {
            finalProduct.carriage = { type: 'coupe', color: order.color }
        }

        let wheelsize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
        finalProduct.wheels = new Array(4).fill(wheelsize);
        
        return finalProduct;
}
carFactory({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
})
// carFactory({
//     model: 'Opel Vectra',

//     power: 110,

//     color: 'grey',

//     carriage: 'coupe',

//     wheelsize: 17
// });