const ADULT_AGE=18;
var me={
    name:'Aldhair',
    lastname:'Vera Camacho',
    age:25,
    strength:50,
    magic:25
}

var other={
    name: '2pac ',
    lastname:'Shakur ',
    age: 17,
    strength:40,
    magic:30
}

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

// const meAdult = (object)=>{
//     return object.age>=ADULT_AGE;
// }

const meAdult = ({age})=>{
    return age>=ADULT_AGE;
}

console.log(meAdult(me));

// function Access(object){
//     if(!meAdult(object)){
//         document.write('Access Denied!');
//     }
//     else
//     {
//         document.write('Access Granted');
//     }
// }

const access=(object) => {
    if(!meAdult(object)){
        document.write('<br>');
        document.write('Access Denied!');
    }
    else
    {
        document.write('<br>');
        document.write('Access Granted');
    }
}
access(me);

access(other);

function Add(object)
{
    object.strength=object.strength+1;
    return object.strength;
}

function Take(object)
{
    object.strength=object.strength-1;
    return object.strength;
}

// for(var i=0;i<50;i++)
// {
//     var random=Math.random();
//     if(random<0.25)
//     {
//         console.log("Here");
//         document.write('<br>'+Add(me));
//     }
//     else if(random<0.5){
//         console.log("There");
//         document.write('<br>'+Take(me));
//     }
// }



var ntimes=0;
// while(me.strength<60){
//     ntimes++;
//     console.log(ntimes);
//     var random=Math.random();
//     if(random<0.25)
//     {
//         document.write('<br>'+Add(me));
//     }
//     else if(random<0.5){
//         document.write('<br>'+Take(me));
//     }
// }
var maxVal=prompt("How much strength you must have to pass the test?");
do{
    ntimes++;
    console.log(ntimes);
    var random=Math.random();
    if(random<0.25)
    {
        document.write('<br>'+Add(me));
    }
    else if(random<0.5){
        document.write('<br>'+Take(me));
    }
}while(me.strength<maxVal);
