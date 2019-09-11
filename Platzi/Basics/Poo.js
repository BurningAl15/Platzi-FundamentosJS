function Persona(name,lastname){
    this.name=name;
    this.lastname=lastname;

    document.write(this.name + ' ' + this.lastname);
}

Persona.prototype.saludar=function(){
    //` ${this.attribute} ` to print the value of the attribute
    console.log(`Hola, soy ${this.name} ${this.lastname}`);
}

var aldhair=new Persona("aldhair","vera camacho");

aldhair.saludar();