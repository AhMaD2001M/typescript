let x = 2;
let y = 5;

let add = x + y;
console.log(add);
console.log("add value ", add);

function ahmad() {
  console.log("222 shmsd");
}

ahmad();

// array
const abc = ["ahmad aslam", " raza ", " badsha"];
abc.push("razaaa");
console.log(abc);

console.log(abc.length);
abc.pop(2);
console.log(abc);

abc.unshift("mangoo");
console.log(abc);
abc.shift();
console.log(abc);

abc.splice(1, 0, "oraNGE", "YELLOW", "kursheed");
console.log(abc);
// SPLICE IS USE FOR DELETE AND , ADD

// FIRST SHOW INDEX
// 2ND SHOW NUMBERS OF DELETE
// ON 3RD OR ON WORD WE USE FOR ADDITION.

//SLICE

const returnarray = abc.slice(1, 3);

console.log(returnarray);

console.log(abc);

console.log("loops ");
