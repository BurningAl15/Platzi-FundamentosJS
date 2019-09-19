// const content = document.querySelector('p');
// content.classList.add('error');

const content = document.querySelectorAll('p');

console.log(content.classList);

for(var i=0;i<content.length;i++)
{
    if(i%2==0)
        content[i].classList.add('error');
    else{
        content[i].classList.add('success');
        }
}

// for(var i=0;i<content.length;i++)
// {
//     if(content[i].textContent.includes('error'))
//     {
//         content[i].classList.remove('error');
//         content[i].classList.add('success');
//     } 
//     else if(content[i].textContent.includes('success')){
//         content[i].classList.remove('success');
//         content[i].classList.add('error');
//     }
// }

// content.forEach(p=>{
//     if(p.textContent.includes('error'))
//     {
//         p.classList.remove('error');
//         p.classList.add('success');
//     } 
//     // else if(p.textContent.includes('success')){
//     else if(p.innerText.includes('success')){
//         p.classList.remove('success');
//         p.classList.add('error');
//     }
// })

// const title= document.querySelector('.title');
// //1 toggle makes you add a class
// title.classList.toggle('test');
// //2 toggles makes you remove the class you toggled before
// title.classList.toggle('test');

const article=document.querySelector('article');

// console.log(article.children)
// console.log(Array.from(article.children))
// console.log(article.children);

Array.from(article.children).forEach(child=>{
    child.classList.add('article-element');
})

const title=document.querySelector('h2');

console.log('Parent is:');
console.log(title.parentElement);
console.log('Parent of parent is:');
console.log(title.parentElement.parentElement);
console.log('Next sibling is:');
console.log(title.nextElementSibling);
console.log('Previous sibling is:');
console.log(title.previousElementSibling);

console.log('Next siblings parent children are:');
console.log(title.nextElementSibling.parentElement.children);
