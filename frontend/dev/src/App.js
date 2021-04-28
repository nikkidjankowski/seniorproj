import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Users from "./components/Users";




function App(props) {
    const [loggedInUser, setLoggedInUser] = useState(false);


    const updateSession = () => {
        let localUser = false;
        if (sessionStorage.user) {
            localUser = JSON.parse(sessionStorage.user);
        }
        setLoggedInUser(localUser);
        //confirms the session has a user and setting that local user for the session

    }
    return (
        <BrowserRouter>
            <div className="d-flex main-container">
                <Header loggedInUser={loggedInUser}/> //this browser path and route only shows when the local user has become the logged in user
                <section className="f-1 container o-y-auto w-100p font-md">

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/calendar" component={Calendar}/>
                        <Route exact path="/profile">
                           <Profile user={loggedInUser}>

                           </Profile>
                        </Route>
                        <Route path="/login">
                            <Login updateSession={updateSession}/>
                        </Route>
                        <Route exact path={"/users"} component={Users}/>
                    </Switch>
                </section>
                <p className={"font-strong"}>Hotty Toddy!</p>
                <footer className="p-2 bg-gray">
                    Booking available for Graduate Computer Science Students and Computer Science Faculty
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
