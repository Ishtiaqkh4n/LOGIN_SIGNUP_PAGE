document.addEventListener("DOMContentLoaded",()=>{
    
let Btn=document.getElementById("submit_input");
let id_input=document.getElementById("id_input");
let ps_input=document.getElementById("ps_input");


// let Data=JSON.parse(localStorage.getItem('save'));
let Database=localStorage.getItem("save");
let Data=JSON.parse(Database)

let Password=[];
let User_Em=[];
 
Data.forEach(Id=>{
   Password.push(Id.Ps);
   User_Em.push(Id.Email)
});

let Isfound=false;

console.log(Password);
console.log(User_Em)


Btn.addEventListener("click",StartSomething);

function StartSomething(){
    const  User_input=id_input.value.trim();
    const  User_password=ps_input.value.trim();

   if(!User_input  || !User_password)  return;

  


   for(let i=0;i<User_Em.length;i++){
    ///preventing , to be in Email
    for(var C of User_input){
        if(C===',' || C=='/' || C=='') {
            alert("Check your Email again")  
           
        }
        
    }
    if(User_input[i]===",") return;
    if(User_input==User_Em[i]){
        if(User_password==Password[i]){
            Isfound=true;
        }
    }

   }

if(Isfound){
    alert("LOGIN SUCCESSFULLY")
}else{alert("NOT FOUND")}

};




})