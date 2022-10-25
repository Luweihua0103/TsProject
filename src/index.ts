
// let a:string;

import { type } from "os";

// a = "1231"


// function sum(a:number, b:number):number {
//   return a + b;
// }

// let num:number = sum(3,4);


// let phone:string = "13312341231";


// function isOdd(n: number): boolean {
//   return n % 2 === 0;
// }

// let nums:number[] = [3,4,5];

// let nums:Array<number> = [1,2,3]

// function printValues(obj:object){
//   const vals = Object.values(obj);
//   vals.forEach(t=>{
//     console.log(t)
//   })
// }

// printValues({
//   name:"adfaa",
//   age:12,
// })


// let n:string = null;
// let m:number = undefined;


// //联合类型
// let name:string | undefined;

// if(typeof(name)==='string'){
//   //类型保护
//   // name.indexOf
// }


// 类型别名

// type Gender = "男" | "女";
// type User = {
//   name:string
//   age:number
//   gender:Gender
// }

// let u:User;

// u = {
//   name:"张三",
//   age:12,
//   gender:"男"
// }

// function getUsers(g:Gender):User[]{
//   return [];
// }

// getUsers("女");



// // 函数重载
// /**
//  * 得到a*b的结果
//  * @param a 
//  * @param b 
//  */
// function combine(a:number,b:number):number;

// /**
//  * 得到a和b拼接的结果
//  * @param a 
//  * @param b 
//  */
// function combine(a:string,b:string):string;
// function combine(a:number|string,b:number|string):number|string{
//   if(typeof a === "number" && typeof b === "number"){
//     return a*b
//   }
//   else if(typeof a === "string" && typeof b === "string"){
//     return a+b
//   }

//   throw new Error("a和b必须是相同类型")
// }

// const result = combine(1,3);


// 可选参数

// function sum(a: number, b: number, c?: number) {
//   if (c) {
//     return a + b + c;
//   }
//   return a + b;
// }

// function sum1(a: number, b: number, c: number = 0) {
//   if (c) {
//     return a + b + c;
//   }
//   return a + b;
// }

// sum(1, 2);

// sum(2, 3, 4);


// sum1(1, 2);

// sum1(2, 3, 4);