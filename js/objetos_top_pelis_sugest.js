// Variables

let userSelectedPelis = [];

let userTotalPelisSave = [];

//Funciones

// Función Seleccionar y Mostrar (con botones Guardar y Quitar)
    
function mostrarSelectPeli(peliSelec){
    console.log('Esta es la peli seleccionada '+ peliSelec.title);
    
    let pelisSelected = document.getElementById('selectedPelis')
        
        let peliHTML = `
               
                <div id="peliSel" class="col-4 col-md-2 mb-1 mx-2 mt-2>
                    <div class="card">
                        <div class="card-body">
                        <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peliSelec.poster_path}" alt="${peliSelec.title}">
                        <h5 class="mt-2 text-center overflow-hidden"><strong>${peliSelec.title}</strong></h5>
                        <button id="guardarPeli"  class="btn btn-success text-center fs-6 my-1 ml-3"
                        onclick="guardarSelectpeli({title: '${peliSelec.title}'})">Guardar</button>
                        <button id="quitarPeli"  class="btn btn-danger text-center fs-6 my-1 ml-3"
                        onclick="quitarSelectpeli({title: '${peliSelec.title}'})">Quitar</button>
                        
                    </div>
                </div>  

            `
           

        pelisSelected.innerHTML += peliHTML 
        
    }

//  Mostrar en una lista las Peliculas listas para guardar

function guardarSelectpeli(peliSelecTitle){

    userSelectedPelis.push(peliSelecTitle);
    console.log(userSelectedPelis);
    
    pelisResume.innerHTML= 
    
    `
    <button id="Guardar_Continuar"  class="btn btn-dark text-center my-3"
    onclick="guardarContinuar({title: '${peliSelecTitle}'})">Guardar y Continuar</button>

    `
    userSelectedPelis.forEach((peliSelecTitle)=> {
        
        let auxHtml =
        
        `
        <li>${peliSelecTitle.title}</li>

        `
        
        pelisResume.innerHTML += auxHtml;
        
    });

}

// Quitar y Poner CADA PELI a la lista y a seleccionados

let pelisResume = document.getElementById('TusPelis');

// Quitar peliculas 

    function quitarSelectpeli(peliSelecTitle){

        // Quitar Pelis de la Lista (botón Quitar)

        arrayIntermedio=[];
            for(let i=0;i<userSelectedPelis.length;i++){
                
                if(userSelectedPelis[i].title!==peliSelecTitle){
                    arrayIntermedio.push(userSelectedPelis[i]);
                }
            }

            userSelectedPelis = arrayIntermedio;
            console.log(userSelectedPelis);
        
        // Volvemos a crear la lista con el array actualizado con el elemento sustraido
        
           userSelectedPelis.forEach((peliSelecTitle)=> {
              
               let auxHtml =
               
               `
               <li>${peliSelecTitle.title}</li>
   
               `
            
               pelisResume.innerHTML += auxHtml;
               
           });

        // Quitamos el DIV creado #peliSel cuando se genera una peli seleccionada
   
           let PeliQuitar = document.querySelector('#peliSel');
           PeliQuitar.remove('peliSel');

           // Dibujamos botón "Guardar y Continuar"

           pelisResume.innerHTML= 
           
           `
           <button id="Continuar"  class="btn btn-dark text-center my-3"
           onclick="guardarContinuar({title: '${peliSelecTitle}'})">Guardar y Continuar</button>
   
           `

    }



// GUARDAR PELIS POR GENERO, limpiar y continuar a la segunda selección - Botón Guardar y Continuar

let pelisSave1 = [];
let pelisSave2 = [];
let pelisSave3 = [];

