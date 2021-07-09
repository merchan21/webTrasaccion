const numeroCuenta = document.getElementById('Ncuenta')
const nombreint = document.getElementById('nombreint')
const fecha = document.getElementById('fecha')
const valor = document.getElementById('valor')
const btnDepositar = document.getElementById('btnDepositar')
const url = 'http://localhost:3000/deposito'; 


btnDepositar.addEventListener('click', () => {
    
    var datosUsuario = JSON.parse(localStorage.getItem("usuario"))

    const datosDepositar = {
        nombreClient: datosUsuario.correo,
        numeroCuenta: Number(numeroCuenta.value),
        nombreint: nombreint.value,
        fecha: fecha.value,
        valor: Number(valor.value)
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datosDepositar),
        headers:{
            'Content-Type': 'application/json'
          }
    }).then(res => res.json())
    .catch(error => console.log('ERROR', error))
    .then(response => console.log('SUCEESS', response))
   
})