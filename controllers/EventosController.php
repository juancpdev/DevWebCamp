<?php

namespace Controllers;

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
}
    