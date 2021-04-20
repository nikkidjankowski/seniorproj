import {useState} from "react";

const BookingForm = ({time, onBooking, close}) => {
    const [reason, setReason] = useState("")
    const book = (ev) => {
        ev.preventDefault()
        onBooking(reason)
    }
    return(
        <div className={"overlay"}>
            <form onSubmit={book} className={"w-50p bg-white p-3 m-x-auto m-t-5 position-relative"}>
                <button className={"position-absolute bg-red b-rounded-2 text-white b-1"} style={{right:5}} type={"button"} onClick={close}>
                    x
                </button>
                <p>Please write your reason</p>
                <input type="text" value={reason} onChange={event => setReason(event.target.value)} />
                <button type="submit">
                    enter
                </button>
            </form>
        </div>
    )
}

export default BookingForm;