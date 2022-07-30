var header =document.querySelector("#main-header");
header.style.borderBottom ="solid 4px #ccc";
var input=document.querySelector("input");
input.value="hello world";
var submit=document.querySelector('input[type="submit"]');
submit.value="send";
var item=document.querySelectorAll('.list-group-item');

item[1].style.backgroundColor ='green';
item[3].style.backgroundColor ='green';

item[2].style.visibility="hidden"