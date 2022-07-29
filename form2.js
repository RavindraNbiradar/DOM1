var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor="green"

items[1].style.fontWeight="bold"
for(var i=0; i<=items.length-1; i++){
    console.log(items[i])
    items[i].style.fontWeight = "bold";
} 