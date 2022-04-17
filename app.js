
var userName= prompt("pleas enter your name");
var gender= prompt("pleas enter your type");
var age= prompt("pleas enter your age ");
if (age<=0){
    alert("what are you doing ?? enter your reall age")
    var age= prompt("pleas enter your age ")
}

var welcomeMasseg =confirm("do you whant to skip the welcoming message? ")
   
if(welcomeMasseg=true){
    
    alert("sory i dont know how to do that so keep going ")}


if (gender ==="male"){
var welcomingMessage2 =alert("helow Mr"+"  " +userName)
}

else if 
    (gender ==="female"){
      var welcomingMessage2 =alert("helow MS"+"  " +userName)
}
else{
    (gender ==="female" ||gender ==="male" )
        var welcomingMessage2 =alert("helow "+"  " +userName+" well done")
}
