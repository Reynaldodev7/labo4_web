let form = document.querySelector("#form-dia");
let dia = document.querySelector("#dia");

form.addEventListener("submit",(e) => {

    e.preventDefault();
    
    let valorDia = dia.value.toLowerCase();

    switch(valorDia){

        case "lunes": 
                alert("Es Lunes debo atender un cliente especifico.");
                break;
        case "martes": 
                alert("Es Martes visito una agencia fuera de la ciudad.");
                break;
        case "miercoles": 
                alert("Es Miércoles debo llevar a mi hija al ballet (balé).");
                break;
        case "jueves": 
                alert("Es Jueves debo priorizar entregas de desarrollo.");
                break;
        case "viernes": 
                alert("Es Viernes debo atender problemas de manera remota.");
                break;
        case "sabado": 
                alert("Es Sábado debo hacer lo que mi esposa quiera.");
                break;
        default: 
                alert("No ingresaste un dia de la semana registrado o valido");
                break;
    }
})