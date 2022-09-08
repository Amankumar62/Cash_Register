const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const classCashGiven = document.querySelector(".cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");


billAmount.addEventListener('input',function displayHandler(e){
if(e.target.value.length > 0){
    cashGiven.style.display = "block";
    classCashGiven.style.display = "block";
    checkButton.style.display = "block";
}
else{
    cashGiven.style.display = "none";
    classCashGiven.style.display = "none";
    checkButton.style.display = "none";
}
});

nextButton.addEventListener("click",function displayCashGiven(){
    cashGiven.style.display = "block";
    classCashGiven.style.display = "block";
    checkButton.style.display = "block";
});

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    for(let i=0;i<availableNotes.length;i++){
        noOfNotes[i].innerText = 0;
    }
  hideMessage();
if(billAmount.value > 0 ){
    if(cashGiven.value >= billAmount.value){
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    }else{
         showMessage("The cash should atleast be equal to bill amount");
    }
}
else{
    showMessage("Invalid Bill Amount");
}
});

function calculateChange(amountToBeReturned){
 for(let i=0;i<availableNotes.length;i++){
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes; 
 }
}
function hideMessage(){
    message.style.display = "none";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg; 
}