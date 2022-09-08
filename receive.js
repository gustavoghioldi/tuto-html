const params = new URLSearchParams(window.location.search)

document.getElementById("name").innerHTML = params.get("name")
document.getElementById("age").innerHTML = params.get("age")
document.getElementById("hidden").textContent = params.get("hiden")
