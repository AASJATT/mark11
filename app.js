var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");

 function checkBirthDateIsLucky(){
  var birthDate= dateOfBirth.value ;
  var sum = calculateSum(birthDate);
  console.log(sum)
}

 function calculateSum(birthDate){
  birthDate= birthDate.replaceAll("-","");
  let sum=0;
  for(let i=0;i<birthDate.length;i++){
    sum= sum + Number(birthDate.charAt(i))
  }
  return sum
 }

 
 

checkNumber.addEventListener("click", checkBirthDateIsLucky);