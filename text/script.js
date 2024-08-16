// login button event handler start here
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('loginarea');
    loginArea.style.display ='none'
    const transactionAria = document.getElementById('transactionAria');
    transactionAria.style.display ='block';

})
const Lesgo = document.getElementById('lesgo');
Lesgo.addEventListener('click',function(){
    const DisplayNone = document.getElementById('displayNone');
    DisplayNone.style.display ='none';
    const desplayBlock = document.getElementById('desplayBlock');
    desplayBlock.style.display ='block';


})

//!login button event handler End here

//? Diposit button event handler Start here

const addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click',function(){
    const dipositNumber = getInputNumber('depositAmount');

    // const depositAmount = document.getElementById('depositAmount').value;
    // const dipositNumber = parseFloat(depositAmount);


    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = dipositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

    // const currentBalence = document.getElementById('currentBalence').innerText;
    // const currentBalenceNumber = parseFloat(currentBalence);
    // const totalBalence = dipositNumber + currentBalenceNumber;
    // document.getElementById('currentBalence').innerText = totalBalence;

    updateSpanText('currentDeposit',dipositNumber);
    updateSpanText('currentBalence',dipositNumber);

    document.getElementById('depositAmount').value ="";


})
function updateSpanText(id,dipositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = dipositNumber + currentNumber;
    document.getElementById(id).innerText = total;

}
//! Diposit button event handler End here

//? Withidraw button event handler Start here

const addWithdraw  = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click',function(){
  
    const WithidrawNumber = getInputNumber('WithdrawAmount');
    updateSpanText('currentWithraw',WithidrawNumber);
    updateSpanText('currentBalence', -1 * WithidrawNumber);


    document.getElementById('WithdrawAmount').value ="";


})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


//! Withidraw button event handler End here

