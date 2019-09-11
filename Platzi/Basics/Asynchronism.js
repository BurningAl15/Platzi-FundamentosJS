//Asynchronism
/*
One task can be executed per time.
Can delegate the execution of other functions to other processes

This is called Event Loop

JS have a call stack, where puts the callbacks to some functions in execution order
If a function call other function, then this is added to the call stack, when the function ends
is popped from the stack 

A callback response is saved in the task queue, here the task enqueue in arrival order.
(server requests, visual interactions, client side navegations, events that happen every n time)

when the program has nothing more in the execution stack, it will look for the task queue

DON'T BLOCK THE EVENT LOOP!
*/

//1) 
// console.log('a');

// setTimeout(() => {
//     console.log('b');
// }, 1000);

// console.log('c');

//2) Calling an API

const API_URL='https://swapi.co/api/';
const PEOPLE_URL='people/:id';

const lukeURL=`${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts={crossDomain:true};

const vaderURL=`${API_URL}${PEOPLE_URL.replace(':id',4)}`;

const onCharacterResponse=function(character){
    console.log(`Hey, im ${character.name}`);
}

// $.get(lukeURL,opts,function(luke){
//     onCharacterResponse(luke);
// });

// $.get(vaderURL,opts,function(vader){
//     // console.log(`Hey, im ${vader.name}`);
//     onCharacterResponse(vader);
// });

// function getCharacter(id){
//     const url=`${API_URL}${PEOPLE_URL.replace(':id',id)}`;
   
//     $.get(url,opts,onCharacterResponse);
// }

function getCharacter(id,callback){
    const url=`${API_URL}${PEOPLE_URL.replace(':id',id)}`;
   
    $.get(url,opts,onCharacterResponse);
}

// getCharacter(1);

// for(var i=1;i<50;i++)
// {
//     getCharacter(i,getCharacter((i+1),getCharacter(i+5)));
// }

getCharacter(1,
    getCharacter((5),
        getCharacter(10, getCharacter(11)
            )
        )
    );
