document.addEventListener("DOMContentLoaded",()=>{

let Btn=document.getElementById("submit_input");
let id_input=document.getElementById("id_input");
let ps_input=document.getElementById("ps_input");


let Database=   JSON.parse(localStorage.getItem("Save"))  || [];

Database.forEach(task=>{
    Check(task)
    
})

Btn.addEventListener("click",(e)=>{
    console.log(e);
    let User_name=id_input.value.trim();
    let Password=ps_input.value.trim();
    if(User_name==="" || Password==="" || Password.length<8){
       alert("Enter valid credentials (password must be at least 8 characters).");
        return;
    };

    let Save={
        id:Date.now(),
        Uid:User_name,
        psd:Password,

    };
    id_input.value="";
    ps_input.value="";

    Database.push(Save);
    // console.log(Database);
    local();
     Check(Save)



});


function Check(task){

let Id=id_input.value.trim();
let Ps=ps_input.value.trim();

console.log(task);

if(task.uid===Id && task.psd===Ps){
    alert("loginedd successfully")

}



}




function local(){
    localStorage.setItem("Save",JSON.stringify(Database))
}

})


// let will={name:"KHAN"}

// function change(str){
//     str.name="ISHTIAQ",
//     console.log(str.name)
// };


// change(will);
// console.log(will.name);



// (function () {
//   let x = "Hello!!";  // I will invoke myself
// })();

// (function (){
//     console.log("SO.....!");
// })();

// Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.



// let Show=prompt("Enter something cool!")

// function Myfunction(Love){
//     let Find=Love.length;
//     console.log(Find)
//     // return Find;

// };

// Myfunction(Show);


// Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let Arr=[2,3,5,6];

// Arr.forEach(start=>{
//     // console.log({start})
//     My(start)

// });

// function My(start){
//     let Get={start};
//     console.log(Get.start*start)
    
// }
