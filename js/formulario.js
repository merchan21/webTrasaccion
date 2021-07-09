const divDepositos = document.querySelector('#containerDeposito')
const containerRetiro = document.querySelector('#containerRetiro')
const btnActualizar = document.getElementById('btnActualizar')
const btnEliminar = document.getElementById('btnEliminar')


const dialog = document.querySelector('#dialog')
consultarRetiros()
consultarDepositos()

btnActualizar.addEventListener('click', ()=> {
    consultarRetiros()
    consultarDepositos()
})


let valores = []


function consultarDepositos() {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {    
        html='<div class="cardReposit">'
          data.forEach(element => {
              valores.push(element)
              html+= `
              <div class="itemCard">
              <p class="numeroCuenta">Numero de cuenta: ${element.numeroCuenta}</p>
              <div style="display:row">
                  <p>${element.fecha}</p>
                  <p>Costo: $${element.valor}</p>
              </div>
              </div>
              `
                
          });
          html+='</div>'

          divDepositos.innerHTML = html
  
      });    
}



function consultarRetiros() {
    fetch('http://localhost:3000/obtenerRepo')
    .then(response => response.json())
    .then(data => {    
        html='<div class="cardReposit">'
          data.forEach(element => {
              html+= `
              <div class="itemCard">
              <p>${element.nombreint}</p>
              <p>${element.fecha}</p>
              </div>
              `
                
          });
          html+='</div>'
          containerRetiro.innerHTML = html
      });       
}

