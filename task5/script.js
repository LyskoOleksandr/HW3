const button = document.getElementById('button');
const input = document.getElementById('input');
const result1 = document.getElementsByClassName('result1');
const result2 = document.getElementsByClassName('result2');
const result3 = document.getElementsByClassName('result3');
const result4 = document.getElementsByClassName('result4');
let inputList = [];

button.addEventListener('click', function intoArray(){
    inputList = input.value.split(',');
    console.log(inputList);
})
