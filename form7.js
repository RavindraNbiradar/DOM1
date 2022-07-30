var itemlist = document.querySelector('#items');
// parentNode
// console.log(itemlist.parentNode); 
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);


//parentelement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);

//childnodes
// console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor ='yellow';

// //firstchild
// console.log(itemlist.firstchild);
// //firstelementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello 1';

//lastchild
// console.log(itemlist.lastChild);
// //lasttelementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='hello 4';

// //nextsibling
// console.log(itemlist.nextSibling);
// //nextelementsibling
// console.log(itemlist.nextElementSibling);

//previous sibling
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='red';




//Q.creatElement adding hello before itemlistener

//Create a div
var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';

//Add Id
newDiv.id = 'hello1';


//Add Attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
//2Now go head and add HEllo word before Item Lister
var newDivText = document.createTextNode('Hello');

//Add text to div
newDiv.appendChild(newDivText);

var container =document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);

//Q.insert before the items hello world
var parentnode = document.getElementById('items');
console.log(parentnode);
console.log(parentnode.innerHTML);
parentnode.innerHTML='<li>hello world</li>'+parentnode.innerHTML;
console.log(parentnode.innerHTML);