function guardarContinuar(){
    
        
    document.getElementById(tusGenPelis[tusGenPelis.length -1]).disable = false;
    console.log(tusGenPelis[tusGenPelis.length -1])
    

    // Borramos las pelis sugeridas y seleccionadas

    document.getElementById('cardsSugestPelis').innerHTML='';
    document.getElementById('selectedPelis').innerHTML='';
    pelisResume.innerHTML = '';
    

    // Monstramos las guardadas para cada genero según lo largo que 
    // sea el array con los generos seleccionas (máx 3)

    switch (tusGenPelis.length) {

        case 1:

            for (let i = 0; i < userSelectedPelis.length; i++) {
                pelisSave1.push(userSelectedPelis[i]);
                
            }
           
            
            console.log(pelisSave1)
            let guardadas1 = document.getElementById('Pelis_guardadas1');
    
            // Aparece el título del genero 1 guardado

            guardadas1.innerHTML=
            `<div class="rounded p-2 bg-success text-white w-75">
            <h5>${tusGenPelis[0]}</h5>`

            // Redibujamos lista de peliculas guardadas del genero 1

            pelisSave1.forEach((peli)=> {
                    
                let auxHtml =
                
                `
                <li>${peli.title}</li>

                `
                
                guardadas1.innerHTML += auxHtml;
                
            });

            // Guardamos en el array total de pelis Guardadas

            for (let j = 0; j < pelisSave1.length; j++) {
                userTotalPelisSave.push(pelisSave1[j]);
                
            }
            
            
            break;

        case 2:
            
            // Obtenemos el array filtrando y quitando las peliculas del genero guardado 1

            pelisSave2 = userSelectedPelis.filter(peli => !pelisSave1.includes(peli));

           
            let guardadas2 = document.getElementById('Pelis_guardadas2');
    
            // Aparece el título del genero 2 guardado

            guardadas2.innerHTML=
            `<div class="rounded p-2 bg-success text-white w-75">
            <h5>${tusGenPelis[1]}</h5>`

            // Redibujamos lista de peliculas guardadas del genero 2

            pelisSave2.forEach((peli)=> {
                    
                let auxHtml1 =
                
                `
                <li>${peli.title}</li>

                `
                
                guardadas2.innerHTML += auxHtml1;
                
            });


            break;
        
            case 3:

            // Obtenemos el array del genero 3
            // Creamos un array auxiliar que concatena el 1 y el 2

                pelisSave1_y_2 = pelisSave1.concat(pelisSave2);
            
            // Obtenemos el array filtrando y quitando las peliculas del genero auxiliar 
            // que representa el grupo de pelis del genero 1 y 2

                pelisSave3 = userSelectedPelis.filter(peli => !pelisSave1_y_2.includes(peli));
               
                
                let guardadas3 = document.getElementById('Pelis_guardadas3');
            
            // Aparece el título del genero 2 guardado

                guardadas3.innerHTML=
                `<div class="rounded p-2 bg-success w-75 text-white">
                <h5>${tusGenPelis[2]}</h5>`

                // Redibujamos lista de peliculas guardadas del genero 2
    
                pelisSave2.forEach((peli)=> {
                        
                    let auxHtml2 =
                    
                    `
                    <li>${peli.title}</li>
    
                    `
                    
                    guardadas3.innerHTML += auxHtml2;
                    
                });

        // Llegados a los 3 generos guardados y avisamos con un Sweet Alert para continuar
                
                setTimeout(() => {
                   
                Swal.fire({
                    customClass: {
                        confirmButton: 'btn btn-prymary',
                        cancelButton: 'btn btn-danger',
                      },
                    title: 'Gracias. ¿Continuamos con Series?',
                    icon: 'success',
                    showCancelButton: true,
                confirmButtonText: `<a class="text-decoration-none text-white button_link" href="perfil-gustos-series.html">¡Sí, seguimos!</a>`,
                cancelButtonText: `<a class="text-decoration-none text-white button_link" href="perfil-gustos-pelis.html">No, modificar Peliculas</a>`
                    
                }, 5000);       
                       
                    
                })

        // Obtenemos un array con el total de las pelis seleccionadas y guardadas

                userTotalPelisSave = pelisSave1_y_2.concat(pelisSave3);
               
                break;

        default:

          
            break;
    }
    
    // Guardamos en el array total de pelis Guardadas en el navegador
    // para sacarlas luego en el portfolio del perfil del usuario

    console.log(userTotalPelisSave);

    localStorage.setItem('Peliculas Fav Guardadas', JSON.stringify(userTotalPelisSave));

}
    `
    </div>
    `
// Mostrar Pelicuas

// Renderizamos Peliculas obtenidas de listas de la API The Movie DB

 // Peliculas Acción

 function renderizarPelisAccion() {
    fetch('https://api.themoviedb.org/4/list/8213257?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      
        desConectados.forEach(genero => {
            document.getElementById(genero).disabled = false;
        });

        document.getElementById('Acción').disabled = true;

      const topPelisAccion = resp.results;
      console.log(topPelisAccion);


      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
        
          topPelisAccion.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
    

    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 


// Peliculas Ciencia Ficción 


function renderizarPelis_CF() {
    fetch('https://api.themoviedb.org/4/list/8213341?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topPelisAccion = resp.results;
      console.log(topPelisAccion);
      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
        
          topPelisAccion.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
        
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 

// Peliculas Comedia

function renderizarPelis_Comedia() {
    fetch('https://api.themoviedb.org/4/list/8213816?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topPelisComedia = resp.results;
      console.log(topPelisComedia);
      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
        
          topPelisComedia.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 

// Peliculas Drama

function renderizarPelis_Drama() {
    fetch('https://api.themoviedb.org/4/list/8213822?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topPelisDrama = resp.results;
      console.log(topPelisDrama);
      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topPelisDrama.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 

// Peliculas Suspense

function renderizarPelis_Suspense() {
    fetch('https://api.themoviedb.org/4/list/8213850?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topPelisSuspense = resp.results;
      console.log(topPelisSuspense);
      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topPelisSuspense.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 

// Peliculas Terror

function renderizarPelis_Terror() {
    fetch('https://api.themoviedb.org/4/list/8213853?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topPelisTerror = resp.results;
      console.log(topPelisTerror);
      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topPelisTerror.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 

// Peliculas Musicales

function renderizarPelisMusical() {
    fetch('https://api.themoviedb.org/4/list/8213856?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topPelisMusica = resp.results;
      console.log(topPelisMusica);
      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topPelisMusica.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 


// Peliculas Familia

function renderizarPelisFamilia() {
    fetch('https://api.themoviedb.org/4/list/8213857?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topPelisFamilia = resp.results;
      console.log(topPelisFamilia);
      document.getElementById('selectedPelis').innerHTML='';

    let pelisSuggest = document.getElementById('cardsSugestPelis');  
    pelisSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topPelisFamilia.forEach((peli)=>{ 
            
            let peliHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">
                                <h5 class="mt-2 text-center"><strong>${peli.title}</strong></h5>
                                <button id="libsterPeli"  class="btn btn-primary text-center"
                                onclick="mostrarSelectPeli({id: '${peli.id}', poster_path: 'https://image.tmdb.org/t/p/w500${peli.poster_path}', title: '${peli.title}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            pelisSuggest.innerHTML += peliHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 

