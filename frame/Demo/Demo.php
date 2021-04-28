<?php
/**
 * Created by PhpStorm.
 * User: sroehrl
 * Date: 2/4/2019
 * Time: 1:36 PM
 */

namespace Neoan3\Frame;

use Exception;
use Neoan3\Core\Serve;
use Neoan3\Provider\Attributes\UseAttributes;
use Neoan3\Provider\Auth\Auth;
use Neoan3\Provider\Auth\AuthObject;
use Neoan3\Provider\Auth\JwtWrapper;
use Neoan3\Provider\Auth\SessionWrapper;
use Neoan3\Provider\MySql\Database;
use Neoan3\Provider\MySql\DatabaseWrapper;

/**
 * Class Demo
 * @package Neoan3\Frame
 * @property Auth $auth
 */
class Demo extends Serve
{

    /**
     * Name your credentials
     * @var string
     */
    private string $dbCredentials = 'testing_db';

    public Auth $Auth;

    public ?AuthObject $authObject;


public $environment;

    /**
     * Demo constructor.
     * @param Database|null $db
     * @param Auth|null $auth
     */
    function __construct(Database $db = null, Auth $auth = null)
    {
        parent::__construct();
//        $dotenv = \Dotenv\Dotenv::createImmutable(path);
//        $dotenv->load();
//        var_dump($_ENV['NAME']);
        $this->environment = ['database' => ['name' => $_ENV['NAME'],
        'password' => $_ENV['PASSWORD'],
        'host' => $_ENV['HOST'],
            'assumes_uuid' => true,
        'user' => $_ENV['USER']],
        'secret' => 'asdfasdf'];
        $this->assignProvider('auth', $auth, function () {
            $this->provider['auth'] = new JwtWrapper();
            $this->provider['auth']->setSecret('my-secret');
        });

        $this->assignProvider('db', $db, function () {
            try {

                    $this->provider['db'] = new DatabaseWrapper($this->environment['database']);

            } catch (Exception $e) {
                $this->renderer->addToHead('title', '! No credentials found! Run "neoan3 new database ' . $this->dbCredentials . '"');
            }
        });
        $this->Auth = $this->provider['auth'];

        /*
         * PHP8 Attributes
         * */
        if (PHP_MAJOR_VERSION >= 8) {
            $phpAttributes = new UseAttributes();
            $phpAttributes->hookAttributes($this->provider);
            $this->authObject = $phpAttributes->authObject;
        }

        $this->renderer->includeElement('customElement');
    }


    /**
     * @return array
     */
    function constants(): array
    {
        return [
            'base' => [base],
            'title' => ['Default Title'],
            'link' => [
                [
                    'sizes' => '32x32',
                    'type' => 'image/png',
                    'rel' => 'icon',
                    'href' => 'asset/neoan-favicon.png'
                ]
            ],
            'stylesheet' => [
                '' . base . 'frame/Demo/demo.css',
                'https://cdn.jsdelivr.net/npm/gaudiamus-css@latest/css/gaudiamus.min.css',
            ]
        ];
    }
}
