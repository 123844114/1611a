// import obj, {Person,obj as yiming,demo} from './js/a'
// import obj,{obj as obj3,obj2} from './js/b.js'
//创建对象
// console.log(Person)
// console.log(obj)
// let obj={name:'zs',age:10}
// let p = new Person()
// console.log(yiming)
// p.say('studying')
import './css/style'
import '@css/style'
import data from './data/city'
console.log(data) 
//引入axios模块
import $ajax from 'axios'

// console.log('axios',$ajax)
$ajax.get('/api/user')