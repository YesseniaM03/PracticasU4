//METODO FETCH SIRVE PARA HACER PETICIONES DE MANERA SINCRONA-ASI VIENE YA LA SINTAXIS
 //creando nodos en el div
 const app = document.getElementById('app');
 getImageFromNasa()
 .then(function (data) {
   console.log(data)
   data.array.forEach(function (data) {
       const img = document.createElement('img')
       img.src = getImage(data)
       img.alt = data.caption 
       app.appendChild(img)
     })
 })
  function getImageFromNasa() {
    return fetch('https://epic.gsfc.nasa.gov/api/natural')
    .then(function(response) {
      return response.json()  
    })
    .then(function(data) {
      console.log(data)
    })
    .catch(function(error) {
      console.log(error)
    })
  }
  function getImage(data) {
    const url='https://epic.gsfc.nasa.gov/api/natural'
    const date = data.date
    .substr(0,10) //obtiene los 10 carácteres de la fecha
    .split('-'); //seapara los carácteres por el guion
    return '${url}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png' //estamos mandando llamar  a las variables con el signo de $
  }
  

 