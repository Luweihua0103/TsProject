function take<T>(arr:T[],n:number):T[]{
  if(n >= arr.length){
    return arr;
  }
  const newArr:T[] = [];
  for (let i = 0; i < n; i++) {
      newArr.push(arr[i])
  }
  return newArr;
}

const newArr = take<number>([1,2,1,212],2);

console.log(newArr);