<?php 

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
use Controllers\AuthController;

$router = new Router();

// Pag Principal (DEMO)
$router->get('/', [AuthController::class, 'demo']);

// API Auth
$router->post('/api/usuarios/registro', [AuthController::class, 'registro']);
$router->post('/api/usuarios/login', [AuthController::class, 'login']);
$router->post('/api/usuarios/olvidePassword', [AuthController::class, 'olvide']);
$router->post('/api/usuarios/recuperar', [AuthController::class, 'recuperar']);



// Confirmación de Cuenta
$router->get('/mensaje', [AuthController::class, 'mensaje']);
$router->get('/confirmar-cuenta', [AuthController::class, 'confirmar']);


$router->comprobarRutas();