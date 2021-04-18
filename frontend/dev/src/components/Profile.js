import api from "../utils/api";
import {useState} from "react";

function Profile({user}) {
    const [password, setPassword] = useState('');
    const updatePassword = ev => {
        ev.preventDefault();
        api.put("/login", {password}).then(response => {
            alert("password updated");
        })

    }
    return (
        <div className={"container m-t-5"}>
            <h2>
                {user.email}
            </h2>
            <form onSubmit={updatePassword} className={"grid-6-6"}>
                <input type="password" value={password} onChange={ev => setPassword(ev.target.value)}
                       className={"w-100p"}/>
                <div className={"place-x-center"}>
                    <button className="button" type="submit">
                        update password
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Profile;