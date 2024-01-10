(function () {
    const inputPonente = document.querySelector("#ponenteEvento");

    if(inputPonente) {
        let ponentes = [];
        let ponentesFiltrados = [];

        const inputHiddenPonente = document.querySelector("[name=ponente_id]");
        const listadoPonentes = document.querySelector("#listado-ponentes");

        obtenerPonentes();
        inputPonente.addEventListener('input', buscarPonentes);

        if(inputHiddenPonente.value) {

            async function iniciarApp() {
                const ponente = await obtenerPonente(inputHiddenPonente.value);

                const {nombre, apellido} = ponente;

                const ponenteDOM = document.createElement('LI');
                ponenteDOM.classList.add("listado-ponentes__ponente", "listado-ponentes__ponente--seleccionado", "listado-ponentes__ponente--con-margen");
                ponenteDOM.textContent = `${nombre} ${apellido}`;
                
                listadoPonentes.appendChild(ponenteDOM);

                // Estilos al label
                labelPonente.classList.add('formulario__label--li');
                inputPonente.addEventListener('input', verificarElementos);
            }

            function verificarElementos() {
                    
                if (listadoPonentes.getElementsByTagName('li').length > 0) {
                    labelPonente.classList.add('formulario__label--li');

                } else {
                    labelPonente.classList.remove('formulario__label--li');
                }
            }

            iniciarApp();
            inputPonente.addEventListener('input', iniciarApp);
        }

        async function obtenerPonentes() {
            const url = '/api/ponentes'
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            formatearPonentes(resultado);
        }

        async function obtenerPonente(id) {
            const url = `/api/ponente?id=${id}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
        
            return resultado;
        }
        
        function formatearPonentes(resultado = []) {
            ponentes = resultado.map( ponente => {
                return {
                    nombre: `${ponente.nombre.trim()} ${ponente.apellido.trim()}`,
                    id: ponente.id
                }
            });
        }

        // Función para escapar caracteres especiales de una cadena
        function escapeRegExp(str) {
            return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }

        function buscarPonentes(e) {
            const busqueda = e.target.value;
        
            if (busqueda.length > 3) {
                // Utilizar escapeRegExp para tratar la entrada del usuario como literal en la expresión regular
                const expresion = new RegExp(escapeRegExp(busqueda), "i");
        
                ponentesFiltrados = ponentes.filter(ponente => {
                    // Utilizar normalize para tratar caracteres acentuados
                    const nombreNormalizado = ponente.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    
                    if (nombreNormalizado.search(expresion) !== -1) {
                        return ponente;
                    }
                });
            } else {
                ponentesFiltrados = [];
            }
        
        mostrarPonentes();
        }
        
        function mostrarPonentes() {

            // Agrega un evento al input para detectar cambios
            inputPonente.addEventListener("input", function() {
                if (listadoPonentes.getElementsByTagName("li").length > 0) {
                    listadoPonentes.classList.add("listado-ponentes__ponente--con-margen");
                } else {
                    listadoPonentes.classList.remove("listado-ponentes__ponente--con-margen");
                }
            });

            while(listadoPonentes.firstChild) {
                listadoPonentes.removeChild(listadoPonentes.firstChild)
            }

            if(ponentesFiltrados.length > 0) {
                ponentesFiltrados.forEach( ponente => {
                    const ponenteHTML = document.createElement('LI');
                    ponenteHTML.classList.add("listado-ponentes__ponente");
                    ponenteHTML.textContent = ponente.nombre;
                    ponenteHTML.dataset.ponenteId = ponente.id;
                    ponenteHTML.onclick = seleccionarPonente;
        
                    listadoPonentes.appendChild(ponenteHTML);
                });
            } else if (inputPonente.value.length > 3) {
                const noResultado = document.createElement('P');
                noResultado.classList.add('listado-ponentes__no-resultado');
                noResultado.textContent = 'No hay resultados para tu búsqueda';
                
                listadoPonentes.appendChild(noResultado);
            
            }
                
        }

        function seleccionarPonente(e) {
            const ponente = e.target;

            const ponentePrevio = document.querySelector(".listado-ponentes__ponente--seleccionado");

            if(ponentePrevio) {
                ponentePrevio.classList.remove("listado-ponentes__ponente--seleccionado");
            }

            ponente.classList.add("listado-ponentes__ponente--seleccionado");
            
            inputHiddenPonente.value = ponente.dataset.ponenteId;
        }
    
    }

})();