const inpValor = document.getElementById("valor")
const inpNombre = document.getElementById("nombre")
const btnEnviar = document.getElementById("btnEnviar")
const tipoPago = document.getElementById("tipoPago")
var url = 'http://localhost:3000/cliente'; 

const data = {
    nombre : inpNombre.value, 
    direccion:"110", 
    email:"bran@gmail.com", 
    tipoPago: tipoPago.value,
    saldo: inpValor.value}


btnEnviar.addEventListener("click",()=>{

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
          }
    }).then(res => res.json())
    .catch(error => console.log('ERROR', error))
    .then(response => console.log('SUCEESS', response))

})

