<?php

namespace Controllers;

use Model\Categoria;
use Model\Dia;
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
        $categorias = $categorias::all();
        $dias = new Dia();
        $dias = $dias::all('ASC');


        
        $router->render('admin/eventos/crear', [
            'titulo' => 'Crear Evento',
            'categorias' => $categorias,
            'dias' => $dias
        ]);
    }
}
    