var me={
    name:'Aldhair',
    lastname:'Vera Camacho',
    age:25
}

const ADULT_AGE=18;

function isAdult(object){
    if(object.age>=ADULT_AGE)
        document.write(object.name + ' Adult');
    else
        document.write(object.name + ' is not an Adult');
}

isAdult(me);

// var meAdult=function(object){
//     return object.age>=ADULT_AGE;
// }
const meAdult = (object)=>{
    return object.age>=ADULT_AGE;
}

console.log(meAdult(me));