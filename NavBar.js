import { Link } from 'react-router-dom';

const UnAuthenticatedNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/" className="navbar-brand btn mb-0 h1 mx-3">
                Task Tracker
            </Link>
            <button
                className="navbar-toggler mx-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                        <Link to="/" className="nav-link active">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/signup" className="nav-link active">
                            sign-up
                        </Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/signin" className="nav-link active">
                            sign-in
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const AuthenticatedNav = ({ setUser }) => {
    const signOut = (e) => {
        e.preventDefault();
        setUser({});
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to="/" className="navbar-brand btn mb-0 h1">
                Task Tracker
            </Link>
            <button
                className="navbar-toggler mx-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                        <Link to="/" className="nav-link active">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/" className="nav-link active">
                            User Profile
                        </Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link
                            to="/"
                            className="nav-link active"
                            onClick={signOut}
                        >
                            sign out
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export const NavBar = ({ user, setUser, isAuthenticated }) => {
    if (isAuthenticated(user)) {
        return <AuthenticatedNav setUser={setUser} />;
    }

    return <UnAuthenticatedNav />;
};
