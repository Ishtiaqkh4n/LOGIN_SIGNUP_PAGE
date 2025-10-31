let btn=document.getElementsByClassName(".button")


btn.addEventListener("click",(e)=>{
    console.log(e);
    e.preventdefalut();
    alert("FUCKED UP!")
})