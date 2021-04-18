import api from "../utils/api";
import {useState} from "react";
import {useHistory} from "react-router-dom"
function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const callLogin = async (ev) => {
        ev.preventDefault();
        // http://192.168.33.10/api.v1/login
        try{
            const {data} = await api.post('/login', {
                email,
                password
            })
            sessionStorage.setItem('user', JSON.stringify(data.user))
            sessionStorage.setItem('token', data.token)
            props.updateSession();
            history.push("/");
        } catch(e){
            alert('wrong credentials')

        }


    }

    return (
        <div>
            <p>Welcome To WeReserve!</p>
            <p>The only app made to reserve rooms in Weir Hall at Ole Miss!</p>
            <p className={"font-strong"}>Please sign in using your Ole Miss email!</p>
        <form onSubmit={callLogin}>
            <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} required placeholder="email"/>
            <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} required placeholder="password"/>
            <button type="submit">
                login
            </button>
        </form>
            <p className={"font-sm"}>This application is only available to Ole Miss Graduate students and Faculty in Computer Science</p>
        </div>


    )
}

export default Login;