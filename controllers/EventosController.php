<?php

namespace Controllers;

use Model\Categoria;
use Model\Dia;
use Model\Evento;
use Model\Hora;
use MVC\Router;

class EventosController { 

    public static function index(Router $router) { 
        if(!is_admin()) {
            header('Location: /');
        }
        
        $router->render('admin/eventos/index', [
            'titulo' => 'Conferencias y Workshop'
        ]);
    }

    public static function crear(Router $router) { 
        if(!is_admin()) {
            header('Location: /');
        }
        
        $categorias = new Categoria();
        $categorias = $categorias::all('ASC');
        $dias = new Dia();
        $dias = $dias::all('ASC');
        $horas = new Hora();
        $horas = $horas::all('ASC');
        
        $alertas = [];
        $evento = new Evento();

        if($_SERVER['REQUEST_METHOD'] === 'POST') { 

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
}
    