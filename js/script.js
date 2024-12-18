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

/*
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
*/

/*
// geo location
navigator.geolocation.getCurrentPosition(function (position) {
  const { latitude: lat, longitude: lng } = position.coords;

  console.log(position);

  console.log(`https://www.google.com/maps/@${lat},${lng},14.85z`);
});

//https://www.google.com/maps/@4.4138704,32.6589165,2.71z
*/

/*
// scroll
document.addEventListener('click', function () {
  //   console.log('x', window.pageXOffset);
  //   console.log('y', window.pageYOffset);

  window.scroll({
    top: 600,
    left: 0,
    behavior: 'smooth',
  });
});
*/

const content7 = document.querySelector('.content-7');
const content9 = document.querySelector('.content-9');

const observer = new IntersectionObserver(function (entries, observer) {
  console.log(entries);
  //   console.log(entry.isIntersecting);

  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

observer.observe(content7);
observer.observe(content9);
