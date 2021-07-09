const btnRegistro = document.getElementById("btnRegistro")
const InputNombre = document.getElementById("InputNombre")
const InputApellido = document.getElementById("InputApellido")
const InputCorreo = document.getElementById("InputCorreo")
const InputPass = document.getElementById("InputPass")
const url = 'http://localhost:3000/registro'; 
const pagActual = window.location;
var index = pagActual.href.split("index.html")

localStorage.clear()

btnRegistro.addEventListener('click',  () => {
    //crear el json 
    const datosRegistros = {
        nombre : InputNombre.value, 
        apellido: InputApellido.value,
        correo: InputCorreo.value,
        pass: InputPass.value
    }
    //envia al backend de bryan
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datosRegistros),
        headers:{
            'Content-Type': 'application/json'
          }
    }).then(res => res.json())
    .catch(error => console.log('ERROR', error))
    .then(response => console.log('SUCEESS', response))

    //guardar usuario
    var guardarUsuario = new Object()
    guardarUsuario.correo = datosRegistros.correo
    localStorage.setItem("usuario", JSON.stringify(guardarUsuario))    
    location.href = `${index[0]}Formulario.html`
})
