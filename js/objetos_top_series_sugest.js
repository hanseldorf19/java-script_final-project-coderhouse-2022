
// Variables

let userselectedSeries = [];

userTotalSeriesSave = [];

localStorage.setItem('Series Fav Guardadas', JSON.stringify(userselectedSeries));

//Funciones

// Función Seleccionar y Mostrar (con botones Guardar y Quitar)

    
function mostrarSelectserie(serieSelect){
    console.log('Esta es la serie seleccionada '+ serieSelect.name);
    
    let serieSelected = document.getElementById('selectedSeries')
        
        let serieHTML = `
               
                <div id="serieSel" class="col-4 col-md-2 mb-1 mx-2 mt-2>
                    <div class="card">
                        <div class="card-body">
                        <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serieSelect.poster_path}" alt="${serieSelect.name}">
                        <h5 class="mt-2 text-center overflow-hidden"><strong>${serieSelect.name}</strong></h5>
                        <button id="guardarserie"  class="btn btn-success text-center fs-6 my-1 ml-3"
                        onclick="guardarSelectserie({name: '${serieSelect.name}'})">Guardar</button>
                        <button id="quitarserie"  class="btn btn-danger text-center fs-6 my-1 ml-3"
                        onclick="quitarSelectserie({name: '${serieSelect.name}'})">Quitar</button>
                        
                    </div>
                </div>  

            `
           

        serieSelected.innerHTML += serieHTML 
        
    }

//  Mostrar en una lista las Series listas para guardar


function guardarSelectserie(serie){

    userselectedSeries.push(serie);
    console.log(userselectedSeries);
    
    seriesResume.innerHTML= 
    
    `
    <button id="Guardar_Continuar"  class="btn btn-dark text-center my-3"
    onclick="guardarContinuar({name: '${serie}'})">Guardar y Continuar</button>

    `
    userselectedSeries.forEach((serie)=> {
        
        let auxHtml =
        
        `
        <li>${serie.name}</li>

        `
        
        seriesResume.innerHTML += auxHtml;
        
    });

}

// Quitar y Poner CADA SERIE a la lista y a seleccionados

let seriesResume = document.getElementById('TusSeries');

// Quitar Series


    function quitarSelectserie(serie){

        // Quitar Series de la Lista (botón Quitar)

        arrayIntermedio=[];
            for(let i=0;i<userselectedSeries.length;i++){
                
                if(userselectedSeries[i].name!==serie.name){
                    arrayIntermedio.push(userselectedSeries[i]);
                }
            }

            userselectedSeries = arrayIntermedio;
            console.log(userselectedSeries);

           // Volvemos a crear la lista con el array actualizado con el elemento sustraido

           userselectedSeries.forEach((serie)=> {
              
               let auxHtml =
               
               `
               <li>${serie.name}</li>
   
               `
          
               seriesResume.innerHTML += auxHtml;
               
           });
   
           // Quitamos el DIV creado #peliSel cuando se genera una peli seleccionada

           let SerieQuitar = document.querySelector('#serieSel');
           SerieQuitar.remove('serieSel');

           // Dibujamos botón "Guardar y Continuar"
           
           seriesResume.innerHTML= 
           
           `
           <button id="Continuar"  class="btn btn-dark text-center my-3"
           onclick="guardarContinuar({name: '${serie.name}'})">Guardar y Continuar</button>
   
           `

    }



// GUARDAR SERIES POR GENERO, limpiar y continuar a la segunda selección - Botón Guardar y Continuar

let seriesSave1 = []
let seriesSave2 = []
let seriesSave3 = []

