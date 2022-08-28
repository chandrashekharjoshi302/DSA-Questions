

// let str = "madam";
// let k = 10;


// a:10
// b:11
// c:12
// d:13
// e:14
// f:
// g
// h
// i
// j


// madam
// 21+10+13+10+21 = 75



let alpha = "abcdefghijklmnopqrstuvwxyz";
let diary = {};
let str = "madam";
let k = 10;

// Created Alphabets Mapping
for(let i=0; i<alpha.length; i++)
{
  let char = alpha[i];
  diary[char] = k;
  k=k+1;
}


// Calculated sum
let sum=0;
for(let i=0; i<str.length; i++)
{
  let char = str[i];
  sum = sum + diary[char];
}

console.log(sum);