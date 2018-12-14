const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
//    C = [2,    9, 2, 5,       7, 10];
const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

const D = [1, 2, 2, 2, 2, 1, 1, 1, 10, 1, 7, 10, 10];
//    F = [2, 2, 2, 2,                    7];
const E = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10, 3, 10, 6, 6];

const G = [2, 1, 34, 2, 74564, 532, 23453, 23234, 82746593];
//    I = [2,        2,        532, 23453, 23234]
const H = [2, 1, 34, 4, 34, 10, 26, 34, 1, 74564, 12340, 74564, 10, 82746593, 82746593];

const isPrime = num => {                  // Function return true or false - when num is prime or not.
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1 && num !== 0;
}

const occurencesOfNumbers = B => {        // Function fills the object with occurrences of numbers.
  let howManyTimes = {};
  B.forEach(x => {
    howManyTimes[x] = (howManyTimes[x] || 0) + 1;
  });
  return howManyTimes;
}

let primeNumbers = [];
const primeNumbersArr = howManyTimes => { // Function places prime numbers in the array.
  for (let i in howManyTimes) {
    let prime = isPrime(howManyTimes[i]);
    if (prime) primeNumbers.push(parseFloat(i));
  }
}

const createC = A => A.filter((value) => !primeNumbers.includes(value))

const comparedArrays = (A, B) => {
  const howManyTimes = occurencesOfNumbers(B);
  primeNumbersArr(howManyTimes);
  return createC(A);
}


const C = comparedArrays(A, B);



console.log(`Task:
Write a function that receives two sequences: A and B of integers and returns one sequence C. Sequence C should contain all elements from sequence A (maintaining the order) except those, that are present in sequence B p times, where p is a prime number. 

***

Included examples:

 (A, B)
        A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
Result: C = [2,    9, 2, 5,       7, 10];
        B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];


 (D, E)
        D = [1, 2, 2, 2, 2, 1, 1, 1, 10, 1, 7, 10, 10];
Result: F = [2, 2, 2, 2,                    7        ];
        E = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10, 3, 10, 6, 6];


 (G, H)
        G = [2, 1, 34, 2, 74564, 532, 23453, 23234, 82746593];
Result: I = [2,        2,        532, 23453, 23234          ];
        H = [2, 1, 34, 4, 34, 10, 26, 34, 1, 74564, 12340, 74564, 10, 82746593, 82746593];




comparedArrays(A, B) <= START
`);