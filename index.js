let math     = Number(prompt("Math",""));
let physic   = Number(prompt("Physic",""));
let computer = Number(prompt("Computer",""));
let english  = Number(prompt("English",""));

let result1  = math+physic+computer+english;

let result   = (math+physic+computer+english)/400*100;

alert(result1 + "/400" );

if(result <= 32.99){
 alert("Fail")
               }

else if (result >= 80) {
 alert("A+");
              }

else if (result >= 70) {
    alert("B");
                }

else if (result >= 50) {
     alert("C");
                }

else if (result >= 33 ) {
  alert("Pass");
                }
   


   
   

