import Logo from "../helpers/Logo";
import { CiSearch } from "react-icons/ci";
import { TfiPencilAlt } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "./navbar.module.css";


const Navbar = () => {
    return(
        <div className={`${styles.contain}`}>
            <div className="flex items-center gap-4 ">
            <Logo/>
            <div className="flex items-center gap-4 bg-[#f9f9f9] p-2 rounded-[50px]">
            <CiSearch/>
            <input type="text" placeholder="search" className="outline-none"/>
            </div>

            </div>

<div>

    
<div className="flex items-center gap-4">
    <div className="flex items-center gap-4">
            <TfiPencilAlt className="w-6 h-6t"/>
            <p className="text-base text-[#6B6B6B] capitalize font-[100 ]">Write</p>
    </div>



            <IoIosNotificationsOutline className="w-6 h-6"/>
            </div>

</div>
           
        </div>
    )
}

export default Navbar;