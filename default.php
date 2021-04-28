<?php
ini_set('display_errors', true);
ini_set('error_reporting', E_ALL);
// default route (homepage)
define('default_ctrl','demo');

// optional: custom 404
define('default_404','notFound');

\Neoan3\Core\Event::listen('Core\\Api::incoming', function($ev){
    header('Access-Control-Allow-Credentials: true');
    if(isset($_SERVER['HTTP_ORIGIN'])){
        $allowed = [
            'http://localhost:3000'
        ];
        if(in_array($_SERVER['HTTP_ORIGIN'], $allowed)){
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
            //allows user control of the website functions when they are logged in
        }
    }

});
