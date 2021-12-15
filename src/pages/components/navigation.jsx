import { Link } from "react-router-dom";
import "./navigation.css"
export default function Navigation() {
    return (
    
        <div className="navigation d-flex justify-content-around">
            <Link to='/' className="navItem"  >Movies</Link>
            <Link to='shows' className="navItem" >Shows</Link>
            <Link to='news' className="navItem" >News</Link>
        </div>
    )
}
