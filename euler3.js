/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
function largestPrimeFactor(num){
  var factors = [];
  var d = 2;
  while (num > 1){
    while (num % d==0){
      factors.push(d);
      num = divide(num, d);
    }
    d = d + 1;
    if (d*d>num){
      if (num > 1 && (factors.indexOf(num)==-1)){
        factors.push(num);
      }
    }
  }
  return factors.pop();
}

function divide(x, y){
  return x / y;
}
