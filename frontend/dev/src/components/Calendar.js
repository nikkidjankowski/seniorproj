import SelectRoom from "./SelectRoom"
import {useState, useEffect} from "react";
import api from "../utils/api";
import * as dayjs from "dayjs";
import BookingForm from "./BookingForm";

function Calendar(props) {
    const [rooms, setRooms] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [days, setDays] = useState([]);
    const [newBooking, setNewBooking] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const getDateString = (date) => {
        return dayjs(date).format("YYYY-MM-DD");
        //returns the current date so the website knows what days should be shown on calendar
    }


    useEffect(() => {
        const call = async () => {


            const today = new Date();

            const currentWeek = [];
            try {
                const roomCall = await api.get('/room');
                setRooms(roomCall.data)
            } catch (e) {
                console.log('you are not logged in')
            }
            for (let i = 0; i < 31; i++) {
                currentWeek.push(new Date(today.getTime() + ((24 * 60 * 60 * 1000) * i)))
            }
            setDays(currentWeek);
            //creates days for the next 31 days for each room
        }
        call();
    }, [])
    const bookRoom = (time) => {
        setNewBooking({time:time})

    }
    const confirmBooking = (reason) => {
        api.post("/schedule",{

            room_id:selectedRoom,
            booking_day:dayjs(newBooking.time).format("YYYY-MM-DD"),
            booking_time:dayjs(newBooking.time).format("HH:mm:ss"),
            reason
            //api posts the booking for the selected room with the day and time
        }).then(result => {
            setNewBooking(false)
            selectRoom(selectedRoom)
            //when select room is called and new booking is false meaning no new booking is being created
        })
    }
    const renderSchedule = day => {
        let todaysSchedule = schedule.filter(item => {
            //creates the schedule for the day
            return item.booking_day === getDateString(day)
        })
        const timeslots = [];
        //timeslots help build the calendar look in the front end
        for (let i = 8; i < 21; i++) {
            const now = dayjs(`${getDateString(day)} ${i}:00:00`);
            timeslots.push({
                time: now,
                appointments: todaysSchedule.filter(s => s.booking_time === now.format("HH:mm:ss"))
            })
        }
        console.log(timeslots);
        //displays the time slots

        return timeslots.map((item, i) => (
            <div className={"p-1 m-y-1 b-primary-lg b-1 calendar-item"} key={i}>
                <div className={"text-black-70 font-md"}>
                    {item.time.format("hh:mm a")}
                </div>
                {item.appointments.length > 0 ? (
                    <div className={"bg-blue p-1 text-white font-strong"}>
                        <p>
                            {item.appointments[0].reason}
                        </p>
                        <p className={"font-sm m-y-1"}>
                            {item.appointments[0].email.replace(/@[a-z\.]+/,"")}
                        </p>
                    </div>
                ) : (
                    <button
                        onClick={()=> bookRoom(item.time)}
                        className={"button text-red font-strong b-blue hover:bg-blue hover:text-red"}>
                        BOOK ROOM
                    </button>
                )}
            </div>
        ))
    }


    const selectRoom = async room => {
        setSelectedRoom(room)
        let today = new Date();
        console.log(today);
        let search = getDateString(today);
        console.log(search);
        try {

            const scheduleCall = await api.get('/schedule/' + search + '/' + room);
            setSchedule(scheduleCall.data)
        } catch (e) {
            console.log('you are not logged in')
        }
    }

    const resetBooking = ()=> {
        setNewBooking(false);
    };
    return (
        <div className="w-100p">
            <SelectRoom rooms={rooms} onSelected={selectRoom}/>
            {selectedRoom && (
                <div className="d-flex w-100p">
                    {days.map(day => (
                        <div style={{minWidth:160}} className="m-1 b-1 b-primary f-1" key={day.getTime()}>
                            <div style={{height:45}} className={"font-strong text-white bg-blue"}>
                                {dayjs(day).format("dddd")} <br/>
                                {dayjs(day).format("MM/DD")}
                            </div>
                            <hr/>
                            <div>
                                {renderSchedule(day)}
                            </div>

                        </div>
                    ))}
                </div>
            )}

            {newBooking&&  <BookingForm time={newBooking} onBooking={confirmBooking} close={resetBooking}/>}



        </div>

    )
}

export default Calendar;