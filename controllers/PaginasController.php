<?php

namespace Controllers;

use MVC\Router;

class PaginasController {

    public static function index(Router $router) {
        $router->render("paginas/devwebcamp", [
            'titulo' => 'Página Principal'
        ]);
    }

    public static function evento(Router $router) {
        $router->render("paginas/evento", [
            'titulo' => 'Evento'
        ]);
    }

    public static function paquetes(Router $router) {
        $router->render("paginas/paquetes", [
            'titulo' => 'Paquetes'
        ]);
    }

    public static function conferencias(Router $router) {
        $router->render("paginas/conferencias", [
            'titulo' => 'Workshop - Conferencias'
        ]);
    }

    public static function pase(Router $router) {
        $router->render("paginas/comprar-pase", [
            'titulo' => 'Comprar Pase'
        ]);
    }
}