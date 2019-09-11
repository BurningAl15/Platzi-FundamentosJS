function Persona(name,lastname,height){
    this.name=name;
    this.lastname=lastname;
    this.height=height;
    document.write(this.name + ' ' + this.lastname);
}

function Dev(name,lastname){
    this.name=name;
    this.lastname=lastname;
}


Persona.prototype.saludar=function(){
    //` ${this.attribute} ` to print the value of the attribute
    console.log(`Hola, soy ${this.name} ${this.lastname} ${this.height}`);
}

var aldhair=new Persona("aldhair","vera camacho",1.78);
var pio=new Persona("nancy", "rojas salvatierra",1.63);

// const isTall=((object)=>{
//     if(object.height>1.75)
//         console.log("Is Tall!");
// });

// const isTall=(({height})=>{
//     if(height>1.75)
//         console.log("Is Tall!");
// });

Persona.prototype.isTall=function(){
    if(this.height>1.75)
        console.log(this.name + " Is Tall!"); 
    else
        console.log(this.name + " Is not Tall!"); 
}

aldhair.saludar();
// isTall(aldhair);
aldhair.isTall();
pio.isTall();

function inheritsFrom(childrenPrototype,parentPrototype)
{
    var fn=function(){};
    fn.prototype=parentPrototype.prototype;
    childrenPrototype.prototype=new fn;
    childrenPrototype.prototype.constructor=childrenPrototype
}

inheritsFrom(Dev,Persona);

var dev=new Dev("Aldhair","Vera Camacho");

Dev.prototype.saludar=function()
{
    console.log(`Hola, soy ${this.name} ${this.lastname} and im a dev`);
}
dev.saludar();

//Classes
class Person {
    constructor(name,lastname,height){
        this.name=name;
        this.lastname=lastname;
        this.height=height;
    }

    greet(fn){
        var {name,lastname}=this;

        // console.log(`Hey, my name is ${this.name} ${this.lastname}`);
        console.log(`Hey, my name is ${name} ${lastname}`);

        if(fn){
             fn(name,lastname,false);
        }
    }

    isTall(){
        if(this.height>1.75)
            console.log(`${this.name} is tall!`);
    }
};

// var al=new Person("aldhair","vera camacho",1.78);
// al.greet();
// al.isTall();

class Developer extends Person {
    constructor(name,lastname,height){
        super(name,lastname,height);
    }

    greet(fn){
        var {name,lastname}=this;
        // console.log(`Hey, my name is ${this.name} ${this.lastname} and im a developer`);
        console.log(`Hey, my name is ${name} ${lastname} and im a developer`);
        
        if(fn){
            fn(name,lastname,true);
        }
    }
}

var alDev=new Developer("Al","Vera Camacho",1.78);
alDev.greet();

//Functions as parameters
function respondGreet(name,lastname,isDev){
    console.log(`Good day ${name} ${lastname}`);
    if(isDev){
        console.log(`Damn! didn't know you were a dev`);
    }
}

alDev.greet(respondGreet);