import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

//fake for now
const Home = () => (<p>Home</p>);


function App(props) {
    const [loggedInUser, setLoggedInUser] = useState(false);


    const updateSession = () => {
        let localUser = false;
        if (sessionStorage.user) {
            localUser = JSON.parse(sessionStorage.user);
        }
        setLoggedInUser(localUser);

    }
    return (
        <BrowserRouter>
            <div className="d-flex main-container">
                <Header loggedInUser={loggedInUser}/>
                <section className="f-1 container o-y-auto w-100p">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/calendar" component={Calendar}/>
                        <Route path="/login">
                            <Login updateSession={updateSession}/>
                        </Route>
                    </Switch>
                </section>
                <footer className="p-2 bg-gray">
                    here be our footer
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
