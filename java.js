const loginbtn = document.getElementById('login_id');
loginbtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none';
    const traAre = document.getElementById('trangection_area');
    traAre.style.display = 'block';
})

const depositbtn = document.getElementById('addDeposit');
depositbtn.addEventListener('click', function(){
    const dpCoNum = getInpuNumber('depositAmount');
    
    updateSpanText('currentDeposit', dpCoNum)
    updateSpanText('mainBlance', dpCoNum)

    document.getElementById('depositAmount').value = '';


})

const addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click', function(){
    const withdrawNumber = getInpuNumber('withdrawAmount')
    
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('mainBlance', - 1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = '';
    

})


function getInpuNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpanText(id, dpCoNum) {
    const amount = document.getElementById(id).innerText;
    const amountNum = parseFloat(amount);
    const totalAmount = dpCoNum + amountNum;
    document.getElementById(id).innerText = totalAmount;
}