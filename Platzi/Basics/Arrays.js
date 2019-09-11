var me={
    name:'Aldhair ',
    lastname:'Vera Camacho ',
    ability: 'Guts',
    strength: 50,
    magic: 25
}

var she={
    name:'Nancy ',
    lastname:'Rojas Salvatierra ',
    ability: 'Creativity',
    strength: 30,
    magic: 35
}

var baby={
    name:'Stormy ',
    lastname:'Vera ',
    ability: 'Shine',
    strength: 10,
    magic: 40
}

var people=[me,she,baby];

var index=0;
while(index<people.length)
{
    console.log(people[index]);
    printInfo(people[index]);
    index++;
}

// for(var i=0;i<people.length;i++)
// {
//     printInfo(people[i]);
// }

function printInfo(object)
{
    document.write(object.name);
    document.write(object.lastname);
    document.write('<br>');
    document.write(object.ability);
    document.write('<br>');
    document.write('<br>');
}

const objectIsStrong=(object)=>{
    if(object.strength>40){
        return object.name + 'is <p style="color:red">strong!</p>';
    }
}

// const isStrong=(object)=>{
//     return object.strength>40;
// }
const isStrong=({strength})=>{
    return strength>40;
}

const objectIsMagical=(object)=>{
    if(object.magic>30){
        return object.name + 'is <p style="color:red">magical</p>!';
    }
}

// const isMagical=(object)=>{
//     return object.magic>30;
// }

const isMagical=({magic})=>{
    return magic>30;
}

document.write(objectIsStrong(me));
document.write(objectIsMagical(baby));

var magicalPeople=people.filter(isMagical);

document.write("<br>");
for(var i=0;i<magicalPeople.length;i++)
{
    // document.write(magicalPeople[i].name);
    // document.write(magicalPeople[i].lastname);
    // document.write("<br>");
    // document.write("<br>");
    printInfo(magicalPeople[i]);
}

var strongPeople=people.map(isStrong);

console.log(strongPeople);
// for(var i=0;i<strongPeople.length;i++)
// {
//     printInfo(strongPeople['Aldhair']);
// }

var strengthFromAll=0;
for(var i=0;i<people.length;i++)
{
    strengthFromAll+=people[i].strength;
}

document.write("<br>");
document.write(strengthFromAll);
