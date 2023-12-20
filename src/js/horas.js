(function() { 

    const busqueda = {
        categoria_id: '',
        dia: ''
    }

    const dias = document.querySelectorAll("[name=dia]");
    const categoria = document.querySelector("[name=categoria_id]");
    const inputHiddenDia = document.querySelector("[name=dia_id]");
    const inputHiddenHora = document.querySelector("[name=hora_id]");

    dias.forEach(dia => dia.addEventListener('change', terminoBusqueda));
    categoria.addEventListener('change', terminoBusqueda);

    function terminoBusqueda(e) {
        busqueda[e.target.name] = e.target.value;

        // Reiniciar los campos ocultos y el secctor de horas
        inputHiddenHora.value = '';
        inputHiddenDia.value = '';
        
        const horaPrevia = document.querySelector(".horas__hora--seleccionada");
        if(horaPrevia) {
            horaPrevia.classList.remove("horas__hora--seleccionada");
        }

        if(Object.values(busqueda).includes('')){
            return;
        }

        buscarEventos();
    }

    async function buscarEventos() {
        console.log(busqueda);

        const {categoria_id, dia} = busqueda;

        const url = `/api/eventos-horario?categoria_id=${categoria_id}&dia_id=${dia}`

        const resultado = await fetch(url);
        const eventos = await resultado.json();
        obtenerHorasDisponibles(eventos);
    }

    function obtenerHorasDisponibles(eventos) {
        // Reiniciar las horas
        const listadoHoras = document.querySelectorAll(".horas li");
        listadoHoras.forEach( li => li.classList.add("horas__hora--deshabilitada"));

        const horasTomadas = eventos.map(evento => evento.hora_id);
        const listadoHorasArray = Array.from(listadoHoras);

        const resultado = listadoHorasArray.filter(li => !horasTomadas.includes(li.dataset.horaId));
        resultado.forEach( li => li.classList.remove("horas__hora--deshabilitada"));

        const horasDisponibles = document.querySelectorAll(".horas li:not(.horas__hora--deshabilitada)");
        horasDisponibles.forEach(hora => hora.addEventListener('click', seleccionarHora) );

        const horasDeshabilitadas = document.querySelectorAll('.horas__hora--deshabilitada');
        horasDeshabilitadas.forEach(hora => hora.removeEventListener('click', seleccionarHora));
    }

    function seleccionarHora(e) {

        const horaPrevia = document.querySelector(".horas__hora--seleccionada");
        if(horaPrevia) {
            horaPrevia.classList.remove("horas__hora--seleccionada");
        }

        e.target.classList.add("horas__hora--seleccionada");

        inputHiddenHora.value = e.target.dataset.horaId;
        inputHiddenDia.value = busqueda.dia;

    }

})();