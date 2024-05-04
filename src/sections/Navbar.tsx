import React from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
    const navigattionRoutes = [
        {
            name: "Search",
            route: "/Search"
        },
        {
            name: "Compare",
            route: "/Compare"
        },
        
        {
            name: "Pokemon",
            route: "/Pokemon"
        },
        {
            name: "My List",
            route: "/MyList"
        },
        {
            name: "About",
            route: "/About"
        },
        
    ]
    return(
       <nav>
        <div className="block">
        <img src={pokeballIcon} alt="pokeball icon" />
        </div>
        <div className="data">
            <ul>
                {
                    navigattionRoutes.map(({name,route},index)=>{
                        return <Link to={route} key={index}>
                            <li>
                                {name}
                            </li>
                        </Link>
                    })
                }
            </ul>
        </div>
        <div className="block">
            <GiHamburgerMenu/>
        </div>
       </nav>
    )
    
}
export default Navbar