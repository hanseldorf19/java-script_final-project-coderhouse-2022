
//Funciones

// Función Seleccionar y Mostrar

let userSelectedPelis = [];
let userGuardadasPelis = [];


    
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

// Guardar CADA PELI seleccionada y mostrarlas en una lista

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

// Quitar y Poner CADA PELI

let pelisResume = document.getElementById('TusPelis');

// Quitar peliculas 


    function quitarSelectpeli(peliSelecTitle){

        arrayIntermedio=[];
            for(let i=0;i<userSelectedPelis.length;i++){
                
                if(userSelectedPelis[i].title!==peliSelecTitle){
                    arrayIntermedio.push(userSelectedPelis[i]);
                }
            }

            userSelectedPelis=arrayIntermedio;
           // volvemos a renderizar
        
           console.log(userSelectedPelis);
        
           pelisResume.innerHTML= 
           
           `
           <button id="Continuar"  class="btn btn-dark text-center my-3"
           onclick="guardarContinuar({title: '${peliSelecTitle}'})">Guardar y Continuar</button>
   
           `
           userSelectedPelis.forEach((peliSelecTitle)=> {
              // if(peliSelecTitle.title!=peliSelecTitle){
               let auxHtml =
               
               `
               <li>${peliSelecTitle.title}</li>
   
               `
              // }
               pelisResume.innerHTML += auxHtml;
               
           });
   
           let PeliQuitar = document.querySelector('#peliSel');
           PeliQuitar.remove('peliSel');

    }



// GUARDAR PELIS POR GENERO, limpiar y continuar a la segunda selección

let pelisSave1 = []
let pelisSave2 = []
let pelisSave3 = []

function guardarContinuar(){
    
        
    document.getElementById(tusGenPelis[tusGenPelis.length -1]).disable = false;
    console.log(tusGenPelis[tusGenPelis.length -1])
    

    // Borramos las pelis sugeridas y seleccionadas

    document.getElementById('cardsSugestPelis').innerHTML='';
    document.getElementById('selectedPelis').innerHTML='';
    pelisResume.innerHTML = '';
    

    // Monstramos las guardadas para cada grupo

    switch (tusGenPelis.length) {

        case 1:

            for (let i = 0; i < userSelectedPelis.length; i++) {
                pelisSave1.push(userSelectedPelis[i]);
                
            }
           
            
            console.log(pelisSave1)
            let guardadas1 = document.getElementById('Pelis_guardadas1');
    
            guardadas1.innerHTML=
            `<div class="rounded p-2 bg-success text-white w-75">
            <h5>${tusGenPelis[0]}</h5>`

            pelisSave1.forEach((peli)=> {
                    
                let auxHtml =
                
                `
                <li>${peli.title}</li>

                `
                
                guardadas1.innerHTML += auxHtml;
                
            });
            
            break;

        case 2:
            
            pelisSave2 = userSelectedPelis.filter(peli => !pelisSave1.includes(peli));

            console.log(pelisSave2)
           
            let guardadas2 = document.getElementById('Pelis_guardadas2');
    
            guardadas2.innerHTML=
            `<div class="rounded p-2 bg-success text-white w-75">
            <h5>${tusGenPelis[1]}</h5>`

            pelisSave2.forEach((peli)=> {
                    
                let auxHtml1 =
                
                `
                <li>${peli.title}</li>

                `
                
                guardadas2.innerHTML += auxHtml1;
                
            });

            break;
        
            case 3:
                pelisSave1_y_2 = pelisSave1.concat(pelisSave2);

                pelisSave3 = userSelectedPelis.filter(peli => !pelisSave1_y_2.includes(peli));
            
                console.log(pelisSave1_y_2)
               
                
                let guardadas3 = document.getElementById('Pelis_guardadas3');
        
                guardadas3.innerHTML=
                `<div class="rounded p-2 bg-success w-75 text-white">
                <h5>${tusGenPelis[2]}</h5>`
    
                pelisSave3.forEach((peli)=> {
                        
                    let auxHtml2 =
                    
                    `
                    <li>${peli.title}</li>
    
                    `
                    
                    guardadas3.innerHTML += auxHtml2;
                    
                });

                
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

                break;

        default:
            console.log(tusGenPelis);
            break;
    }
    

}
    `
    </div>
    `

// Peliculas

 // Peliculas Accion

 function renderizarPelisAccion(genPelis) {
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

