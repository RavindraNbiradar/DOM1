// EXAMINE THE DOCUMENT OBJECT//

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//GETELEMENTBYID//
console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innertext);
headerTitle.innerHTML ='<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

//GETELEMENTBYCLASSNAME//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[3].style.fontWeight ='bold';
items[2].style.backgroundColor = 'yellow';


// var items = document.getElementById("items");
// //parent child
// console.log(items.parentElement)
// //lastElementChild
// console.log(items.lastElementChild.getElementsByClassName.color="red")
// //lastchild
// console.log(items.lastChild)
