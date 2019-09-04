const div=document.querySelector('div');

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
