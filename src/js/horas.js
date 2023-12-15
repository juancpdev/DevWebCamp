(function() { 

    const busqueda = {
        categoria_id: '',
        dia: ''
    }

    const dias = document.querySelectorAll("[name=dia]");
    const inputHiddenDia = document.querySelector("[name=dia_id]");
    const categoria_id = document.querySelector("[name=categoria_id]");

    dias.forEach(dia => dia.addEventListener('change', terminoBusqueda));
    categoria_id.addEventListener('change', terminoBusqueda);

    function terminoBusqueda(e) {
        inputHiddenDia.value = e.target.value
        
        busqueda[e.target.name] = e.target.value;

        
        console.log(busqueda);
    }

})();