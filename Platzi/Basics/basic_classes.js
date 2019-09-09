const div=document.querySelector('div');

div.style.display="flex";
div.style.flexWrap="wrap";
div.style.justifyContent="center";


//Class 1 - Variables
var name='Aldhair',lastname='Vera Camacho';
var fullname=name+" "+lastname;

let age='25';
console.log(fullname);

//Class 2 - Strings
let myInfo=fullname + '\n' +"Age: "+age;
var completeName=`${name} ${lastname}`;

div.innerText=myInfo;

document.write('<br>');
for(var i=0;i<myInfo.length;i++)
{
    console.log(myInfo[i]);
    printStuff(myInfo[i],RandomBetween(0,1));
    // printStuff(myInfo[i],i%2);
}


div.innerHTML+=`<p>${"1) "+fullname}</p>`
div.innerHTML+=`<p>${"2) "+completeName}</p>`
const p=document.querySelectorAll('p');
// p.setAttribute('class','para');
p.forEach(element=>{
    element.style.flexShrink=0;
    element.style.borderRadius='5px';
    element.style.borderStyle='solid';
    element.style.borderColor='purple';
    element.style.margin='5px';
    element.style.padding='5px';
    element.style.backgroundColor="gray";
});

function RandomBetween(_minVal,_maxVal)
{
    //random goes from 0.000000000000...1 to 0.99999999999999...999
    return Math.floor((Math.random()*(_maxVal-_minVal+1)))+_minVal;
}

function printStuff(stuff,option)
{
    switch(option)
    {
        case 0:
            document.write(stuff.toUpperCase());
        break;
        case 1:
            document.write(stuff.toLowerCase());
        break;
    }
    document.write('<br>');
}

//Class 3 - Numbers
var numericAge=25;

var nextYearAge=numericAge+1;

UpdateInTime(10);
function UpdateInTime(years)
{
    numericAge+=years;
    document.write("In "+ `${years}`+" years i'll have " + numericAge);
}

document.write("<br>");
percentage(10,15);

function percentage(total,current)
{
    document.write("<br>");
    document.write(current + " is the "+(current/total*100)+"% of "+total);
    document.write("<br>");
    document.write(current + " is "+(current/total)+" times "+total);
}


// OBJECTS

var me={
    name: 'Aldhair ',
    lastName: 'Vera Camacho ',
    age: 25
}

var she={
    name: 'Nancy ',
    lastName: 'Rojas Salvatierra ',
    age:23
}

function printObject(object)
{
    document.write('<br>');
    var {name}=object;
    //var _name=object.name;
    document.write(name);

    var {lastName}=object;
    //var _lastName=object.lastName;
    document.write(lastName);

    var {age}=object;
    //var _age=object.age;
    document.write(age);
}

document.write('<br>');
document.write('<br>');
document.write("name ");
document.write("lastName ");
document.write("age");

// document.write('<br>');
// document.write(me.name);
// document.write(me.lastName);
// document.write(me.age);
printObject(me);

// document.write('<br>');
// document.write(she.name);
// document.write(she.lastName);
// document.write(she.age);
printObject(she);

function birthday(object){
    // object.age+=1;
    // document.write('<br>');
    // document.write(object.name);
    // document.write(object.age);
    return{
        ...object,
        age:object.age+1
    }
}

document.write('<br>');
// document.write(me.name);
document.write(birthday(me).name);
document.write(birthday(me).age);

//COMPARATIVES
/*
x=4
y="4"

x==y -> true -> compare using a same base type
x===y -> false -> compares using the current type (GOOD PRACTICE!)
*/
