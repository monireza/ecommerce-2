class herPower{
    constructor(name, age, education){
        this.name = name;
        this.age = age;
        this.education = education;
    }

studentName(){
    return this.name+" is a student";
}
studentAge(){
    return "She is "+this.age+" years old";
}
studentEducation(){
    return "She is " +this.education+" passout";
}
}
let hp = new herPower("Hp", 20, "HSC");
let hp1 = new herPower("Hp1", 30, "HSC");
console.log(hp.studentName());
console.log(hp1.studentName());
console.log(hp.studentAge());
console.log(hp1.studentAge());
console.log(hp.studentEducation());
console.log(hp1.studentEducation());

// class calculator{
//     constructor(){}

//     summation(a, b){
//         return a+b;
//     }
// }
// let cal = new calculator();
// console.log(cal.summation(10,5));

// class calculator{
//     constructor(){}
//     substraction(a, b){
//         return a-b;

//     }
// }
// let cal = new calculator();
// console.log(cal.substraction(10,5));

// class calculator{
//     constructor(){}
//     multi(a,b){
//         return a*b;
//     }
//     div(a,b){
//         return a/b;
//     }
// }
// let cal = new calculator();
// console.log(cal.multi(5,7));
// console.log(cal.div(10,5));

let a = new Date();
let b = a.getFullYear();

document.write(b);