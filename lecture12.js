/**
 * @title : Compose Functions
 */

// Understand Compose

const add10 = (n) => n + 10;
const multiply3 = (n) => n * 3;
const div2 = (n) => n / 2;

const n = 5;
const x = div2(multiply3(add10(n)));
console.log(x);


// Pipe Function  - shortest Way

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), n);

 const r1 = pipe(add10, multiply3, div2)(n);
 console.log(r1);

// Compose Function  - Long Way

const compose = (...fns)=>{
    return x =>{
      return  fns.reduce((v, f)=>f(v), x)
    }
}

const r2 = compose(add10, multiply3, div2)(n)
console.log(r2);