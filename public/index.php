<?php 

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
use Controllers\APIEventos;
use Controllers\APIPonentes;
use Controllers\APIRegalos;
use Controllers\AuthController;
use Controllers\EventosController;
use Controllers\PaginasController;
use Controllers\RegalosController;
use Controllers\PonentesController;
use Controllers\RegistroController;
use Controllers\DashboardController;
use Controllers\RegistradosController;

$router = new Router();

// Pag Publicas
$router->get('/', [PaginasController::class, 'index']);
$router->get('/evento', [PaginasController::class, 'evento']);
$router->get('/paquetes', [PaginasController::class, 'paquetes']);
$router->get('/workshops-conferencias', [PaginasController::class, 'conferencias']);
$router->get('/comprar-pase', [PaginasController::class, 'pase']);
$router->get('/404', [PaginasController::class, 'error']);

// Registro de Usuarios
$router->get('/finalizar-registro', [RegistroController::class, 'crear']);
$router->post('/finalizar-registro/gratis', [RegistroController::class, 'gratis']);
$router->post('/finalizar-registro/pagar', [RegistroController::class, 'pagar']);
$router->get('/finalizar-registro/conferencias', [RegistroController::class, 'conferencias']);
$router->post('/finalizar-registro/conferencias', [RegistroController::class, 'conferencias']);

// Boleto virtual
$router->get('/boleto', [RegistroController::class, 'boleto']);

// Paginas
$router->get('/confirmar-cuenta', [AuthController::class, 'confirmar']);
$router->get('/reestablecer', [AuthController::class, 'reestablecer']);
$router->post('/reestablecer', [AuthController::class, 'reestablecer']);

// API Auth
$router->post('/api/usuarios/registro', [AuthController::class, 'registro']);
$router->post('/api/usuarios/login', [AuthController::class, 'login']);
$router->post('/api/usuarios/olvidePassword', [AuthController::class, 'olvide']);
$router->post('/logout', [AuthController::class, 'logout']);

// APIs
$router->get('/api/eventos-horario', [APIEventos::class, 'index']);
$router->get('/api/ponentes', [APIPonentes::class, 'index']);
$router->get('/api/ponente', [APIPonentes::class, 'ponente']);
$router->get('/api/regalos', [APIRegalos::class, 'index']);

// ADMIN
$router->get('/admin/dashboard', [DashboardController::class, 'index']);

$router->get('/admin/ponentes', [PonentesController::class, 'index']);
$router->get('/admin/ponentes/crear', [PonentesController::class, 'crear']);
$router->post('/admin/ponentes/crear', [PonentesController::class, 'crear']);
$router->get('/admin/ponentes/editar', [PonentesController::class, 'editar']);
$router->post('/admin/ponentes/editar', [PonentesController::class, 'editar']);
$router->post('/admin/ponentes/eliminar', [PonentesController::class, 'eliminar']);

$router->get('/admin/eventos', [EventosController::class, 'index']);
$router->get('/admin/eventos/crear', [EventosController::class, 'crear']);
$router->post('/admin/eventos/crear', [EventosController::class, 'crear']);
$router->get('/admin/eventos/editar', [EventosController::class, 'editar']);
$router->post('/admin/eventos/editar', [EventosController::class, 'editar']);
$router->post('/admin/eventos/eliminar', [EventosController::class, 'eliminar']);

$router->get('/admin/registrados', [RegistradosController::class, 'index']);

$router->get('/admin/regalos', [RegalosController::class, 'index']);


$router->comprobarRutas();