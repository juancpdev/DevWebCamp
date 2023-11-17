<?php

namespace Controllers;

use Classes\Email;
use Model\Usuario;
use MVC\Router;

class AuthController {
    
    public static function demo(Router $router) {
        // Render a la vista 
        $router->render('auth/demo', [
            'titulo' => 'Principal'
        ]);
    }

    public static function login() {

        $alertas = [];

        if($_SERVER['REQUEST_METHOD'] === 'POST') {
    
            $usuario = new Usuario($_POST);
            
            $alertas = $usuario->validarLogin();
            if(empty($alertas)) {
                // Verificar quel el usuario exista
                $usuario = Usuario::where('email', $usuario->email);

                if(!$usuario || !$usuario->confirmado ) {
                    Usuario::setAlerta('error', 'El Usuario No Existe o no esta confirmado');
                    $alertas = Usuario::getAlertas();
                    $respuesta = [
                        'tipo' => 'error',
                        'alertas' => $alertas
                    ];
                    echo json_encode($respuesta);
                } else {
                    // El Usuario existe
                    if( password_verify($_POST['password'], $usuario->password) ) {
                        
                        // Iniciar la sesión
                        session_start();    
                        $_SESSION['id'] = $usuario->id;
                        $_SESSION['nombre'] = $usuario->nombre;
                        $_SESSION['apellido'] = $usuario->apellido;
                        $_SESSION['email'] = $usuario->email;
                        $_SESSION['admin'] = $usuario->admin ?? null;

                        $respuesta = [
                            'tipo' => 'exito',
                            'datos' => $usuario
                        ];
                        echo json_encode($respuesta);
                        
                    } else {
                        Usuario::setAlerta('error', 'Password Incorrecto');
                        $alertas = Usuario::getAlertas();
                        $respuesta = [
                            'tipo' => 'error',
                            'alertas' => $alertas
                        ];
                        echo json_encode($respuesta);
                    }
                }
            } else {
                $respuesta = [
                    'tipo' => 'error',
                    'alertas' => $alertas
                ];
                echo json_encode($respuesta);
            }
        }
    }

    public static function registro() {
        $alertas = [];
        $usuario = new Usuario;
        $usuario->sincronizar($_POST);

        if($_SERVER['REQUEST_METHOD'] === 'POST') {

            $usuario->sincronizar($_POST);
            
            $alertas = $usuario->validar_cuenta();

            if (empty($alertas)) {
                $existeUsuario = Usuario::where('email', $usuario->email);

                if($existeUsuario) {
                    Usuario::setAlerta('error', 'El Email ya se encuentra registrado');
                    $alertas = Usuario::getAlertas();

                $respuesta = [
                    'tipo' => 'error',
                    'alertas' => $alertas
                ];
                echo json_encode($respuesta);
                } else {
                    // Hashear el password
                    $usuario->hashPassword();

                    // Eliminar password2
                    unset($usuario->password2);

                    // Generar el Token
                    $usuario->crearToken();

                    // Crear un nuevo usuario
                    $usuario->guardar();

                    // Enviar email
                    $email = new Email($usuario->email, $usuario->nombre, $usuario->token);
                    $email->enviarConfirmacion();

                    $respuesta = [
                        'tipo' => 'exito',
                        'datos' => $usuario
                    ];
                    echo json_encode($respuesta);
                }
            } else {
                $respuesta = [
                    'tipo' => 'error',
                    'alertas' => $alertas
                ];
                echo json_encode($respuesta);
            }
            
        }
    }

    public static function olvide() {
        $alertas = [];
        
        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            $usuario = new Usuario($_POST);
            $alertas = $usuario->validarEmail();

            if(empty($alertas)) {
                // Buscar el usuario
                $usuario = Usuario::where('email', $usuario->email);

                if($usuario && $usuario->confirmado) {

                    // Generar un nuevo token
                    $usuario->crearToken();
                    unset($usuario->password2);

                    // Actualizar el usuario
                    $usuario->guardar();

                    // Enviar el email
                    $email = new Email( $usuario->email, $usuario->nombre, $usuario->token );
                    $email->enviarInstrucciones();

                    $respuesta = [
                        'tipo' => 'exito',
                        'datos' => $usuario
                    ];
                    echo json_encode($respuesta);
                } else {
                    Usuario::setAlerta('error', 'El Usuario no existe o no esta confirmado');
                    $alertas = Usuario::getAlertas();

                    $respuesta = [
                        'tipo' => 'error',
                        'alertas' => $alertas
                    ];
                    echo json_encode($respuesta);
                }
            } else {
                $respuesta = [
                    'tipo' => 'error',
                    'alertas' => $alertas
                ];
                echo json_encode($respuesta); 
            }
        } 
    }

    public static function logout() {
        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            session_start();
            $_SESSION = [];
            header('Location: /');
        }
       
    }

    public static function reestablecer(Router $router) {
        $exito = false;
        
        $token = s($_GET['token']);

        $token_valido = true;

        if(!$token) header('Location: /');

        // Identificar el usuario con este token
        $usuario = Usuario::where('token', $token);


        if(empty($usuario)) {
            Usuario::setAlerta('error', 'Token No Válido, intenta de nuevo');
            $token_valido = false;
        }


        if($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Añadir el nuevo password
            $usuario->sincronizar($_POST);

            // Validar el password
            $alertas = $usuario->validarPassword();

            if(empty($alertas)) {
                // Hashear el nuevo password
                $usuario->hashPassword();

                unset($usuario->password2);

                // Eliminar el Token
                $usuario->token = null;

                // Guardar el usuario en la BD
                $resultado = $usuario->guardar();

                // Redireccionar
                if($resultado) {
                    $exito = true;
                }
            }
        }

        $alertas = Usuario::getAlertas();
        
        // Muestra la vista
        $router->render('auth/reestablecer', [
            'titulo' => 'Reestablecer Password',
            'alertas' => $alertas,
            'token_valido' => $token_valido,
            'exito' => $exito
        ]);
    }

    public static function confirmar(Router $router) {
        
        $token = s($_GET['token']);

        if(!$token) header('Location: /');

        // Encontrar al usuario con este token
        $usuario = Usuario::where('token', $token);

        if(empty($usuario)) {
            // No se encontró un usuario con ese token
            Usuario::setAlerta('error', 'Token No Válido');
        } else {
            // Confirmar la cuenta
            $usuario->confirmado = 1;
            $usuario->token = '';
            unset($usuario->password2);
            
            // Guardar en la BD
            $usuario->guardar();

            Usuario::setAlerta('exito', 'Cuenta Comprobada Correctamente');
        }

        $alertas = Usuario::getAlertas();

        $router->render('auth/confirmar', [
            'titulo' => 'Confirma tu cuenta DevWebcamp',
            'alertas' => $alertas
        ]);
    }
}