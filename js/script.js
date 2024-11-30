'use strict';

/*
n = 5
n * (n-1) * (n-2) * ... * 1
5 * 4 * 3 * 2 * 1

!5
5 * !4
4 * !3
3 * !2
2 * !1
1 * !0

!5 
step 1: 5 * !4
step 2: 5 * 4 * !3
step 3: 5 * 4 * 3 * !2
step 4: 5 * 4 * 3 * 2 * !1
step 5: 5 * 4 * 3 * 2 * 1 * !0
step 6: 5 * 4 * 3 * 2 * 1 * 1
*/

/*
const calcFactorial = num => {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
};
*/

/*
const calcFactorial = num => {
  if (num === 0) return 1;

  return num * calcFactorial(num - 1);
};

console.log(calcFactorial(5));
*/

/* 
// Call stack
function one() {
  tow();
  console.log('one');
}

function tow() {
  three();
  console.log('three');
}

function three() {
  console.trace('call stack');
}

one();
*/

/*
// Date
const now = new Date();

console.log(now);
console.log(now.getHours());
console.log(now.getFullYear());
console.log(now.getDate());

//

console.log(now.toISOString());

const iso = now.toISOString();

console.log(new Date(iso));

// formatting Date
const formattedDate = new Intl.DateTimeFormat('fa-IR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
});

console.log(formattedDate.format(now));

// get browser/user locale
console.log(navigator.language);
*/

// localStorage
const user = {
  name: 'Ali',
  age: 20,
};

localStorage.setItem('user', JSON.stringify(user));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('user')));

// localStorage.removeItem('name');
console.log(localStorage.getItem('name'));
