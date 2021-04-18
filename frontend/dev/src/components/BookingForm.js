import {useState} from "react";

const BookingForm = ({time, onBooking}) => {
    const [reason, setReason] = useState("")
    const book = (ev) => {
        ev.preventDefault()
        onBooking(reason)
    }
    return(
        <div className={"overlay"}>
            <form onSubmit={book} className={"w-50p bg-white p-3 m-x-auto m-t-5"}>
                <p>Please write your reason</p>
                <input type="text" value={reason} onChange={event => setReason(event.target.value)}/>
                <button type="submit">
                    enter
                </button>
            </form>
        </div>
    )
}

export default BookingForm;