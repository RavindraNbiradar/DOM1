// //call method

let name = {
    firstname: "ravindra",
    lastname: "Biradar",
   
    
}

 let  printfullname = function (hometown, state) {
    console.log(this.firstname + "  " + this.lastname + " from " + hometown + " ," + state);
}
printfullname.call(name, "bidar", "karnataka");

let name2 = {
    firstname: "amar",
    lastname: "javalgi",
}

let name3 ={
    firstname:"akash",
    age :25,
}
//call method
//function borrowing
printfullname.call(name2, "bidar", "karnataka");
printfullname.apply(name2, ["bidar", "krnataka"]);

//bind method
let printmyName = printfullname.bind(name2, "bidar", "karnataka");
console.log(printmyName);
printmyName();
// bind method for student
// let printStudentAge = bind(name3);
console.log(name3.firstname,name3.age);

 //bind method
 let Obj={num:2}
 let add=function(a,b,c){
     return this.num+a+b+c;
 }
 let bound = add.bind(Obj);
 console.log(bound(2,3,4))