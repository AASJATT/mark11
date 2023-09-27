var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");

function checkBirthDateIsLucky(){
 var dob= dateOfBirth.value ;
  var sum= calculateSum(dob);
  console.log(sum);
}
function calculateSum(dob){
    dob= dob.replaceAll("-","");
    

}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky)
    