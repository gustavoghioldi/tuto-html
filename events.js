function push_button( ) {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value

    //document.write(`<h1>hola ${name}, tienes ${age} años</h1>`)
    document.getElementById('rta').innerHTML = `hola ${name}, tienes ${age} años`
}
let btn1 = document.getElementById('bt')

btn1.addEventListener('click', ()=>{
    push_button()
})