import { Link, NavLink } from "react-router-dom"

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary pb-0 pt-0 mb-0">
            <div className="container-fluid">
                <Link className="navbar-brand border py-0 px-2 rounded fs-1" to="/" id='page-header'>hAIku</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon border"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-4">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item fs-4">
                            <NavLink className="nav-link" to="archive">Archive</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
