function usdToInr(){
    let usd = document.getElementById('inputUsd').value;
    let cInr=(usd * 81.78).toFixed(2);
    document.getElementById('inputInr').value = cInr;
}
function inrToUsd(){
    let inr = document.getElementById('inputInr').value;
    let cUsd=(inr / 86).toFixed(2);
    document.getElementById('inputUsd').value = cUsd;
}

