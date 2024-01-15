<?php

namespace Controllers;

use Model\Dia;
use Model\Hora;
use MVC\Router;
use Model\Evento;
use Model\Ponente;
use Model\Categoria;

class PaginasController {

    public static function index(Router $router) {
        $router->render("paginas/index", [
            'titulo' => 'Página Principal'
        ]);
    }

    public static function evento(Router $router) {
        $router->render("paginas/devwebcamp", [
            'titulo' => 'DevWebCamp'
        ]);
    }

    public static function paquetes(Router $router) {
        $router->render("paginas/paquetes", [
            'titulo' => 'Paquetes DevWebCamp'
        ]);
    }

    public static function conferencias(Router $router) {

        $eventos = Evento::ordenar('hora_id', 'ASC');
        $eventos_formatedos = [];

        foreach($eventos as $evento) {
            $evento->categoria = Categoria::find($evento->categoria_id);
            $evento->dia = Dia::find($evento->dia_id);
            $evento->hora = Hora::find($evento->hora_id);
            $evento->ponente = Ponente::find($evento->ponente_id);

            if($evento->categoria_id === "1" && $evento->dia_id === "1") {
                $eventos_formatedos["conferencias_v"][] = $evento;
            }

            if($evento->categoria_id === "1" && $evento->dia_id === "2") {
                $eventos_formatedos["conferencias_s"][] = $evento;
            }

            if($evento->categoria_id === "2" && $evento->dia_id === "1") {
                $eventos_formatedos["workshops_v"][] = $evento;
            }

            if($evento->categoria_id === "2" && $evento->dia_id === "2") {
                $eventos_formatedos["workshops_s"][] = $evento;
            }
        }
    
        $router->render("paginas/conferencias", [
            'titulo' => 'Workshop - Conferencias',
            'eventos' => $eventos_formatedos
        ]);
    }

    public static function pase(Router $router) {
        $router->render("paginas/comprar-pase", [
            'titulo' => 'Comprar Pase'
        ]);
    }
}