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
        let confirm = window.confirm("Are you sure you want to delete user?")
        if(confirm){
            api.delete("/users/"+ id).then(loadUsers)
        }


    }

    return (
        <div>
            <h2>Users</h2>
            <section className={"grid-9-3 w-100p font-strong"}>

                <div className={"font-strong p-1 text-red"}>Email
                </div>
                <div className={"text-red"}>
                    Remove User
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

