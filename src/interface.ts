

interface User {
  name: string
  age: number
  sayHello(): void
}

let u: User = {
  name: "张三",
  age: 12,
  sayHello() { console.log("hello") }
}




type Condition = (n: number) => boolean

function sum(numbers: number[], callBack: Condition) {
  let s = 0;
  numbers.forEach(n => {
    if (callBack(n)) {
      s += n;
    }
  });

  return s;
}

const result = sum([3, 4, 5, 6, 7], n => n % 2 !== 0)

console.log(result); 


// interface Condition{
//   (n:number) :boolean
// }

// function sum(numbers:number[],callBack:Condition){
//   let s = 0;
//   numbers.forEach(n=>{
//     if(callBack(n)){
//       s += n;
//     }
//   })
//   return s;
// }

//  const res = sum([1,2,2,3,4], n=> n % 2 !== 0);

//  console.log(res);


interface A {
  T1:string
}

// interface B extends A{
//   T2:number
// }

// let a:B={
//   T1:"1",
//   T2:1
// }

// console.log(a)


interface B{
  T2:string
}

interface C extends B,A{
    T3:number
}

let s:C = {
  T3:1,
  T2:'1',
  T1:"2"
}




type D = {
  T1:string
}

type E = {
  T2:number
}

type F = {
  T3:boolean
} & D & E


let b:F = {
  T1:"1",
  T2:1,
  T3:true
}



// interface Users{
//   readonly id:string
//   name:string
//   age:number
// }

// let us:Users = {
//   id:"1",
//   name:"zhan",
//   age:1
// }

// us.id = 2


interface Duck{
  sound:'嘎嘎嘎',
  swin():void
}

let person = {
  name:"asdsada",
  age:11,
  sound:"gagagga" as "嘎嘎嘎",
  swin(){
    console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音")
  }
}

let duck:Duck = person;