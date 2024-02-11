function confirmDelete(e,t){e.preventDefault(),Swal.fire({title:"Confirmación",text:"¿Estás seguro de que deseas eliminar este registro?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sí, eliminar",cancelButtonText:"Cancelar"}).then(e=>{e.isConfirmed&&document.getElementById(t).submit()})}if(function(){async function e(e,t,o){document.querySelectorAll(".spinner-contenedor").forEach(e=>{e.style.display="flex"});const n=new FormData(e),a=await fetch(t,{method:"POST",body:n});try{const t=await a.json();if(console.log(t),t.debug&&console.log(t.debug),"error"===t.tipo)e.elements.password&&(e.elements.password.value=""),e.elements.password2&&(e.elements.password2.value=""),mostrarAlertas(t.alertas.error,o);else if("exito"===t.tipo){e.reset(),cerrarModal();document.querySelectorAll(".modal").forEach(e=>{e.style.display="none"}),"Registro"===o?Swal.fire({icon:"success",title:"Usuario Registrado",text:"Verifica tu mail para confirmar la cuenta",confirmButtonText:"OK",willClose:()=>{document.body.style.overflow="auto"}}):"Login"===o?"1"===t.datos.admin?window.location.href="/admin/dashboard":window.location.href="/finalizar-registro":"Olvide"===o&&Swal.fire({icon:"success",title:"Verifica tu email",text:"Verifica tu mail para cambiar el password",confirmButtonText:"OK",willClose:()=>{document.body.style.overflow="auto"}})}}catch(e){console.error("Error al analizar la respuesta JSON del servidor")}finally{document.querySelectorAll(".spinner-contenedor").forEach(e=>{e.style.display="none"})}}const t=document.querySelector("#registro .formulario"),o=document.querySelector("#login .formulario"),n=document.querySelector("#olvide .formulario");t&&t.addEventListener("submit",(function(o){o.preventDefault(),e(t,"/api/usuarios/registro","Registro")})),o&&o.addEventListener("submit",(function(t){t.preventDefault(),e(o,"/api/usuarios/login","Login")})),n&&n.addEventListener("submit",(function(t){t.preventDefault(),e(n,"/api/usuarios/olvidePassword","Olvide")})),window.resetearFormulario=function(){const e=document.querySelector(".auth__modal .formulario");resetearFormulario(e)}}(),function(){async function e(e,t,o){document.querySelectorAll(".spinner-contenedor").forEach(e=>{e.style.display="flex"});const n=new FormData(e),a=await fetch(t,{method:"POST",body:n});try{const t=await a.json();if(t.debug&&console.log(t.debug),"error"===t.tipo){mostrarAlertas(t.alertas.error,"Evento");const e=document.querySelector(".formulario__legend");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}else"exito"===t.tipo&&(e.reset(),"Crear"===o?Swal.fire({icon:"success",title:"Evento Creado",text:"Se agregó un nuevo evento",confirmButtonText:"OK",willClose:()=>{document.body.style.overflow="auto"}}).then(()=>{window.location.href="/admin/eventos"}):"Editar"===o&&Swal.fire({icon:"success",title:"Evento Actualizado",text:"Se Actualizo el evento correctamente",confirmButtonText:"OK",willClose:()=>{document.body.style.overflow="auto"}}).then(()=>{window.location.href="/admin/eventos"}))}catch(e){console.error("Error al analizar la respuesta JSON del servidor",e)}finally{document.querySelectorAll(".spinner-contenedor").forEach(e=>{e.style.display="none"})}}const t=document.querySelector("#eventosCrear .formulario"),o=document.querySelector("#eventosEditar .formulario");t&&t.addEventListener("submit",(function(o){o.preventDefault(),e(t,"/admin/eventos/crear","Crear")})),o&&o.addEventListener("submit",(function(t){t.preventDefault();const n=window.location.search,a=new URLSearchParams(n).get("id");if(a){e(o,"/admin/eventos/editar?id="+a,"Editar")}else console.error("ID del evento no encontrado en la URL")}))}(),function(){if(document.querySelector("#horas")){const n=document.querySelectorAll("[name=dia]"),a=document.querySelector("[name=categoria_id]"),r=document.querySelector("[name=dia_id]"),i=document.querySelector("[name=hora_id]");a.addEventListener("change",e),n.forEach(t=>t.addEventListener("change",e));let l={categoria_id:+a.value||"",dia:+r.value||""};if(!Object.values(l).includes("")){!async function(){await t();const e=i.value,n=document.querySelector(`[data-hora-id='${e}']`);n.classList.remove("horas__hora--deshabilitada"),n.classList.add("horas__hora--seleccionada"),n.onclick=o}()}function e(e){l[e.target.name]=e.target.value,i.value="",r.value="";const o=document.querySelector(".horas__hora--seleccionada");o&&o.classList.remove("horas__hora--seleccionada"),Object.values(l).includes("")||t()}async function t(){console.log(l);const{categoria_id:e,dia:t}=l,n=`/api/eventos-horario?categoria_id=${e}&dia_id=${t}`,a=await fetch(n);!function(e){const t=document.querySelectorAll(".horas li");t.forEach(e=>e.classList.add("horas__hora--deshabilitada"));const n=e.map(e=>e.hora_id),a=Array.from(t);a.filter(e=>!n.includes(e.dataset.horaId)).forEach(e=>e.classList.remove("horas__hora--deshabilitada"));document.querySelectorAll(".horas li:not(.horas__hora--deshabilitada)").forEach(e=>e.addEventListener("click",o));document.querySelectorAll(".horas__hora--deshabilitada").forEach(e=>e.removeEventListener("click",o))}(await a.json())}function o(e){const t=document.querySelector(".horas__hora--seleccionada");t&&t.classList.remove("horas__hora--seleccionada"),e.target.classList.add("horas__hora--seleccionada"),i.value=e.target.dataset.horaId,r.value=l.dia}}}(),document.querySelector("#mapa")){const e=-28.636748111311544,t=-65.13351806101399,o=16,n=L.map("mapa").setView([e,t],o);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n),L.marker([e,t]).addTo(n).bindPopup('\n    <h2 class="mapa__heading">DevWebCamp</h2>\n    <p class="mapa__texto">Centro de Convenciones de Los Ángeles</p>\n    ').openPopup()}function seleccionarArchivo(){document.getElementById("imagenPonente").click()}function mostrarNombreArchivo(){var e=document.getElementById("imagenPonente"),t=document.getElementById("mensajeArchivo"),o=e.files.length>0?e.files[0].name:"No se ha seleccionado ningún archivo.";t.textContent=o}function autocompletadoFormulario(){document.querySelectorAll(".formulario__input").forEach(e=>{e.addEventListener("input",(function(){const e=this.nextElementSibling;this.value?e.classList.add("formulario__label--active"):e.classList.remove("formulario__label--active")}))})}function modalAuth(){const e=document.querySelectorAll(".auth"),t=document.querySelector("#login"),o=document.querySelector("#registro"),n=document.querySelector("#olvide"),a=document.querySelectorAll(".login"),r=document.querySelectorAll(".registro"),i=document.querySelectorAll(".olvide"),l=document.querySelectorAll(".modal__close");abrirModal(a,t,o,n),abrirModal(r,o,t,n),abrirModal(i,n,t,o),l.forEach(e=>{e.addEventListener("click",(function(){cerrarModal();const e=this.closest(".modal");setTimeout(()=>{e.style.display="none",document.body.style.overflow="auto",e.querySelector("form").reset()},200)}))}),window.addEventListener("click",(function(t){e.forEach(e=>{t.target===e&&(cerrarModal(),setTimeout(()=>{document.querySelectorAll(".modal").forEach(e=>{e.style.display="none",document.body.style.overflow="auto",e.querySelector("form").reset()})},200))})}))}function abrirModal(e,t,o,n){e.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault(),cambiarModal(),reiniciarFormu(o,n),modalAnimacion(t,o,n)}))})}function modalAnimacion(e,t,o){e.style.display="block",t.style.display="none",o.style.display="none",document.body.style.overflow="hidden",setTimeout(()=>{e.children[0].children[0].classList.toggle("animar")},50)}function cerrarModal(){limpiarAlertas("Registro"),limpiarAlertas("Login"),limpiarAlertas("Olvide"),limpiarLabels("registro"),limpiarLabels("login"),limpiarLabels("olvide"),setTimeout(()=>{document.querySelectorAll(".auth__modal").forEach(e=>{e.classList.remove("animar")})},0)}function cambiarModal(){limpiarAlertas("Registro"),limpiarAlertas("Login"),limpiarAlertas("Olvide"),limpiarLabels("registro"),limpiarLabels("login"),limpiarLabels("olvide");const e=document.querySelectorAll(".acciones__enlace"),t=document.querySelectorAll(".auth__modal");e.forEach(e=>{e.addEventListener("click",(function(e){t.forEach(e=>{e.classList.remove("animar")})}))})}function reiniciarFormu(e,t){e.querySelector("form").reset(),t.querySelector("form").reset()}function limpiarLabels(e){document.querySelectorAll("#"+e+" .formulario__label").forEach(e=>{e.classList.remove("formulario__label--active")})}function limpiarAlertas(e){["Nombre","Apellido","Email","Email2","Password","Password2"].forEach(t=>{const o=document.getElementById("alerta"+t+e),n=document.getElementById(t.toLowerCase()+e),a=document.getElementById(t.toLowerCase()+e+"Icono");o&&(o.textContent="",o.classList.remove("error")),n&&n.classList.remove("error-input"),a&&a.classList.remove("error-icono")})}function mostrarAlertas(e,t){["Nombre","Apellido","Email","Email2","Password","Password2","Ciudad","Pais","Imagen","Tags","Descripcion","Categoria","DiaHora","Ponente","Disponibles"].forEach(e=>{const o=document.getElementById("alerta"+e+t),n=document.getElementById(e.toLowerCase()+t),a=document.getElementById(e.toLowerCase()+t+"Icono");o&&(o.textContent="",o.classList.remove("error")),n&&n.classList.remove("error-input"),a&&a.classList.remove("error-icono")}),e&&e.length>0&&e.forEach(e=>{let o="";e.includes("Nombre")?o="Nombre":e.includes("Apellido")?o="Apellido":e.includes("Email")?o="Email":e.includes("mayor")?o="Password":e.includes("coinciden")?o="Password2":e.includes("registrado")?o="Email2":e.includes("Incorrecto")?o="Password2":e.includes("confirmado")?o="Email2":e.includes("Ciudad")?o="Ciudad":e.includes("País")?o="Pais":e.includes("Imagen")?o="Imagen":e.includes("incluir")?o="Tags":e.includes("descripción")?o="Descripcion":e.includes("Categoría")?o="Categoria":e.includes("día y la hora")?o="DiaHora":e.includes("encargada")?o="Ponente":e.includes("disponibles")&&(o="Disponibles");const n=document.getElementById("alerta"+o+t),a=document.getElementById(o.toLowerCase()+t),r=document.getElementById(o.toLowerCase()+t+"Icono");n&&(n.textContent=e,setTimeout(()=>{n.classList.add("error")},0)),a&&a.classList.add("error-input"),r&&r.classList.add("error-icono")})}!function(){async function e(e,t,o){document.querySelectorAll(".spinner-contenedor").forEach(e=>{e.style.display="flex"});const n=new FormData(e),a=await fetch(t,{method:"POST",body:n});console.log(a);try{const t=await a.json();if(console.log(t),t.debug&&console.log(t.debug),"error"===t.tipo){mostrarAlertas(t.alertas.error,"Ponente");const e=document.querySelector(".formulario__legend");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}else"exito"===t.tipo&&(e.reset(),"Crear"===o?Swal.fire({icon:"success",title:"Ponente Creado",text:"Se agregó un nuevo ponente",confirmButtonText:"OK",willClose:()=>{document.body.style.overflow="auto"}}).then(()=>{window.location.href="/admin/ponentes"}):"Editar"===o&&Swal.fire({icon:"success",title:"Ponente Actualizado",text:"Se Actualizo el ponente correctamente",confirmButtonText:"OK",willClose:()=>{document.body.style.overflow="auto"}}).then(()=>{window.location.href="/admin/ponentes"}))}catch(e){console.error("Error al analizar la respuesta JSON del servidor",e)}finally{document.querySelectorAll(".spinner-contenedor").forEach(e=>{e.style.display="none"})}}const t=document.querySelector("#ponentesCrear .formulario"),o=document.querySelector("#ponentesEditar .formulario");t&&t.addEventListener("submit",(function(o){o.preventDefault(),e(t,"/admin/ponentes/crear","Crear")})),o&&o.addEventListener("submit",(function(t){t.preventDefault();const n=window.location.search,a=new URLSearchParams(n).get("id");if(a){e(o,"/admin/ponentes/editar?id="+a,"Editar")}else console.error("ID del ponente no encontrado en la URL")}))}(),function(){const e=document.querySelector("#ponenteEvento");if(e){let a=[],r=[];const i=document.querySelector("[name=ponente_id]"),l=document.querySelector("#listado-ponentes");if(async function(){const e=await fetch("/api/ponentes");!function(e=[]){a=e.map(e=>({nombre:`${e.nombre.trim()} ${e.apellido.trim()}`,id:e.id}))}(await e.json())}(),e.addEventListener("input",(function(t){const o=t.target.value;if(o.length>3){const e=new RegExp(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i");r=a.filter(t=>{if(-1!==t.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").search(e))return t})}else r=[];!function(){e.addEventListener("input",(function(){l.getElementsByTagName("li").length>0?l.classList.add("listado-ponentes__ponente--con-margen"):l.classList.remove("listado-ponentes__ponente--con-margen")}));for(;l.firstChild;)l.removeChild(l.firstChild);if(r.length>0)r.forEach(e=>{const t=document.createElement("LI");t.classList.add("listado-ponentes__ponente"),t.textContent=e.nombre,t.dataset.ponenteId=e.id,t.onclick=n,l.appendChild(t)});else if(e.value.length>3){const e=document.createElement("P");e.classList.add("listado-ponentes__no-resultado"),e.textContent="No hay resultados para tu búsqueda",l.appendChild(e)}}()})),i.value){async function t(){const t=await async function(e){const t="/api/ponente?id="+e,o=await fetch(t);return await o.json()}(i.value),{nombre:n,apellido:a}=t,r=document.createElement("LI");r.classList.add("listado-ponentes__ponente","listado-ponentes__ponente--seleccionado","listado-ponentes__ponente--con-margen"),r.textContent=`${n} ${a}`,l.appendChild(r),labelPonente.classList.add("formulario__label--li"),e.addEventListener("input",o)}function o(){l.getElementsByTagName("li").length>0?labelPonente.classList.add("formulario__label--li"):labelPonente.classList.remove("formulario__label--li")}t(),e.addEventListener("input",t)}function n(e){const t=e.target,o=document.querySelector(".listado-ponentes__ponente--seleccionado");o&&o.classList.remove("listado-ponentes__ponente--seleccionado"),t.classList.add("listado-ponentes__ponente--seleccionado"),i.value=t.dataset.ponenteId}}}(),document.addEventListener("DOMContentLoaded",(function(){autocompletadoFormulario(),modalAuth()})),function(){if(document.querySelector("#regalos-grafica")){!async function(){const e=await fetch("/api/regalos"),t=await e.json(),o=document.getElementById("regalos-grafica").getContext("2d");new Chart(o,{type:"bar",data:{labels:t.map(e=>e.nombre),datasets:[{label:"",data:t.map(e=>e.total),backgroundColor:["#ea580c","#84cc16","#22d3ee","#a855f7","#ef4444","#14b8a6","#db2777","#e11d48","#7e22ce"]}]},options:{scales:{y:{beginAtZero:!0}},plugins:{legend:{display:!1}}}})}()}}(),function(){let e=[];const t=document.querySelector("#registro-resumen");if(t){document.querySelectorAll(".evento__agregar").forEach(e=>e.addEventListener("click",o));function o({target:t}){e.length<5?(t.disabled=!0,e=[...e,{id:t.dataset.id,titulo:t.parentElement.querySelector(".evento__nombre").textContent.trim()}],n()):Swal.fire({title:"Error",text:"Máximo 5 eventos por registro",icon:"error",confirmButtonText:"OK"})}function n(){if(function(){for(;t.firstChild;)t.removeChild(t.firstChild)}(),e.length>0)e.forEach(o=>{const a=document.createElement("DIV");a.classList.add("registros__evento");const r=document.createElement("H3");r.classList.add("registros__nombre"),r.textContent=o.titulo;const i=document.createElement("BUTTON");i.classList.add("registros__eliminar"),i.innerHTML='<i class="fa-solid fa-trash"></i>',i.onclick=function(){!function(t){e=e.filter(e=>e.id!==t);document.querySelector(`[data-id="${t}"]`).disabled=!1,n()}(o.id)},a.appendChild(r),a.appendChild(i),t.appendChild(a)});else{const e=document.createElement("P");e.textContent="No hay eventos, añade hasta 5 del lado izquierdo",e.classList.add("registros__texto"),t.appendChild(e)}}document.querySelector("#registros").addEventListener("submit",(async function(t){t.preventDefault();const o=document.querySelector("#regalo").value,n=e.map(e=>e.id);if(0===n.length||""===o)return void Swal.fire({title:"Error",text:"Elige al menos un Evento y un Regalo",icon:"error",confirmButtonText:"OK"});const a=new FormData;a.append("eventos",n),a.append("regalo_id",o);const r=await fetch("/finalizar-registro/conferencias",{method:"POST",body:a}),i=await r.json();console.log(i),i.resultado?Swal.fire("Registro Exitoso","Tus conferencias se han almacenado y tu registro fue exitoso, te esperamos en DevWebCamp","success").then(()=>location.href="/boleto?id="+i.token):Swal.fire({title:"Error",text:"Hubo un error",icon:"error",confirmButtonText:"OK"}).then(()=>location.reload())})),n()}}(),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".slider-container").forEach(e=>{const t=e.querySelector(".slides"),o=e.querySelector(".next-btn"),n=e.querySelector(".prev-btn");let a=0;function r(){const e=t.children.length;0===a?(n.classList.add("arrow-disabled"),n.classList.remove("arrow-enabled")):(n.classList.remove("arrow-disabled"),n.classList.add("arrow-enabled")),a===e-3?(o.classList.remove("arrow-enabled"),o.classList.add("arrow-disabled")):(o.classList.add("arrow-enabled"),o.classList.remove("arrow-disabled"))}function i(){const e=window.innerWidth;let o=0;o=e<768?1:e<1024?2:3;const n=100/o;t.style.transition="transform 0.2s ease-in-out",t.style.transform=`translateX(-${a*n}%)`,setTimeout(()=>{t.style.transition="none"},200)}o.addEventListener("click",(function(){const e=t.children.length;a+1<e-2&&(a+=1,i(),r())})),n.addEventListener("click",(function(){a-1>=0&&(a-=1,i(),r())})),r(),window.addEventListener("resize",(function(){i(),r()}))})})),function(){const e=document.querySelector(".tags_input");if(e){const a=document.querySelector("#tags"),r=document.querySelector('[name="tags"]');let i=[];function t(){a.textContent="",i.forEach(e=>{const t=document.createElement("LI");t.classList.add("formulario__tag"),t.textContent=e,t.ondblclick=o,a.appendChild(t)}),n()}function o(e){e.target.remove(),i=i.filter(t=>t!==e.target.textContent),n()}function n(){r.value=i.toString()}""!==r.value&&(i=r.value.split(","),t()),e.addEventListener("keypress",(function(o){if(44===o.keyCode){if(""===o.target.value.trim()||o.target.value<1||i.includes(o.target.value))return o.preventDefault(),void(o.target.value="");o.preventDefault(),i=[...i,o.target.value.trim()],e.value="",t()}}))}}();
//# sourceMappingURL=bundle.js.map
