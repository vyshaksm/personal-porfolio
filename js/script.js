let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}



document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});
function validform(){
    var name=document.form.name.value;
    var email=document.form.email.value;
    var subject=document.form.number.value;
    var message=document.form.message.value; 
    var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
   var error=document.getElementById("error");
    
   if(name==""){
       error.innerHTML='The Name is Empty'
       
       return false;
  }
  if(name.length<5){
   error.innerHTML='Name Should Contain five Elements Please Include Fullname';
       return false;
  }
  if(email=="")
{
   error.innerHTML='Email is Empty';
       return false;
}  
if(regex.test(email)==false){
   error.innerHTML='Invalid Email'
   return false
}
if(number.length<5){
   error.innerHTML='Should Contain 10 Elements';
   return false
} 
if(message.length<10){
   error.innerHTML='Should Contain 10 Words';
   return false
} 
if(message.length>100){
   error.innerHTML='Exceeds Limit';
   return false
} 
return true;

}