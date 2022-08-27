// Saludo usuario y mostrar foto

let nameUser = localStorage.getItem('usuario');
document.getElementById('saludoUser').innerHTML =
 ` 
 <h5>Hola <p class="text-primary">${nameUser}</p></h5>`;
 avatar = localStorage.getItem('userPic');
 document.getElementById("display-image").style.backgroundImage = `url(${avatar})`;
 console.log(nameUser);


// VARIABLES

const tusSeries =[];

let topSeries;

let tusGenSeries = [];

listaGenSeries_Select = [];


// FUNCIONES

// FUNCIONES

// Creamos la lista en Botonones con los generos de la API de themoviedb.org, seleccionamos los que nos interesa
// Con el index de cada objeto

Gens_btns = document.getElementById('listGeners');

const listaGenSeries = [];

function crearLista() {

    fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=161f4589b4111b17189d0d3aece041e3&&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const listaGenSeries = resp.genres;
      console.log(resp);

        listaGenSeries_Select = ['Acción y Aventuras', listaGenSeries[1].name,listaGenSeries[2].name,listaGenSeries[3].name,listaGenSeries[5].name,'Ciencia Ficción y Fantasia','Guerra y Política','Infantil' ]
        
        // Algunas no vienen traducidas por eso las incluimos en el array directamente.


        for (let i = 0; i < listaGenSeries_Select.length; i++) {
            let itemsListHtmL =
            
            `
            <button id='${listaGenSeries_Select[i]}' class="btn btn-secondary m-2" onclick="processGenSeries(name= '${listaGenSeries_Select[i]}')">${listaGenSeries_Select[i]}</button>
            
            `

            Gens_btns.innerHTML += itemsListHtmL;
             
            
        }

        
    })
    
    .catch((e)=>{
    console.log(e)
    })
    
    } 
    
let desConectados = [];

crearLista();
 
// Cada Botón llama a la función que renderiza las Series del genero seleccionado
// Conecta y desconecta botones

function processGenSeries(genSeries) {


    switch (genSeries) {
        case 'Acción y Aventuras':
            tusGenSeries.push(genSeries);

            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Tu selección</h4>
            <p>Pulsa para ver <strong>Series sugerencias</strong></p>
            <button class="btn btn-primary" onclick="renderizarSeriesAccion(name= '${listaGenSeries_Select}')">Acción y Aventuras</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Acción y Aventuras')]}')">Borrar</button>
            
            `
            desConectados = listaGenSeries_Select.filter(genero => genero != genSeries);
            console.log('estos son '+ desConectados)

            desConectados.forEach(genero => {
                document.getElementById(genero).disabled = true;
            });


            break;

        case 'Animación':
            tusGenSeries.push(genSeries);

            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Tu selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarSeries_Anim(name= '${listaGenSeries_Select}')">Animación</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Ciencia ficción')]}')">Borrar</button>
            `
            document.getElementById('Animación').disabled = true;

            break;

        case 'Comedia':
            tusGenSeries.push(genSeries);
            

            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarSeries_Comedia(name= '${listaGenSeries_Select}')">Comedia</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Comedia')]}')">Borrar</button>
            `
            document.getElementById('Comedia').disabled = true;
            break;

        case 'Crimen':
            tusGenSeries.push(genSeries);
        
            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarSeries_Crimen(name= '${listaGenSeries_Select}')">Crimen</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Crimen')]}')">Borrar</button>
            `
            document.getElementById('Crimen').disabled = true;
            break;

        case 'Drama':
            tusGenSeries.push(genSeries);
            
            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarSeries_Drama(name= '${listaGenSeries_Select}')">Drama</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Drama')]}')">Borrar</button>
            `
            document.getElementById('Drama').disabled = true;
            break;        

        case 'Ciencia Ficción y Fantasia':
            tusGenSeries.push(genSeries);
            
            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarSeries_CF(name= '${listaGenSeries_Select}')">Ciencia Ficción y Fantasia</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Ciencia Ficción y Fantasia')]}')">Borrar</button>
            `
            document.getElementById('Ciencia Ficción y Fantasia').disabled = true;
            break; 

         case 'Guerra y Política':
            tusGenSeries.push(genSeries);
            
    
            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarSeriesGuerra(name= '${listaGenSeries_Select}')">Guerra y Política</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Guerra y Política')]}')">Borrar</button>
            `
            document.getElementById('Guerra y Política').disabled = true;
            break; 
    
        case 'Infantil':
            tusGenSeries.push(genSeries);

            document.getElementById('muestraGenSeriessSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarSeriesInfantil(name= '${listaGenSeries_Select}')">Infantil</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenSeries_Select[listaGenSeries_Select.indexOf('Infantil')]}')">Borrar</button>
            `
            document.getElementById('Infantil').disabled = true;       
            
        default:
            console.log('Tus Generos '+ tusGenSeries);
            break;
    }

    console.log(tusGenSeries);
}

// Borramos la selección para poder elegir otra ocpción de genero de Pelicula

function borrarSelecGen (genero){

        switch (genero) {
            case 'Acción y Aventuras':
                document.getElementById('muestraGenSeriessSelected').innerHTML = '';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';

                document.getElementById('Acción y Aventuras').disabled = false;
                

            case 'Animación':
                document.getElementById('muestraGenSeriessSelected').innerHTML ='';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';
                document.getElementById('Animación').disabled = false;
                break;

             case 'Comedia':
                document.getElementById('muestraGenSeriessSelected').innerHTML ='';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';
                document.getElementById('Comedia').disabled = false;
                break;

             case 'Crimen':
                document.getElementById('muestraGenSeriessSelected').innerHTML ='';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';
                
                document.getElementById('Crimen').disabled = false;
                break;

             case 'Drama':
                document.getElementById('muestraGenSeriessSelected').innerHTML ='';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';
                document.getElementById('Drama').disabled = false;
                break;

             case 'Ciencia Ficción y Fantasia':
                document.getElementById('muestraGenSeriessSelected').innerHTML ='';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';
                document.getElementById('Ciencia Ficción y Fantasia').disabled = false;
                break;
                
             case 'Guerra y Política':
                document.getElementById('muestraGenSeriessSelected').innerHTML ='';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';
                document.getElementById('Guerra y Políticas').disabled = false;
                break;


            case 'Infantil':
                document.getElementById('muestraGenSeriessSelected').innerHTML ='';
                document.getElementById('cardsSugestSeries').innerHTML='';
                document.getElementById('selectedSeries').innerHTML='';
                document.getElementById('TusSeries').innerHTML='';
                document.getElementById('Infantil').disabled = false;
                break;
                
        
            default:
                console.log(genero)
                break;
        }
    
      

    }
    