// function take<T>(arr: T[], n: number): T[] {
//   if (n >= arr.length) {
//     return arr;
//   }
//   const newArr: T[] = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[i])
//   }
//   return newArr;
// }



// const newArr = take<number>([1, 2, 1, 212], 2);

// console.log(newArr);


//回调函数：判断数组中的某一项是否满足条件
// // type callback<T> = (n: T, i: number) => boolean;
// interface callback<T>{
//   (n:T,i:number):boolean
// }

// function filter<T>(arr: T[], callback: callback<T>): T[] {
//   const newArr: T[] = [];
//   arr.forEach((n,i)=>{
//     if(callback(n,i)){
//       newArr.push(n);
//     }
//   })
//   return newArr;
// }

// const arr = [3,4,5,6,7,8];

// console.log(filter(arr,n=>n%2!==0));

// import { ArrayHelper } from "./ArrayHelper";

// const helper = new ArrayHelper([2,3,4,5,]);
// helper.take();
// helper.shuffer();



interface hasNameProperty {
  name: string
}

/**
 * 将某个对象的name属性的每个单词的首字母大写，然后将该对象返回
 * @param obj 
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
  obj.name = obj.name
                  .split(" ")
                  .map(s => s[0].toUpperCase() + s.substr(1))
                  .join(" ");
  return obj; 
}

// const o = {
//   name:"kevin yuan",
//   age:22,
//   gender:"男"
// }

// nameToUpperCase(o);


function mixinArray<T,K>(arr1:T[],arr2:K[]):(T | K)[]{
  if(arr1.length != arr2.length){
    throw new Error("两个数组长度不相等")
  }
  let result:(T | K)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

