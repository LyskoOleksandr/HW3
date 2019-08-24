const button = document.getElementById('button');
const input = document.getElementById('input');
const minNum = document.getElementById('result1');
const sequentalNum = document.getElementById('result2');
const evenNum = document.getElementById('result3');
const negativeNum = document.getElementById('result4');
let inputList = [];



function minNumber(x) {
    return Math.min.apply(Math, x);
}

function maxSequentNumber (arr) {
    let max = arr[0];
    let index = 0;
    arr.forEach (function (item, i){
        if(item > max){
            max = item;
            index = i + 1;
        }
    })
    return index;
}
 

function allEvenNums (arr) {
    let evenList = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            evenList.push(arr[i])
        }
    }
    return evenList.length;
}



function filtInput (arr) {
    let minusnumbers = [];
    minusnumbers = arr.filter(item => item < 0);
    return minusnumbers.length;
}




button.addEventListener('click', function intoArray(){ 
    inputList = input.value.split(',');
    console.log(inputList);
    
    minNum.value = 'Minimal number -- ' + minNumber(inputList);
    sequentalNum.value = 'Sequental number of max -- ' + maxSequentNumber(inputList);
    evenNum.value = 'Even Numbers - ' + allEvenNums(inputList);
    negativeNum.value = 'Minus numbers - ' + filtInput(inputList);

})

