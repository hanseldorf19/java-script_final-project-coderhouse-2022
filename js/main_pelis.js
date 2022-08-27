// Saludo usuario y mostrar foto

let nameUser = localStorage.getItem('usuario');
document.getElementById('saludoUser').innerHTML =
 ` 
 <h5>Hola <p class="text-primary">${nameUser}</p></h5>`;
 avatar = localStorage.getItem('userPic');
 document.getElementById("display-image").style.backgroundImage = `url(${avatar})`;
 console.log(nameUser);


// VARIABLES

const tusPelis =[];

let topPelis;

let tusGenPelis = [];

let gensCache = [];
listaGenPelis_Select = [];

// FUNCIONES

// Creamos la lista en Botonones con los generos de la API de themoviedb.org, seleccionamos los que nos interesa
// Con el index de cada objeto

Gens_btns = document.getElementById('listGeners');

const listaGenPelis = [];

function crearLista() {

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=161f4589b4111b17189d0d3aece041e3&&language=es')
    .then((respIni)=>(respIni.json()))
    .then((resp)=> {
      const listaGenPelis = resp.genres;
      console.log(resp);

        listaGenPelis_Select = [listaGenPelis[0].name, listaGenPelis[14].name,listaGenPelis[3].name,listaGenPelis[6].name,listaGenPelis[16].name,listaGenPelis[10].name,listaGenPelis[11].name,listaGenPelis[7].name ]

        for (let i = 0; i < listaGenPelis_Select.length; i++) {
            let itemsListHtmL =
            
            `
            <button id='${listaGenPelis_Select[i]}' class="btn btn-secondary m-2" onclick="processGenPelis(name= '${listaGenPelis_Select[i]}')">${listaGenPelis_Select[i]}</button>
            
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

// Cada Botón llama a la función que renderiza las Peliculas del genero seleccionado
//Conecta y desconecta botones

function processGenPelis(genPelis) {


    switch (genPelis) {
        case 'Acción':
            tusGenPelis.push(genPelis);

            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Tu selección</h4>
            <p>Pulsa para ver <strong>Peliculas sugerencias</strong></p>
            <button class="btn btn-primary" onclick="renderizarPelisAccion(name= '${listaGenPelis_Select}')">Acción</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Acción')]}')">Borrar</button>
            
            `
            desConectados = listaGenPelis_Select.filter(genero => genero != genPelis);

            desConectados.forEach(genero => {
                document.getElementById(genero).disabled = true;
            });


            break;

        case 'Ciencia ficción':
            tusGenPelis.push(genPelis);

            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Tu selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarPelis_CF(name= '${listaGenPelis_Select}')">Ciencia ficción</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Ciencia ficción')]}')">Borrar</button>
            `
            document.getElementById('Ciencia ficción').disabled = true;

            break;

        case 'Comedia':
            tusGenPelis.push(genPelis);
            

            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarPelis_Comedia(name= '${listaGenPelis_Select}')">Comedia</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Comedia')]}')">Borrar</button>
            `
            document.getElementById('Comedia').disabled = true;
            break;

        case 'Drama':
            tusGenPelis.push(genPelis);
        
            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarPelis_Drama(name= '${listaGenPelis_Select}')">Drama</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Drama')]}')">Borrar</button>
            `
            document.getElementById('Drama').disabled = true;
            break;

        case 'Suspense':
            tusGenPelis.push(genPelis);
            
            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarPelis_Suspense(name= '${listaGenPelis_Select}')">Suspense</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Suspense')]}')">Borrar</button>
            `
            document.getElementById('Suspense').disabled = true;
            break;        

        case 'Terror':
            tusGenPelis.push(genPelis);
            
            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarPelis_Terror(name= '${listaGenPelis_Select}')">Terror</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Terror')]}')">Borrar</button>
            `
            document.getElementById('Terror').disabled = true;
            break; 

         case 'Música':
            tusGenPelis.push(genPelis);
            console.log(tusGenPelis);
    
            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarPelisMusical(name= '${listaGenPelis_Select}')">Música</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Música')]}')">Borrar</button>
            `
            document.getElementById('Música').disabled = true;
            break; 
    
        case 'Familia':
            tusGenPelis.push(genPelis);

            document.getElementById('muestraGenPelisSelected').innerHTML =
            `<h4>Esta es su selección</h4>
            <p>Pulsa para ver sugerencias</p>
            <button class="btn btn-primary" onclick="renderizarPelisFamilia(name= '${listaGenPelis_Select}')">Familia</button>
            <button class="btn btn-danger" onclick="borrarSelecGen(name= '${listaGenPelis_Select[listaGenPelis_Select.indexOf('Familia')]}')">Borrar</button>
            `
            document.getElementById('Familia').disabled = true;       
            
        default:
            console.log('Tus Generos '+ tusGenPelis);
            break;
    }

    console.log(tusGenPelis);
}



// Borramos la selección para poder elegir otra ocpción de genero de Pelicula

function borrarSelecGen (genero){

        switch (genero) {
            case 'Acción':
                document.getElementById('muestraGenPelisSelected').innerHTML = '';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';

                document.getElementById('Acción').disabled = false;
                

            case 'Ciencia ficción':
                document.getElementById('muestraGenPelisSelected').innerHTML ='';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';
                document.getElementById('Ciencia Ficción').disabled = false;
                break;

             case 'Comedia':
                document.getElementById('muestraGenPelisSelected').innerHTML ='';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';
                document.getElementById('Comedia').disabled = false;
                break;

             case 'Drama':
                document.getElementById('muestraGenPelisSelected').innerHTML ='';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';
                
                document.getElementById('Drama').disabled = false;
                break;

             case 'Suspense':
                document.getElementById('muestraGenPelisSelected').innerHTML ='';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';
                document.getElementById('Suspense').disabled = false;
                break;
                
             case 'Terror':
                document.getElementById('muestraGenPelisSelected').innerHTML ='';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';
                document.getElementById('Terror').disabled = false;
                break;

             case 'Música':
                document.getElementById('muestraGenPelisSelected').innerHTML ='';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';
                document.getElementById('Música').disabled = false;
                break;

            case 'Familia':
                document.getElementById('muestraGenPelisSelected').innerHTML ='';
                document.getElementById('cardsSugestPelis').innerHTML='';
                document.getElementById('selectedPelis').innerHTML='';
                document.getElementById('TusPelis').innerHTML='';
                document.getElementById('Familia').disabled = false;
                break;
                
        
            default:
                console.log(genero)
                break;
        }
    
      

    }
    