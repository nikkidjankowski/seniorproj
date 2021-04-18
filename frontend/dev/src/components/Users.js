import {useState, useEffect} from "react";
import api from "../utils/api";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       loadUsers();
    }, [])

    function loadUsers() {
        api.get("/users").then(response => setUsers(response.data))
    }

    function deleteUser(id) {
        api.delete("/users/"+ id).then(loadUsers)

    }

    return (
        <div style={{minWidth:"765px"}}>
            <h2>anything</h2>
            <section className={"grid-9-3 w-100p"}>

                <div className={"font-strong p-1"}>Email
                </div>
                <div>
                    action
                </div>

            </section>

            {users.map(user => (
                <section className={"grid-9-3"} key={user.id}>
                    <div>
                        {user.email}
                    </div>
                    <div>
                        <button onClick={ev=>deleteUser(user.id)}>delete</button>
                    </div>
                </section>

            ))}
        </div>
    )
}

export default Users;

