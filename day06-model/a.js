export class Person{
    constructor(obj){
        this.name=obj.name
        this.age=obj.age
    }
    say(doSomething){
        console.log(`我是${this.name},我在${doSomething}`)
    }
}