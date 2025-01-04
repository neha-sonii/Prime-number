const findPrime = document.getElementById('findPrime');
const clear = document.getElementById('clear');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

submit.addEventListener('click', () => {
    let number = findPrime.value;
    let finalResult = checkPrime(number);

    if (finalResult) {
        result.innerHTML = number + " is a prime number";
    } else {
       result.innerHTML = number + " is not a prime number";
    }

});
clear.addEventListener('click',  clearAll);


function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
  

}

function clearAll() {
    findPrime.value = "";
    result.innerHTML = "Result";
}