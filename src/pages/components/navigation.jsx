import "./Navigation.css";
import { NavLink } from "react-router-dom";
export default function Navigation() {
    return (
    <>
        

        <div className="flex justify-around  h-full items-center ">
            <div>
            <NavLink to="/" className={({ isActive }) => isActive ? "movieSelectIcon itemSelect iconBackground w-10 " :  "movieIcon navItem iconBackground w-10 "}>            
            </NavLink>
            </div>

            <div>
                <NavLink to='news' className={({ isActive }) => isActive ? "newsSelectIcon itemSelect iconBackground w-10 " :  "newsIcon navItem iconBackground w-10 "} ></NavLink>
            </div>

            <div>
                <NavLink to='shows'className={({ isActive }) => isActive ? "showsSelectIcon itemSelect iconBackground w-10 " :  "showsIcon navItem iconBackground w-10"}></NavLink>
            </div>

        </div>





      </>  
    )
}
