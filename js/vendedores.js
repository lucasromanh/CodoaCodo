const API_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) =>{
        console.log(data)

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

        let nroVendedores =getRandomInt(9)+1
        console.log("nro de vendedores " + nroVendedores)    
        let body = ``
        for (let i = 0; i<nroVendedores; i++){
           body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
        }
        
        document.getElementById(`data`).innerHTML = body
    }


