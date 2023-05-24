
//!EXAMEN FINAL

//! 1.


//! 2.
let counter = 2;
let interval = setInterval(()=>{
    console.log(counter);
    if(counter-- <= 0) clearInterval(interval);
},1000);


//! 3.
let a = (n) => {
    return n > 2 ? n * a(n - 1) : 2
}
console.log(a(6));


//! 4.
let id = "100";
{
    let id = 200;
    id = id + 1;
    console.log(id);
}

//! 5.

let movie = {
    title: "aga",
    year: 2018
};


//*respuesta
movie.title = "Ága";
console.log(movie);

//! 6.

let a = 20 + "10";
let b = 20 + + "10";
let c = 20 + - "10" + "10";
let d = "10" - "10" + "100";
let e = "A" - "B" + 0xA;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);


//! 7.

let x = [10, 20, 30, 40];
let y = [50, 60];
x.reverse().push(y);
console.log(x.length);


//! 8.

let animals = ["canary", "dog", "cat"];
animals.push("hamster");
console.log(animals);


//! 9.

let winter = ["december", "january", "february"];
let index = winter.indexOf("february");

console.log(index);


//! 10.

let means = "plane"
let msg = `i do not like travelling by ${means}`

console.log(msg);

//! 11.

let colors = ['red', 'green', 'blue'];
for (let c of colors)
console.log(c);


//! 12.
let route = {distance: 131, elevation: 1.4};
for (let k in route )
console.log(k);


//! 13.

let sum = function (a, b){
    return (a+b);
}

console.log(sum(1,3));

//* respuesta
let suma = (a, b) => a+b
console.log(suma(1,3));


//! 14.



//! 15.



//! 16.

temp = [1,2,3,4]

let min = temp[0]  //*respuesta correcta

temp.forEach(e => min = min > e ? e : min);
console.log(min);

//! 17.

const a = "hello";
try{
    console.log(a.toUpperCase());
}
catch(error){
    console.log(a);
}
finally{
    console.log(a);
}


//! 18.

let counter = 0; //user visit counter  //*respuesta
let userName = "John";


//! 19.

let x = 3e-3;

console.log(x);


//! 20.


let power = (x, y) => x**y;  //*respuesta

function execute(todo, a, b){
    return todo(a, b);
}
console.log(execute(power, 3, 2));


//! 21.
let cmp = (a, b) => a-b
x = [40, 10, 30, 20, 50];
x.sort(cmp);

console.log(x);


//! 22.
let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);


//! 23.

console.log("http://somethingNew.org");


//! 24.

let x = false || true;
let y = "true" && "false";
let z = false && true;
console.log(`${x}, ${y}, ${z}`);

//! 25.

let test = prompt ("Run", "code");
console.log(test);


//! 26.

let mult = function (a, b){
    return a * b;
}

let x = mult(2)(10);  //error en el código
console.log(x); // -> 20


//! 27.   pregunta mal formulada

for(let a = 5; a>2; a--){
    console.log(a);
};


let counter = 0;


//! 28.


//! 29.

let a = true && 20;
let b = 0 || 20;
let c = 0 && 20;
console.log(`${a}, ${b}, ${c}`);

//! 30.

daysOfWeek.order(-1)
