document.addEventListener("DOMContentLoaded",()=>{

    const  Fname=document.getElementById("Fname");
    const  Lname=document.getElementById("Lname");
    const  Dob=document.getElementById("Dob")    ;
    const  Email=document.getElementById("Email");
    const  Pword=document.getElementById("Ps");
    const Submit_btn=document.getElementById("Button_submit");

   

   Submit_btn.addEventListener("click",(e)=>{
    console.log(e);
    e.preventDefault();

    let Firstname=Fname.value.trim();
    let Lastname=Lname.value.trim();
    let Emailname=Email.value.trim();
    let Psdname=Pword.value.trim();
    let Dobname=Dob.value;

    if(!Dobname || Firstname=="" || Lastname=="" || Emailname=="" || Psdname=="" 
    ) {alert("FUCKEDUP!")}


    let user={
        id:Date.now(),
        FirstName:Firstname,
        LastName:Lastname,
        Email:Emailname,
        Pas:Psdname,
        Dob:Dobname

    };


    console.log(user)
   })





})