import "./style.css"
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="header">
            <Link to="/">fernando.works</Link>
        </div>
    )
}

export default Header;