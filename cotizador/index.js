var quotation = {}
$.get("https://criptoya.com/api/dolar", function(data) {
    console.log(data);
    // variable global
    quotation = data;
    // se ejecuta cuando recibe la respuesta del servicio (Asincrono)
    asignValuesInView(data.ccl, data.mep, data.solidario, data.oficial, data.blue, data.ccb)
  });

function asignValuesInView(ccl, mep, soli, ofi, blue, ccb) {
    var cclId = document.getElementById("ccl");
    cclId.innerHTML = `<h4>$ ${ccl}<h4>`;
    var mepId = document.getElementById("mep");
    mepId.innerHTML = `<h4>$ ${mep}<h4>`;
        
    var soliId = document.getElementById("soli");
    soliId.innerHTML = `<h4>$ ${soli}<h4>`;
    var ofiId = document.getElementById("ofi");
    ofiId.innerHTML = `<h4>$ ${ofi}<h4>`;
    var blueId = document.getElementById("blue");
    blueId.innerHTML = `<h4>$ ${blue}<h4>`;    
    var ccbId = document.getElementById("ccb");
    ccbId.innerHTML = `<h4>$ ${ccb}<h4>`;                
}