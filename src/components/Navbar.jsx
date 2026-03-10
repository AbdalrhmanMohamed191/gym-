
import {Link} from "react-router-dom"
import {useAuth} from "../context/AuthContext"

export const Navbar=()=>{

const {user,logout}=useAuth()

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-black">

<div className="container">

<Link className="navbar-brand" to="/">EMS Fitness</Link>

<ul className="navbar-nav ms-auto">

<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

{!user && (
<>
<li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
<li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
</>
)}

{user && (
<>
<li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
<li className="nav-item"><button onClick={logout} className="btn btn-sm btn-danger ms-2">Logout</button></li>
</>
)}

</ul>

</div>

</nav>

)
}
