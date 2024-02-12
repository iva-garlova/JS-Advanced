function functionalSum(internal = 0) {
    let sum = internal;

    function add(num) {
        sum += num;
        return add;
    }

    add.valueOf = function() {
        return sum;
    };

    return add;
}