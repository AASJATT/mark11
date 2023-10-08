var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box")

function compareValues(sum,luckyNumber){
  if(sum%luckyNumber===0){
    outputBox.innerText=("your birthday is lucky!! 😀😀")
  } else {
    outputBox.innerText=("your birthday is not lucky!! ☹️☹️")
  }
}

 function checkBirthDateIsLucky(){
  var birthDate= dateOfBirth.value ;
  var sum = calculateSum(birthDate);
  if(sum&&birthDate)
  compareValues(sum,luckyNumber.value);
else
outputBox.innerText="Please enter both the fields"
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