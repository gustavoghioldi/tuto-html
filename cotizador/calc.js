function calc (amount, quotation) {
    return (amount / quotation).toFixed(2);
}

function clacView() {
    console.log('click calc');
    
    var qType = document.getElementById("qType")
    var ars = document.getElementById("ars");

    var fArs = parseFloat(ars.value)
    var rta = calc(fArs, quotation[qType.value]);

    var result = document.getElementById("result");
    result.innerHTML = `<h4> $ ${rta} </h4>`;
}
