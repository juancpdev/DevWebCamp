<?php

namespace Controllers;

use Classes\Paginacion;
use Model\Categoria;
use Model\Dia;
use Model\Evento;
use Model\Hora;
use Model\Ponente;
use MVC\Router;

class EventosController { 

    public static function index(Router $router) { 
        if(!is_admin()) {
            header('Location: /');
            return;
        }

        $pagina_actual = $_GET["page"];
        $pagina_actual = filter_var($pagina_actual, FILTER_VALIDATE_INT);

        
        $registros_por_pagina = 10;
       
        $total = Evento::total();

        $paginacion = new Paginacion($pagina_actual, $registros_por_pagina, $total);

        
        if(!$pagina_actual || $pagina_actual < 1 || $paginacion->total_paginas() < $pagina_actual) {
            header("Location: /admin/eventos?page=1");
        }
        
        $eventos = Evento::paginar($registros_por_pagina, $paginacion->offset());

        foreach($eventos as $evento) {
            $evento->categoria = Categoria::find($evento->categoria_id);
            $evento->dia = Dia::find($evento->dia_id);
            $evento->hora = Hora::find($evento->hora_id);
            $evento->ponente = Ponente::find($evento->ponente_id);
        }

        $router->render('admin/eventos/index', [
            'titulo' => 'Conferencias y Workshop',
            'eventos' => $eventos,
            'paginacion' => $paginacion->paginacion()
        ]);
    }

    public static function crear(Router $router) { 
        if(!is_admin()) {
            header('Location: /');
            return;
        }
        
        $categorias = Categoria::all('ASC');
        $dias = Dia::all('ASC');
        $horas = Hora::all('ASC');
        
        $alertas = [];
        $evento = new Evento();

        if($_SERVER['REQUEST_METHOD'] === 'POST') { 
            if(!is_admin()) {
                header('Location: /');
                return;
            }

            $evento->sincronizar($_POST);

            $alertas = $evento->validar();

            // Guardar el registro
            if(empty($alertas)) { 

                $evento->guardar();

                $respuesta = [
                    'tipo' => 'exito',
                    'datos' => $evento
                ];
                echo json_encode($respuesta);
                return;

            } else {
                $respuesta = [
                    'tipo' => 'error',
                    'alertas' => $alertas
                ];
                echo json_encode($respuesta);
                return;
            }
        }

        $router->render('admin/eventos/crear', [
            'titulo' => 'Crear Evento',
            'categorias' => $categorias,
            'dias' => $dias,
            'horas' => $horas,
            'evento' => $evento
        ]);
    }

    public static function editar(Router $router) {
        if(!is_admin()) {
            header('Location: /');
            return;
        }
        
        $alertas = [];

        $id = $_GET['id'];
        $id = filter_var($id, FILTER_VALIDATE_INT);
        
        if(!$id) {
            header('Location: /admin/eventos');
            return;
        }

        $categorias = Categoria::all('ASC');
        $dias = Dia::all('ASC');
        $horas = Hora::all('ASC');

        $evento = Evento::find($id);

        if(!$evento) {
            header('Location: /admin/eventos');
        }

        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            if(!is_admin()) {
                header('Location: /');
                return;
            }
            
            $evento->sincronizar($_POST);

            $alertas = $evento->validar();

            // Guardar el registro
            if(empty($alertas)) {

                // Guardar en la BD
                $evento->guardar();
                
                $respuesta = [
                    'tipo' => 'exito',
                    'datos' => $evento,
                ];
                echo json_encode($respuesta);
                return;
            } else {
                $respuesta = [
                    'tipo' => 'error',
                    'alertas' => $alertas
                ];
                echo json_encode($respuesta);
                return;
            }
        }
        
        $router->render('admin/eventos/editar', [
            'titulo' => 'Actualizar Evento',
            'evento' => $evento,
            'categorias' => $categorias,
            'dias' => $dias,
            'horas' => $horas
        ]);
    }

    public static function eliminar() { 
        if(!is_admin()) {
            header('Location: /');
            return;
        }

        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            if(!is_admin()) {
                header('Location: /');
                return;
            }

            $id = $_POST["id"];
            $evento = Evento::find($id);
            $evento->eliminar();
            header('Location: /admin/eventos');
        }
    }
}
    