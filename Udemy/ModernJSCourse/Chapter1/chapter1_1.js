const p=document.querySelector('p');
const div=document.querySelector('div.AAA');
const divs=document.querySelectorAll('div.box');

const title=document.getElementById('ttitle');
const flexbox=document.querySelector('.flexbox');

const email="abc@dmail.eom";
// write(email);
let firstname="Itsconst, Mario.";
let lastname="Mario Bros";

let fullname=firstname+" "+lastname;

write(fullname);
printTheStuff("eibici");
printTheStuff("eibici",1);
printTheStuff("eibici",2);

function printTheStuff(stuff, option=0)
{
    document.write("</br>");
    
    for(var i=0;i<stuff.length;i++)
    {
        switch(option)
        {
            case 0:
                write(stuff[i],1);
            break;
            case 1:
                write(stuff[i].toUpperCase(),1);
            break;
            case 2:
                write(stuff[i].toLowerCase()+"_",1);
            break;
        }
    }
}

function write(stuff,option=0)
{
    switch(option)
    {
        case 0:
            document.write("</br>");
        break;
        case 1:
            document.write(" ");
        break;
    }
    document.write(stuff);
}


const customElements=['a','b','c','d'];

customElements.forEach(function(subStuff){
    write(subStuff,1);
});
customElements.forEach(subStuff=>{
    write(subStuff,0);
});

write(divs.length);
printTheStuff(divs);
divs.forEach(element=>{
    write(element.innerText);
    change(element,"***"+element.innerText+"***");
    write(element.innerText);
});

function change(stuff,letters){
    stuff.innerText=letters;
}

customElements.forEach(person=>{
    flexbox.innerHTML+=`<p>${person}</p>`;
});

// write(title.innerText);

flexbox.innerHTML='<h2>Damn!</h2>';
