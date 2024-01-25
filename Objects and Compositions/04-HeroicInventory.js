function inventory(input) {
    let result = [];

    for (let elements of input) {
        let [name, level, items] = elements.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({ name, level, items });

    }
    console.log(JSON.stringify(result));
}
inventory([
    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']);
 inventory(['Jake / 1000 / Gauss, HolidayGrenade']);
