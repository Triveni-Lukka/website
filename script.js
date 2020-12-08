
//var x= triveni();
function triveni(){
    document.getElementById('demo').innerHTML="Hlo Triveni";
}
function formvalidate(){
    var username=document.getElementById('fname').value;
    var errormsg = document.getElementById("error_msg");

 console.log(username);
 //alert(username);
 var text=""
 if(username.length<5){
    errormsg.style.padding="10px";

     text="enter valid firstname";
     
     errormsg.innerHTML=text;
     return false;
 }
}
var s= ()=> {
    return "hello  arrwo function";
}
s();
console.log(s());
/*var x=25;

 function check(){
    var x=10;
   let y=20;
 
     const z=30;
     for(let y= 0;y<4;y++){console.log(y)}
     console.log(x);
    // console.log(y);
     //console.log(z);

 }  check();
    console.log(x);
 console.log(y);
 console.log(z);*/
 // console.log(triveni2());
 // let triveni2='hloooo';
 // function triveni2(){
  //   return "hello"
 //}
  function outer(){
      var x=10;
      function inner(){
          var b=6;
         return a+b;
          console.log(a+b);
      }
      return inner;
  }

 