function guardarContinuar(){
    
        
    document.getElementById(tusGenSeries[tusGenSeries.length -1]).disable = false;
    console.log(tusGenSeries[tusGenSeries.length -1])
    

    // Borramos las series sugeridas y seleccionadas

    document.getElementById('cardsSugestSeries').innerHTML='';
    document.getElementById('selectedSeries').innerHTML='';
    seriesResume.innerHTML = '';
    

    // Monstramos las guardadas para cada genero según lo largo que 
    // sea el array con los generos seleccionas (máx 3)

    switch (tusGenSeries.length) {


        case 1:

            for (let i = 0; i < userselectedSeries.length; i++) {
                seriesSave1.push(userselectedSeries[i]);
                
            }
           
            
            console.log(seriesSave1)

            let guardadas1 = document.getElementById('Series_guardadas1');
    
            // Aparece el título del genero 1 guardado

            guardadas1.innerHTML=
            `<div class="rounded p-2 bg-success text-white w-75">
            <h5>${tusGenSeries[0]}</h5>`

            // Redibujamos lista de series guardadas del genero 1
            
            seriesSave1.forEach((serie)=> {
                    
                let auxHtml =
                
                `
                <li>${serie.name}</li>

                `
                
                guardadas1.innerHTML += auxHtml;
                
            });


            
            break;

        case 2:

            // Obtenemos el array filtrando y quitando las peliculas del genero guardado 1
            
            seriesSave2 = userselectedSeries.filter(serie => !seriesSave1.includes(serie));

            console.log(seriesSave2)
           
            let guardadas2 = document.getElementById('Series_guardadas2');

            // Aparece el título del genero 2 guardado
    
            guardadas2.innerHTML=
            `<div class="rounded p-2 bg-success text-white w-75">
            <h5>${tusGenSeries[1]}</h5>`

            // Redibujamos lista de series guardadas del genero 2

            seriesSave2.forEach((serie)=> {
                    
                let auxHtml1 =
                
                `
                <li>${serie.name}</li>

                `
                
                guardadas2.innerHTML += auxHtml1;
                
            });

            break;
        
        case 3:

            // Obtenemos el array del genero 3
            // Creamos un array auxiliar que concatena el 1 y el 2

            seriesSave1_y_2 = seriesSave1.concat(seriesSave2);

            seriesSave3 = userselectedSeries.filter(serie => !seriesSave1_y_2.includes(serie));
            
            console.log(seriesSave1_y_2)
               
                
            let guardadas3 = document.getElementById('Series_guardadas3');
        
            // Aparece el título del genero 3 guardado

            guardadas3.innerHTML=
            `<div class="rounded p-2 bg-success w-75 text-white">
            <h5>${tusGenSeries[2]}</h5>`

            // Redibujamos lista de series guardadas del genero 3
    
            seriesSave2.forEach((serie)=> {
                        
                let auxHtml2 =
                    
                `
                <li>${serie.name}</li>
    
                `
                    
                 guardadas3.innerHTML += auxHtml2;
                    
                })
            
              

        
        // Llegados a los 3 generos guardados y avisamos con un Sweet Alert para continuar

                
            setTimeout(() => {
                   
                Swal.fire({
                    customClass: {
                        confirmButton: 'btn btn-prymary',
                        cancelButton: 'btn btn-danger',
                      },
                    title: 'Gracias. ¿Quiere ver tu Perfil?',
                    icon: 'success',
                    showCancelButton: true,
                confirmButtonText: `<a class="text-decoration-none text-white button_link" href="perfil-user.html">¡Sí, vamos allá!</a>`,
                cancelButtonText: `<a class="text-decoration-none text-white button_link" href="perfil-gustos-series.html">No, modificar Series</a>`
                    
                }, 5000);       
                
                })

        // Obtenemos un array con el total de las pelis seleccionadas y guardadas

                userTotalSeriesSave = seriesSave1_y_2.concat(seriesSave3);

                break;

        default:

            Alert ('Debe seleccionar 3 generos y sus series');

            break;
    }

    // Guardamos en el array total de pelis Guardadas en el navegador
    // para sacarlas luego en el portfolio del perfil del usuario

    console.log(userTotalSeriesSave);
    localStorage.setItem('Series Fav Guardadas', JSON.stringify(userTotalSeriesSave));
    

}
    
