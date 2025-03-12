// Constructor
function Paciente(nombre, edad, sexo, direccion, telefono, fuma, correoElectronico, observaciones, servicioARealizar) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.direccion = direccion;
    this.telefono = telefono;
    this.fuma = fuma;
    this.correoelectronico = correoElectronico;
    this.observaciones = observaciones;
    this.servicioarealizar = servicioARealizar;
}

// Obtener referencias a los inputs del HTML
const inputNombrePaciente = document.getElementById("txtNombrePaciente");
const inputEdad = document.getElementById("txtEdad");
const inputSexo = document.getElementById("txtSexo");
const inputDireccion = document.getElementById("txtDireccion");
const inputTelefono = document.getElementById("txtTelefono");
const inputFuma = document.getElementById("txtFuma");
const inputCorreoElectronico = document.getElementById("txtCorreo-Electronico");
const inputObservaciones = document.getElementById("txtObservaciones");
const inputServicioaRealizar = document.getElementById("txtServicio-a-Realizar");

// Obtener pacientes guardados o inicializar un arreglo vacío
let Paciente1 = JSON.parse(localStorage.getItem("pacientes")) || [];

// Registrar nuevo paciente
function Registrar() {
    // Validación de datos obligatorios
    if (!inputNombrePaciente.value.trim()) {
        alert("Ingresa el nombre");
        return;
    }
    if (!inputServicioaRealizar.value.trim()) {
        alert("Ingresa el servicio a realizar");
        return;
    }

    // Crear objeto paciente
    let newPaciente = new Paciente(
        inputNombrePaciente.value.trim(),
        inputEdad.value.trim(),
        inputSexo.value.trim(),
        inputDireccion.value.trim(),
        inputTelefono.value.trim(),
        inputFuma.checked, // Checkbox
        inputCorreoElectronico.value.trim(),
        inputObservaciones.value.trim(),
        inputServicioaRealizar.value.trim()
    );

    // Agregar a la lista y guardar en localStorage
    Paciente1.push(newPaciente);
    localStorage.setItem("pacientes", JSON.stringify(Paciente1));

    // Mostrar la lista actualizada
    displayPacientes();

    // Limpiar los inputs después del registro
    limpiarFormulario();
}

// Mostrar la lista de pacientes
function displayPacientes() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    Paciente1.forEach((paciente, index) => {
        let pacienteElement = `
        <div>
            <p><strong>Nombre:</strong> ${paciente.nombre}</p>
            <p><strong>Edad:</strong> ${paciente.edad}</p>
            <p><strong>Sexo:</strong> ${paciente.sexo}</p>
            <p><strong>Dirección:</strong> ${paciente.direccion}</p>
            <p><strong>Teléfono:</strong> ${paciente.telefono}</p>
            <p><strong>Fuma:</strong> ${paciente.fuma ? "Sí" : "No"}</p>
            <p><strong>Correo Electrónico:</strong> ${paciente.correoelectronico}</p>
            <p><strong>Observaciones:</strong> ${paciente.observaciones}</p>
            <p><strong>Servicio a Realizar:</strong> ${paciente.servicioarealizar}</p>
            <button class="btn btn-warning" onclick="deletePaciente(${index})">Eliminar</button>
        </div>
        `;
        list.innerHTML += pacienteElement;
    });
}

// Eliminar un paciente por índice
function deletePaciente(index) {
    Paciente1.splice(index, 1);
    localStorage.setItem("pacientes", JSON.stringify(Paciente1));
    displayPacientes();
}

// Limpiar formulario después de registrar
function limpiarFormulario() {
    inputNombrePaciente.value = "";
    inputEdad.value = "";
    inputSexo.value = "";
    inputDireccion.value = "";
    inputTelefono.value = "";
    inputFuma.checked = false;
    inputCorreoElectronico.value = "";
    inputObservaciones.value = "";
    inputServicioaRealizar.value = "";
}

// Mostrar pacientes al cargar la página
document.addEventListener("DOMContentLoaded", displayPacientes);
