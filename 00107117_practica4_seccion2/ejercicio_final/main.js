let form = document.querySelector("#form-dia");
let dia = document.querySelector("#dia");

form.addEventListener("submit",(e) => {

    e.preventDefault();
    
    let valorDia = parseInt(dia.value);

    

    switch(valorDia){

        case 1: 
                alert("Es Lunes debo atender un cliente especifico.");
                break;
        case 2: 
                alert("Es Martes visito una agencia fuera de la ciudad.");
                break;
        case 3: 
                alert("Es Miércoles debo llevar a mi hija al ballet (balé).");
                break;
        case 4: 
                alert("Es Jueves debo priorizar entregas de desarrollo.");
                break;
        case 5: 
                alert("Es Viernes debo atender problemas de manera remota.");
                break;
        case 6: 
                alert("Es Sábado debo hacer lo que mi esposa quiera.");
                break;
        default: 
                alert("No ingresaste un numero que corresponda a un dia de la semana");
                break;
    }
})