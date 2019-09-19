const link=document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.youtube.com/watch?v=9jkEEKtS0_0');
link.innerText='Lo siento por ti';
link.setAttribute('class','FUCK');

// link.setAttribute('style','color:red;');
link.style.color='black';
link.style.fontSize='60px';
link.style.textDecoration='none';
link.style.backgroundColor='crimson';

link.style.margin='50px';
link.style.padding='10px';

link.style.width='200px';
link.style.height='100px';
link.style.borderRadius='10px';
link.style.borderStyle='solid';
link.style.borderColor='green';

