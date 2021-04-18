// this is header

import {Link} from "react-router-dom";


function Header({loggedInUser}) {


    return (
        <header className="p-2 bg-primary text-white">
            {loggedInUser ? (
                <div>
                    <p className={"font-l, font-strong"}>Welcome to WeReserve!</p>
                    <Link to="/">
                        <button
                            className="m-r-4 b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black">Home
                        </button>

                    </Link>
                    <Link to="/calendar">
                        <button
                            className="b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black">Calendar
                        </button>

                    </Link>
                    <Link to="/profile">
                        <button
                            className="b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black m-l-4">My Profile
                        </button>

                    </Link>
                    {loggedInUser.user_type==="faculty"?(
                    <Link to="/users">
                        <button
                            className="b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black m-l-4">Manage Users
                        </button>

                    </Link>
                    ):null}
                </div>
            ) : (
                <Link to="/login">
                    <button
                        className="b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black">Login
                    </button>

                </Link>
            )}
         <div>

         </div>
        </header>



    )
}

export default Header;
