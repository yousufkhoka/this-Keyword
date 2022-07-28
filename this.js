
// implicet binding

// const sakib = {
//     name:'sakib',
//     age:35,
//     fullName: function(){
//         console.log(this.name)
//     }
// }
// sakib.fullName()

// function playerNameFunction(obj){
//     obj.playerName = function(){
//             console.log(this.name)
//     }
// }

// const sakib = {
//     name:'sakib',
//     age:35,
//     father:'lalala',
// }
// const tamim = {
//     name:'tamim',
//     age:35,
//     father:'lalala',
// }

// playerNameFunction(sakib)
// playerNameFunction(tamim)
// sakib.playerName()
// tamim.playerName()



// const parson = function(name,age){
//     return {
//         name: name,
//         age: age,
//         paintName:function(){
//             console.log(this.name)
//         },
//         father:{
//            name: 'Mr. lalala',
//            age:60,
//            paintName:function(){
//             console.log(this.name)
//            }
//         }
//     }
// }

// const sakib = parson('sakib', 35)
// const tamim = parson('tamim', 35)
// sakib.paintName()
// sakib.father.paintName()
// tamim.paintName()


const paintName = function(){
    console.log(`${this.name} is a ${v}`)
}
const sakib = {
    name:'sakib',
    age:35,
}
const v1 = 'all'
const v2 = 'raounder'
const v = [v1,v2]
paintName.apply(sakib, v)
paintName.call(sakib, v)
const paintNameBind = paintName.bind(sakib)
paintNameBind()
