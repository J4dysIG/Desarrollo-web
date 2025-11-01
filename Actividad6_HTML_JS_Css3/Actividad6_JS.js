// Navegación por pestañas
document.querySelectorAll('.tab-button').forEach(boton => {
    boton.addEventListener('click', () => {
        // Remover clase activa de todos los botones y contenidos
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(contenido => contenido.classList.remove('active'));
        
        // Agregar clase activa al botón clickeado
        boton.classList.add('active');
        
        // Mostrar el contenido correspondiente
        const idPestaña = boton.getAttribute('data-tab');
        document.getElementById(idPestaña).classList.add('active');
    });
});

// Conversor de unidades
document.getElementById('convert-btn').addEventListener('click', () => {
    const valor = parseFloat(document.getElementById('value').value);
    const unidadOrigen = document.getElementById('from-unit').value;
    const unidadDestino = document.getElementById('to-unit').value;
    
    if (isNaN(valor)) {
        alert('Por favor ingresa un valor numérico válido.');
        return;
    }
    
    // Factores de conversión a metros
    const factores = {
        mm: 0.001,
        cm: 0.01,
        m: 1
    };
    
    // Convertir a metros primero
    const valorEnMetros = valor * factores[unidadOrigen];
    
    // Convertir a la unidad deseada
    const resultado = valorEnMetros / factores[unidadDestino];
    
    // Mostrar resultado
    document.getElementById('result-value').textContent = 
        `${valor} ${unidadOrigen} = ${resultado.toFixed(6)} ${unidadDestino}`;
    
    // Mostrar conversión completa
    let conversionCompleta = '';
    for (const unidad in factores) {
        const valorConvertido = valorEnMetros / factores[unidad];
        conversionCompleta += `<div>${valorConvertido.toFixed(6)} ${unidad}</div>`;
    }
    document.getElementById('full-conversion').innerHTML = conversionCompleta;
});

// Registro de empresas
const empresas = [];

document.getElementById('company-form').addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const folio = document.getElementById('folio').value;
    const nombre = document.getElementById('name').value;
    const domicilio = document.getElementById('address').value;
    
    // Verificar si el folio ya existe
    if (empresas.some(empresa => empresa.folio === folio)) {
        alert('Ya existe una empresa con ese folio. Por favor usa un folio único.');
        return;
    }
    
    // Agregar empresa a la lista
    empresas.push({ folio, nombre, domicilio });
    
    // Actualizar la lista visual
    actualizarListaEmpresas();
    
    // Limpiar el formulario
    document.getElementById('company-form').reset();
});

function actualizarListaEmpresas() {
    const listaEmpresas = document.getElementById('companies-list');
    
    if (empresas.length === 0) {
        listaEmpresas.innerHTML = '<div class="empty-message">No hay empresas registradas aún.</div>';
        return;
    }
    
    listaEmpresas.innerHTML = '';
    
    empresas.forEach((empresa, indice) => {
        const tarjetaEmpresa = document.createElement('div');
        tarjetaEmpresa.className = 'company-card';
        tarjetaEmpresa.innerHTML = `
            <div class="company-header">
                <div class="company-name">${empresa.nombre}</div>
                <div class="company-folio">Folio: ${empresa.folio}</div>
            </div>
            <div class="company-address">${empresa.domicilio}</div>
            <button class="btn-danger" onclick="eliminarEmpresa(${indice})">Eliminar</button>
        `;
        listaEmpresas.appendChild(tarjetaEmpresa);
    });
}

// Función para eliminar empresa (necesita ser global)
window.eliminarEmpresa = function(indice) {
    if (confirm('¿Estás seguro de que quieres eliminar esta empresa?')) {
        empresas.splice(indice, 1);
        actualizarListaEmpresas();
    }
};