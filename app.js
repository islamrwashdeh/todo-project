
// var userName= prompt("pleas enter your name");
// var gender= prompt("pleas enter your type");
// var age= prompt("pleas enter your age ");
// if (age<=0){
//     alert("what are you doing ?? enter your reall age")
//     var age= prompt("pleas enter your age ")
// }

// var welcomeMasseg =confirm("do you whant to skip the welcoming message? ")
   
// if(welcomeMasseg=true){
    
//     alert("sory i dont know how to do that so keep going ")}


// if (gender ==="male"){
// var welcomingMessage2 =alert("helow Mr"+"  " +userName)
// }

// else if 
//     (gender ==="female"){
//       var welcomingMessage2 =alert("helow MS"+"  " +userName)
// }
// else{
//     (gender ==="female" ||gender ==="male" )
//         var welcomingMessage2 =alert("helow "+"  " +userName+" well done")
// }

'use stric';
let inputValue=[];

function answrOne(){
    inputValue.push(prompt("do you like js?"));
}

function answrTow(){
    inputValue.push(prompt("do you like problem solving ?"));
}
function answrThree(){
    inputValue.push(prompt("do love coding ?"));
}

answrOne();
answrTow();
answrThree();

function theAnswer(){
    for (let i=0; i<inputValue.length;i++) {
        if (inputValue[i]=== ""){
            caches.log("invalid");
        }
        else {
            console.log(inputValue[i])
        }
    }
}
inputValue();