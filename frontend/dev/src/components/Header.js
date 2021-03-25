// this is header

import {Link} from "react-router-dom";


function Header({loggedInUser}) {


    return (
        <header className="p-2 bg-primary text-white">
            {loggedInUser ? (
                <div>
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
                </div>
            ) : (
                <Link to="/login">
                    <button
                        className="b-rounded-2 b-1 b-white bg-transparent text-white hover:bg-white hover:text-black">Login
                    </button>

                </Link>
            )}
        </header>
    )
}

export default Header;
