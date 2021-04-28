<?php
/* Generated by neoan3-cli */

namespace Neoan3\Model\Schedule;

use Neoan3\Provider\MySql\Database;
use Neoan3\Provider\Model\Model;
use Neoan3\Provider\MySql\Transform;

/**
 * Class ScheduleModel
 * @package Neoan3\Model\Schedule
 * @method static get(string $id)
 * @method static create(array $modelArray)
 * @method static update(array $modelArray)
 * @method static find(array $conditionArray)
 * @method static delete(string $id, bool $hard = false)
 */

class ScheduleModel implements Model{

    /**
     * @var Database|null
     */
    private static ?Database $db = null;

    public static function __callStatic($method, $args)
    {
        if(!method_exists(self::class, $method)){
            $transform = new Transform('schedule', self::$db);
            return $transform->$method(...$args);
        } else {
            return self::$method(...$args);
        }
    }

    public static function init(array $providers)
    {
        foreach ($providers as $key => $provider){
            if($key === 'db'){
                self::$db = $provider;
                // creates array for database with information needed for schedule
            }
        }
    }

    public static function getBookings($day, $room_id)
    {
        return self::$db->smart('>SELECT schedule.*, user.email FROM schedule JOIN user ON user.id = schedule.user_id WHERE booking_day >= {{day}} AND schedule.delete_date IS NULL and room_id = UNHEX({{room}}) order by booking_day, booking_time',['day' => $day, 'room' => $room_id]);
        //returns all bookings that have already been provided
    }
}