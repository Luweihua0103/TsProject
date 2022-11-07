class User {
  readonly id:number   //不能改变
  name:string
  age:number
  gender:"男" | "女" = "男"
  pid?:string

  private publishNumber:number = 3;
  private curNumber:number = 0;


  constructor(name:string,age:number){
    this.id = Math.random()
    this.name = name
    this.age = age
  }

  publish(title:string){
    if(this.curNumber < this.publishNumber){
      console.log("发布文章"+title)
      this.curNumber++
    }
    else{
      console.log("今日已达上限")
    }
  }
}


let user =  new User("aa",2);

u.gender = "女"
