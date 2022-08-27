// Saludo usuario y mostrar foto de perfil recogida del navegador

//Saludo

let nameUser = localStorage.getItem('usuario');
document.getElementById('saludoUser').innerHTML =
 ` 
 <h5>Hola <p class="text-primary">${nameUser}</p></h5>`;

 //Foto de Perfil

 avatar = localStorage.getItem('userPic');

 document.getElementById("display-image").style.backgroundImage = `url(${avatar})`;
 console.log(nameUser);


 // Portfolio User

 // Pelis

 function mostrarPelis() {
 
let Top_pelisUser = JSON.parse(localStorage.getItem('Peliculas Fav Guardadas'));

 let pelisUser = document.getElementById('Pelis_guardadas')
 
 pelisUser.innerHTML =

 ` 
 <div class="w-100 bg-primary text-white p-2 m-2 rounded">
 <h5>Peliculas:</h5>
 </div>

 `
 Top_pelisUser.forEach((peli)=> {
                    
    let auxHtml =
    
    `
    <li>${peli.title}</li>

    `
    pelisUser.innerHTML += auxHtml;

});

}

mostrarPelis();


 // Series

function mostrarSeries() {
 
    let Top_seriesUser = JSON.parse(localStorage.getItem('Series Fav Guardadas'));
    
     let seriesUser = document.getElementById('Series Guardadas')
     
     seriesUser.innerHTML =
    
     ` 
     <div class="w-100 bg-primary text-white p-2 m-2 rounded">
     <h5>Series:</h5>
     </div>
    
     `
     Top_seriesUser.forEach((serie)=> {
                        
        let auxHtml =
        
        `
        <li>${serie.name}</li>
    
        `
        seriesUser.innerHTML += auxHtml;
    
    });

    
    
    }
 
 
mostrarSeries();



