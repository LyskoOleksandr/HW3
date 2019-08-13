const age = 21;
let sumList = [];

for (let counter = 0; counter<1000; counter++) {
    if (counter % age === 0 && counter > 0) {
        sumList.push(counter);
    }
}
let sumResult = sumList.reduce((sum, current) => sum + current, 0);
console.log(sumList);
console.log(sumResult);
