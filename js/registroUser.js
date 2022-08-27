//VARIABLES

const boton = document.getElementById('botonRegistro');
const userData = document.getElementById('contenedor');

// FUNCIONES

// Enviamos los datos del form
function processUserData() {

    let nombre = document.getElementById('nombre').value;
    let usuario = document.getElementById('usuario').value;
    localStorage.setItem('usuario', usuario);
    let pass = document.getElementById('passw').value;
    localStorage.setItem('pass', pass);
    let email = document.getElementById('email').value;
    localStorage.setItem('email', email);

    // Permitimos que le usuario chequee los datos antes de seguir
    
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-prymary',
            cancelButton: 'btn btn-danger',
          },
        title: 'Gracias. Por favor comprueba tus datos:',
        icon: 'success',
        html:`
        
        <div class="badge bg-primary text-wrap fs-4">
        <p>Nombre: <strong>${nombre}<strong></p>
        <p>Usuario: <strong>${usuario}<strong></p>
        <p>Contraseña: <strong>${pass}<strong></p>
        <p>Email: <strong>${email}<strong></p>
        </div>`,
        showCancelButton: true,
        confirmButtonText: `<a class="text-decoration-none white button_link" href="src/perfil-gustos-pelis.html">Sí, son correctos</a>`,
        cancelButtonText: 'No, volver a insertar'
        
                
           
        
    })
    
}

// Subir y guardar en el navegador la foto de perfil

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    let imgUrl = localStorage.setItem('userPic', uploaded_image);
    console.log(imgUrl)
  });
  reader.readAsDataURL(this.files[0]);
});