<?php

namespace Neoan3\Component\Schedule;

use Neoan3\Apps\Db;
use Neoan3\Frame\Demo;
use Neoan3\Model\Schedule\ScheduleModel;
use Neoan3\Provider\Model\InitModel;

/**
 * Class ScheduleController
 * @package Neoan3\Component\Schedule
 *
 * Generated by neoan3-cli for neoan3 v3.*
 */
class ScheduleController extends Demo
{


    #[InitModel(ScheduleModel::class)]
    function getSchedule($day, $room_id, $params = [])
    {
        // $this->Auth->restrict();

        return ScheduleModel::getBookings($day, $room_id);
    }

    #[InitModel(ScheduleModel::class)]
    function postSchedule($newEntry = [])
    {
        $authObject = $this->Auth->restrict();
        $newEntry["user_id"] = $authObject->getUserId();

        $newEntry["booking_day"] = "=" . $newEntry["booking_day"];
        $newEntry["booking_time"] = "=" . $newEntry["booking_time"];

        return ScheduleModel::create($newEntry);

    }
}
