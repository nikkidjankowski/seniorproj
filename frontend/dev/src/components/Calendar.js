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
        }).then(result => {
            setNewBooking(false)
            selectRoom(selectedRoom)
        })
    }
    const renderSchedule = day => {
        let todaysSchedule = schedule.filter(item => {

            return item.booking_day === getDateString(day)
        })
        const timeslots = [];
        for (let i = 8; i < 21; i++) {
            const now = dayjs(`${getDateString(day)} ${i}:00:00`);
            timeslots.push({
                time: now,
                appointments: todaysSchedule.filter(s => s.booking_time === now.format("HH:mm:ss"))
            })
        }
        console.log(timeslots);

        return timeslots.map((item, i) => (
            <div className={"p-2 m-y-1 b-primary b-1 calendar-item"} key={i}>
                <div className={"text-black-50 font-sm"}>
                    {item.time.format("hh:mm a")}
                </div>
                {item.appointments.length > 0 ? (
                    <div className={"bg-primary p-1 text-white"}>
                        <p>
                            {item.appointments[0].reason}
                        </p>
                        <p className={"font-sm m-y-0"}>
                            {item.appointments[0].email.replace(/@[a-z\.]+/,"")}
                        </p>
                    </div>
                ) : (
                    <button
                        onClick={()=> bookRoom(item.time)}
                        className={"button"}>
                        book room
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

    return (
        <div className="w-100p">
            <SelectRoom rooms={rooms} onSelected={selectRoom}/>
            {selectedRoom && (
                <div className="d-flex w-100p">
                    {days.map(day => (
                        <div style={{minWidth:160}} className="m-1 b-1 b-primary f-1" key={day.getTime()}>
                            <div style={{height:45}}>
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

            {newBooking&&  <BookingForm time={newBooking} onBooking={confirmBooking}/>}



        </div>
    )
}

export default Calendar;