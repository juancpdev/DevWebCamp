<?php

namespace Controllers;

use Model\Ponente;
use MVC\Router;

class PonentesController { 

    public static function index(Router $router) { 
        $router->render('admin/ponentes/index', [
            'titulo' => 'Ponentes / Conferencistas'
        ]);
    }

    public static function crear(Router $router) {

        $alertas = [];
        $ponente = new Ponente;

        if($_SERVER['REQUEST_METHOD'] === 'POST') {
 
            $ponente->sincronizar($_POST);

            // validar
            $alertas = $ponente->validar();


            // Guardar el registro
            if(empty($alertas)) {

                // Guardar en la BD
                $ponente->guardar();

                $respuesta = [
                    'tipo' => 'exito',
                    'datos' => $ponente
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

        $router->render('admin/ponentes/crear', [
            'titulo' => 'Registrar Ponente',
            'ponente' => $ponente,
            'alertas' => $alertas
        ]);
    }
    
}