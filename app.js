
function calculateBill(){
    let numUnits = parseFloat(document.getElementById(`numUnits`).value);
    let ChargesPerUnit = parseFloat(document.getElementById(`chargesPerUnit`).value);

    let netAmount = numUnits * ChargesPerUnit;
    let latePaymentSurcharge = netAmount * 0.05;

    let grossAmount = netAmount + latePaymentSurcharge;

    document.getElementById('netAmount').textContent = netAmount.toFixed(2);
    document.getElementById('latePaymentSurcharge').textContent = latePaymentSurcharge.toFixed(2);
    document.getElementById('grossAmount').textContent = grossAmount.toFixed(2);
}
