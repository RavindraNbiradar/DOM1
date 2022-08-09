class student{

    static count=0;  //static variable to call

    

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();
   }
   static countStudent(){
       return(student.count++);     //this is how u access static variable
   }
   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${this.age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${this.age} is not eligible`);

       }

   }
}
const Ravindra=new student('Ravindra',27,1234,50);
const amar=new student('amar',27,2345,35);
const rahul=new student('rahul',24,4567,35);
const manik=new student('manik',18,7891,70);
const gowda=new student('gowda',19,3456,80);
console.log(student.countStudent());
Ravindra.eligible();
amar.eligible();
rahul.eligible();
manik.eligible();
gowda.eligible();