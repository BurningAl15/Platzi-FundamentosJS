//Problem 1 Find longest Word
//Ex. "The quick brown fox jumped over the lazy dog"
//Ex. "MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN stuff stuffff stuf stuuuff"

//Basic Solution
const longestWordSize_Basic=((str)=>{
    var words=str.split(' ');
    var maxLength=0;
    for(var i=0;i<words.length;i++)
    {
        if(words[i].length > maxLength)
        {
            maxLength=words[i].length;
            word=words[i];
        }
    }

    return maxLength;
});

const longestWord_Basic=((str)=>{
    var words=str.split(' ');
    var maxLength=0;
    var word=' ';
    for(var i=0;i<words.length;i++)
    {
        if(words[i].length > maxLength)
        {
            maxLength=words[i].length;
            word=words[i];
        }
    }

    return word;
});

let _word='The quick brown fox jumped over the lazy dog';
let _otherWord='MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN stuff stuffff stuf stuuuff';

console.log(longestWordSize_Basic(_otherWord));
console.log(longestWord_Basic(_otherWord));

//Intermediate Solution
const longestWordSize_Intermediate=((str)=>{
    return str.split(' ').reduce((x,y)=>{
        return Math.max(x,y.length);
    },0);
});

const longestWord_Intermediate=((str)=>{
    return str.split(' ').reduce((x,y)=>{
        return (x.length > y.length) ? x : y;
    },0);
});


console.log(longestWordSize_Intermediate(_otherWord));
console.log(longestWord_Intermediate(_otherWord));


//Advanced Solution
const longestWordSize_Advanced=((str)=>{
    str=str.split(' ');

    if(str.length==1){
        return str[0].length;
    }

    if(str[0].length >= str[1].length){
        str.splice(1,1);
        return longestWordSize_Advanced(str.join(' '));
    }

    if(str[0].length <= str[1].length){
        return longestWordSize_Advanced(str.slice(1,str.length).join(' '));
    }
    return str.length;
});

const longestWord_Advanced=((str)=>{
    str=str.split(' ');

    if(str.length==1){
        return str[0];
    }

    if(str[0].length >= str[1].length){
        str.splice(1,1);
        return longestWord_Advanced(str.join(' '));
    }

    if(str[0].length <= str[1].length){
        return longestWord_Advanced(str.slice(1,str.length).join(' '));
    }
    return str;
});

console.log(longestWordSize_Advanced(_otherWord));
console.log(longestWord_Advanced(_otherWord));
