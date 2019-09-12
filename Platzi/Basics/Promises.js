/*
What are promises?
we must think about them as values that we currently don't know

Basically is a promise that we will have a value when an asynchronus action be executed
Promises have 3 states:
1)Pending: if resolves, then goes to fullfilled, else goes to rejected
2)Fullfilled
.then(val=>...)

3)Rejected
.catch(err=>...)

Promises can resolve synchronously or asynchronously

Promise:
new Promise(function(resolve,reject)){

}).then(valor=>{
    ...
}).catch(err=>{
    ...
})


*/

const API_URL='https://swapi.co/api/';
const PEOPLE_URL='people/:id';
const opts={crossDomain:true};

const onCharacterResponse=function(character){
    console.log(`Hey, im ${character.name}`);
}

function getCharacter(id){
    return new Promise((resolve,reject)=>{

        const url=`${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $
            .get(url,opts,(data)=>{
                //Resolve wont be called until the get succeed
                resolve(data)
            })
            
            .fail(()=>reject(id))
            });
}


function onError(id){
    console.log(`The error happend when we try to get the character ${id}`)
}


//Nested Promises
// getCharacter(1)
// .then((character1)=>{
//     console.log(`This character is ${character1.name}`);
//     return getCharacter(2)
// })
// .then((character2)=>{
//     console.log(`This character is ${character2.name}`);
//     return getCharacter(3)
// })
// .then((character3)=>{
//     console.log(`This character is ${character3.name}`);
//     return getCharacter(5)
// })
// .then((character4)=>{
//     console.log(`This character is ${character4.name}`);
//     return getCharacter(7)
// })
// .catch(onerror)
// .catch((id)=>{

// })


// var promises=ids.map((id)=>{
//     return getCharacter(id);
// })


async function getCharacters(){
    var ids=[1,2,3,4,5,6,7]
    var promises=ids.map(id=> getCharacter(id))
    
    try{
        //This line while wait until all promises resolve
        var characters=await Promise.all(promises);
        console.log(characters);
    } catch(id){
        onError(id);
    }


    // Promise
    // .all(promises)
    // .then(characters=> console.log(characters))
    // .catch(onError);
}

getCharacters();