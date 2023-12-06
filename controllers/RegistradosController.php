<?php

namespace Controllers;

use MVC\Router;

class RegistradosController { 

    public static function index(Router $router) { 
        if(!is_admin()) {
            header('Location: /');
        }
        
        $router->render('admin/registrados/index', [
            'titulo' => 'Usuarios Registrados'
        ]);
    }
}
    