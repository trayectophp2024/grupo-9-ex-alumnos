const descripcionDiv = document.querySelector('.descripcionpersonaje');  

// Función para mostrar la barra de desplazamiento  
const showScrollBar = () => {  
    descripcionDiv.style.overflowY = 'scroll'; // Muestra la barra de desplazamiento  
};  

// Función para ocultar la barra de desplazamiento  
const hideScrollBar = () => {  
    descripcionDiv.style.overflowY = 'hidden'; // Oculta la barra de desplazamiento  
};  

// Manejar la interacción del usuario  
descripcionDiv.addEventListener('mouseover', showScrollBar);  
descripcionDiv.addEventListener('mouseout', hideScrollBar);  
