document.addEventListener("DOMContentLoaded",()=>{


    const  Fname=document.getElementById("Fname");
    const  Lname=document.getElementById("Lname");
    const  Dob=document.getElementById("Dob")    ;
    const  Email=document.getElementById("Email");
    const  Pword=document.getElementById("Ps");
    const Submit_btn=document.getElementById("Button_submit");

  
     let Database= JSON.parse(localStorage.getItem("Save"))  || [];

      
      
      
      
    Submit_btn.addEventListener("click",(e)=>{
    let FirstName=Fname.value.trim();
    let LastName=Lname.value.trim();
    let Dateofbirth=Dob.value.trim();
    let Ema=Email.value.trim();
    let Password=Pword.value.trim();

    if(FirstName=="" || LastName=="" || !Dateofbirth || Ema=="" || Password=="") {
        alert("ENTER SOMETHING ELSE")
        return;
    };

    let User={
        Fn:FirstName,
        Ln:LastName,
        Db:Dateofbirth,
        Email:Ema,
        Ps:Password,
    }
     
    Database.push(User);

    Fname.value="";
    Lname.value="";
    Dob.value="";
    Email.value="";
    Pword.value="";
    // FirstName.value="";



    

          Local();



    });



    function Local(){
        localStorage.setItem("save",JSON.stringify(Database))
    }



      
   
    
})