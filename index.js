const birthdate = document.querySelector('#birthdate');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumber = document.querySelector('#check');
const error = document.querySelector('#error');
const output = document.querySelector('#output');

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum;
}
function checkBirthdateAndNumber(sum, number){
    if(sum%number===0){
        output.style.color = "#04753d";
        output.innerText = "Your Birthday is lucky 🥳"
    }
    else{
        output.style.color = "rgb(214, 108, 66)";
        output.innerText = "Your Birthday is not lucky ☹️"
    }
}
function checkBirthadayIsLucky(){
    const dob = birthdate.value;
    const number = luckyNumber.value;
    if(dob&&number){
    const sum = calculateSum(dob);
    checkBirthdateAndNumber(sum, number)
    error.style.display = "none"
    }
    else{
        error.style.display = "block";
        error.innerText = "Please fill all fields"
    }
}


checkNumber.addEventListener("click",checkBirthadayIsLucky)