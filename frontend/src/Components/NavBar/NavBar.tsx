import { Link } from "react-router-dom";
import { useAccount } from '../../Context/useAccount';

function NavBar() {
  const { username } = useAccount();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link className="nav-link" to="/">
              <h1 className="nav-heading">Board.up</h1>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav right-links">

            <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allGames">
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Forums">
                  Forums
                </Link>
              </li>
              {username == '' ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/SignIn">
                      Sign In
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-link" to="/games">
                      My Games
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;