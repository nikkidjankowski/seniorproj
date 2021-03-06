<?php

namespace Neoan3\Component\Migrate;

use Neoan3\Core\Renderer;
use Neoan3\Core\Serve;
use Neoan3\Provider\FileSystem\File;
use Neoan3\Provider\FileSystem\Native;

/**
 * Class MigrateController
 * @package Neoan3\Component\Migrate
 *
 * Generated by neoan3-cli for neoan3 v3.*
 */
class MigrateController extends Serve
{
    public function __construct(Renderer $renderer = null, Native $fileSystem= null)
    {
        parent::__construct($renderer);
        $this->assignProvider('file', $fileSystem, function (){
            $this->provider['file'] = new File();
        });
    }

    /**
     * Route: Migrate
     */
    function init(): void
    {

        $this->renderer->includeJs(__DIR__ . '/migrate.ctrl.js',['base'=>base, 'models' => $this->migrateFiles()]);
        $this->renderer->includeStylesheet('https://cdn.jsdelivr.net/npm/gaudiamus-css@1.2.1/css/gaudiamus.min.css');
        $this->renderer->includeJs('https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.0/dist/alpine.min.js');

        $this->hook('main', 'migrate')
            ->output();
    }

    function postMigrate(array $body)
    {
        $folder = path . '/model/' . ucfirst($body['name']);
        var_dump($folder . '/migrate.json');
        var_dump($body);

        ini_set('error_reporting', E_ALL);
        ini_set('display_errors', true);
        file_put_contents($folder. '/migrate.json', json_encode($body['migrate']));
        if($this->provider['file']->exists($folder) ){
            $this->provider['file']->putContents($folder. '/migrate.json', json_encode($body['migrate']));
        }
        return $body;
    }

    private function migrateFiles()
    {
        $models = [];
        foreach ($this->provider['file']->glob(path . '/model/*/migrate.json') as $migrate) {
            preg_match('/model\/([^\/]+)/', $migrate, $name);
            $models[] = [
                'name' => $name[1],
                'migrate' => json_decode($this->provider['file']->getContents($migrate), true)
            ];
        }
        return json_encode($models);
    }

}