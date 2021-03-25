function SelectRoom({rooms, onSelected}){
    return(
        <select onChange={ev => onSelected(ev.target.value)} defaultValue={0}>
            <option value={0} disabled>choose room</option>
            {rooms.map(room => <option key={room.id} value={room.id}>{room.name}</option>)}
        </select>
    )
}
export default SelectRoom;