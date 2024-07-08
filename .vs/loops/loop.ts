// question 1

console.log("hello, word");

// question2

let temperatue = 10;
if (temperatue <= 20) {
  console.log("temperatue cold");
} else {
  console.log("temperature hot");
}

// question no 4

let apple = 10;
let giveapple = 3;
let totalapple = apple - giveapple;
console.log("total apple", totalapple);

////////////////
function printtable(input: number) {
  for (let x = 1; x <= 10; x++)
    console.log(`${input}  *  ${x}   =   ${input * x}`);
}
printtable(5);

// question 4
let firstname: string = "ahmad";
let lastname: string = "aslam";
let fullname: string = firstname + " " + lastname;
console.log(fullname);

// question 5

if (5 > 3) {
  console.log("yes");
} else {
  console.log("no");
}

//question 7

for (let x = 1; x <= 50; x++)
  if (1 % 3 == 0) {
    console.log("fizz");
  } else if (1 % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }

//question 8

let temperaturefive = [7, 8, 9, 10, 5];
let tempe = 0;

for (let i = 0; i < temperaturefive.length; i++) {
  if ((temperaturefive[i] = tempe)) {
    tempe = temperaturefive[i];
  }
}
console.log(tempe);

//QUESTION NO9
let age: number = 44;

if (age >= 18) {
  console.log("you are adult");
} else {
  console.log("you are miner");
}

// question 10
let array = [1, -1, 8, -4, 5, -6, 5, 9, -7];
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    count++;
  }
}
console.log(count);

// question 11

// array
