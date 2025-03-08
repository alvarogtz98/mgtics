//constructor
function Paciente(nombre,edad,sexo,direccion,telefono,fuma,correoelectronico,observaciones,servicioarealizar){
    this.nombre= nombre;
    this.edad= edad;
    this.sexo= sexo;
    this.direccion= direccion;
    this.telefono= telefono;
    this.fuma= fuma;
    this.correoelectronico= correoelectronico;
    this.observaciones= observaciones;
    this.servicioarealizar= servicioarealizar;

}
//get the inputs from HTML
const inputNombrePaciente = document.getElementById("txtNombrePaciente");
const inputEdad = document.getElementById("txtEdad");
const inputSexo = document.getElementById("txtSexo");
const inputDireccion = document.getElementById("txtDireccion");
const inputTelefono= document.getElementById("txtTelefono");
const inputFuma = document.getElementById("txtFuma");
const inputCorreoElectronico = document.getElementById("txtCorreo-Electronico");
const inputObservaciones = document.getElementById("txtObservaciones");
const inputServicioaRealizar = document.getElementById("txtServicio-a-Realizar");


let p;

function Registrar(){
    
    // crear objeto
    let newPaciente = new Paciente(inputNombrePaciente.value,inputEdad.value,inputSexo.value,inputDireccion.value,inputTelefono.value, inputFuma.value,inputCorreoElectronico.value,inputObservaciones.value, inputServicioaRealizar.value );
    //desplegar el obj
    if(inputNombrePaciente.value == ""){
        alert("Ingresa el nombre");
    }
    else{
        if(inputServicioaRealizar.value == ""){
            alert("Ingresa Servicio");
        }
    }

    //mostrar datos capturados del usuario en contactos

    const lista = document.getElementById("list");

    lista.innerHTML = `
        <p><strong>Nombre:</strong> ${newPaciente.nombre}</p>
        <p><strong>Edad:</strong> ${newPaciente.edad}</p>
        <p><strong>Sexo:</strong> ${newPaciente.sexo}</p>
        <p><strong>Direccion:</strong> ${newPaciente.direccion}</p>
        <p><strong>Telefono:</strong> ${newPaciente.telefono}</p>
        <p><strong>Correo-Electronico:</strong> ${newPaciente.correoelectronico}</p>
        <p><strong>Observaciones:</strong> ${newPaciente.observaciones}</p>
        <p><strong>Servicio-a-Realizar:</strong> ${newPaciente.servicioarealizar}</p>
    `;



}

