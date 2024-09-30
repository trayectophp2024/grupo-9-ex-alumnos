function redirigirSiSeleccionado(checkboxId) {  
    var checkbox = document.getElementById(checkboxId);  
    if (checkbox.checked) {  
        // Desmarcar todos los checkboxes  
        var checkboxes = document.querySelectorAll("input[type='checkbox']");  
        checkboxes.forEach(function(item) {  
            item.checked = false;  
        });  

        // Redirigir basado en el checkbox seleccionado  
        switch (checkboxId) {  
            case "republica":  
                window.location.href = "republica.html";   
                break;  
            case "imperio":  
                window.location.href = "imperio.html";   
                break;  
            case "alianza":  
                window.location.href = "alianza.html";   
                break;  
            case "orden-jedi":  
                window.location.href = "orden.html";   
                break;  
            case "sith":  
                window.location.href = "sith.html";   
                break;  
            case "caballeros":  
                window.location.href = "caballeros.html";   
                break;  
            case "resistencia":  
                window.location.href = "resistencia.html";   
                break;  
            case "primera-orden":  
                window.location.href = "primera.html";   
                break;  
        }  
    }  
}

