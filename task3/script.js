let numNumbers = [-14, 15, 82,-3, -5,235, 672, 23];




function minNumber(x) {
    return Math.min.apply(Math, x)
};
function maxNumber(y) {
    return Math.max.apply(Math, y)
};


console.log(minNumber(numNumbers));
console.log(maxNumber(numNumbers));
