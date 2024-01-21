function roadRadar(speed, area){
    let speedLimit = 0;
    let status = '';
    let difference = 0;

    if(area == 'city'){
        speedLimit = 50;
    } else if (area == 'motorway'){
        speedLimit = 130
    } else if (area == 'interstate'){
        speedLimit = 90;
    } else {
        speedLimit = 20
    }

 
if(speed <= speedLimit){
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
} else {
    difference = speed - speedLimit;
    if(difference <= 20){
        status = 'speeding';
    } else if (difference <= 40){
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}` );
}
}
roadRadar(40, 'city');
roadRadar(21, 'residential' );
roadRadar(120, 'interstate' );
roadRadar(200, 'motorway');


// For anything else, status should be reckless driving. 


