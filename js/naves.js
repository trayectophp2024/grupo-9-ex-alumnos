const draggables = document.querySelectorAll('.draggable');  
const dropZone = document.getElementById('dropZone');  
const info = document.getElementById('info');  
const clearButton = document.getElementById('clearButton');  

// Añadir eventos de drag a cada draggable   
draggables.forEach(draggable => {  
    draggable.addEventListener('dragstart', () => {  
        draggable.classList.add('is-dragging');  
        // Almacenar la información relacionada con el draggable  
        info.dataset.currentInfo = draggable.dataset.info;  // Suponiendo que cada draggable tiene un atributo 'data-info'.  
    });  

    draggable.addEventListener('dragend', () => {  
        draggable.classList.remove('is-dragging');  
    });  
});  

// Añadir eventos de drop zone  
dropZone.addEventListener('dragover', (event) => {  
    event.preventDefault(); // Necesario para permitir el drop  
    dropZone.classList.add('highlight');  
});  

dropZone.addEventListener('dragleave', () => {  
    dropZone.classList.remove('highlight');  
});  

dropZone.addEventListener('drop', (event) => {  
    event.preventDefault();  
    dropZone.classList.remove('highlight');  
    showInfo(info.dataset.currentInfo);  // Pasar la información del draggable  
});  

// Modificar la función showInfo para que reciba un argumento  
function showInfo(infoText) {  
    // Ocultar todos los bloques de información  
    const allInfoBlocks = document.querySelectorAll('.draggablecuerpoinfo > div');  
    allInfoBlocks.forEach(block => {  
        block.style.display = 'none';  // Ocultar todos los bloques  
    });  

    // Mostrar el bloque de información correspondiente  
    const selectedInfoBlock = document.getElementById(infoText);  
    if (selectedInfoBlock) {  
        selectedInfoBlock.style.display = 'block';  // Mostrar el bloque correspondiente  
    }  

    info.classList.remove('info-hidden');  
    info.classList.add('info-visible');  
}  

// Función para borrar la selección  
function clearSelection() {  
    const allInfoBlocks = document.querySelectorAll('.draggablecuerpoinfo > div');  
    allInfoBlocks.forEach(block => {  
        block.style.display = 'none';  // Ocultar todos los bloques  
    });  
    
    info.classList.remove('info-visible'); // Ocultar la información  
    info.classList.add('info-hidden');  
    dropZone.classList.remove('highlight'); // También borrar el estilo resaltado si está aplicado  
}  

// Añadir evento al botón para limpiar la selección  
clearButton.addEventListener('click', clearSelection);