// Mostrar Series

// Renderizamos Peliculas obtenidas de listas de la API The Movie DB


 // Series Acción y Aventuras

 function renderizarSeriesAccion(genSeries) {
    fetch('https://api.themoviedb.org/4/list/8214953?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      
        desConectados.forEach(genero => {
            document.getElementById(genero).disabled = false;
        });

        document.getElementById('Acción y Aventuras').disabled = true;

        const topSeriesAccion = resp.results;
        console.log(topSeriesAccion);


        document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
        
          topSeriesAccion.forEach((serie)=>{ 
            
            let serieHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.serie}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML += serieHTML
            
        });
    

    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 

// Series Aniamción


function renderizarSeries_Anim() {
    fetch('https://api.themoviedb.org/4/list/8214956?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topSeriesAccion = resp.results;
      console.log(topSeriesAccion);
      document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
        
          topSeriesAccion.forEach((serie)=>{ 
            
            let serieHTML =  `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML+= serieHTML
            
        });
        
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 

// serieculas Comedia

function renderizarSeries_Comedia() {
    fetch('https://api.themoviedb.org/4/list/8214959?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topSeriesComedia = resp.results;
      console.log(topSeriesComedia);
      document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
        
          topSeriesComedia.forEach((serie)=>{ 
            
            let serieHTML =  `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML+= serieHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 



// Series Crimen


function renderizarSeries_Crimen() {
    fetch('https://api.themoviedb.org/4/list/8214961?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topseriesCrimen = resp.results;
      console.log(topseriesCrimen);
      document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topseriesCrimen.forEach((serie)=>{ 
            
            let serieHTML =  `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML+= serieHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 

// Series Drama


function renderizarSeries_Drama() {
    fetch('https://api.themoviedb.org/4/list/8214962?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topseriesDrama = resp.results;
      console.log(topseriesDrama);
      document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topseriesDrama.forEach((serie)=>{ 
            
            let serieHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML+= serieHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 

// Series Ciencia Ficcion

function renderizarSeries_CF() {
    fetch('https://api.themoviedb.org/4/list/8214963?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topSeriesCF = resp.results;
      console.log(topSeriesCF);
      document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topSeriesCF.forEach((serie)=>{ 
            
            let serieHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML+= serieHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 

// Series Guerra

function renderizarSeriesGuerra() {
    fetch('https://api.themoviedb.org/4/list/8214964?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topseriesGuerra = resp.results;
      console.log(topseriesGuerra);
      document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topseriesGuerra.forEach((serie)=>{ 
            
            let serieHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML+= serieHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 


// Series Infantil

function renderizarSeriesInfantil() {
    fetch('https://api.themoviedb.org/4/list/8214965?page=1&api_key=161f4589b4111b17189d0d3aece041e3&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const topSeriesInfantil = resp.results;
      console.log(topSeriesInfantil);
      document.getElementById('selectedSeries').innerHTML='';

    let seriesSuggest = document.getElementById('cardsSugestSeries');  
    seriesSuggest.innerHTML = 
        `<div class="mt-1 mb-2 d-block">
        <h5>Selecciona las que más te gusten</h5>
        </div>
        
          `;
        
          topSeriesInfantil.forEach((serie)=>{ 
            
            let serieHTML = `
            
                    <div class="col-4 col-md-2 mb-1 mx-2 mt-2>
                        <div class="card">
                            <div class="card-body">
                                <img class="card-img-top rounded" src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                                <h5 class="mt-2 text-center"><strong>${serie.name}</strong></h5>
                                <button id="libsterserie"  class="btn btn-primary text-center"
                                onclick="mostrarSelectserie({id: '${serie.id}', poster_path: 'https://image.tmdb.org/t/p/w500${serie.poster_path}', name: '${serie.name}'})">Libster</button>
                            </div>
                        </div>
                    </div> 
            
            `
            
            seriesSuggest.innerHTML+= serieHTML
            
        });
    
    
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
} 

