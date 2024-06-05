import { FaTachometerAlt, FaRegSun, FaRegChartBar, FaStickyNote, FaWrench, FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='bg-[]  px-[25px]'>
            <div className="px-[15px] py-[30px]  border-b-[1px] border-[#356D00]/[0.3]">
                {/* <FaTachometerAlt color="white" /> */}
            
                    < img src="https://nibss-plc.com.ng/wp-content/uploads/2022/09/nibbs_logo.png" alt="" />
                
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#356D00]/[0.3] cursor-pointer font-bold">
                <FaTachometerAlt color="green" />
                <NavLink to="/" className="text-[17px] leading-[20px]  text-[#356D00]">Dashboard</NavLink>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#356D00]/[0.3] cursor-pointer font-bold">
                <FaStickyNote color="green" />
                <NavLink to="/billers" className="text-[17px] leading-[20px] text-[#356D00]  ">Billers</NavLink>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#356D00]/[0.3] cursor-pointer font-bold">
                <FaWrench color="green" />
                <NavLink to= "/mandates" className=" text-[17px] leading-[20px] text-[#356D00]">Mandates </NavLink>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#356D00]/[0.3] cursor-pointer font-bold">
                <FaRegCalendarAlt color="green" />
                <NavLink to ="/Transactions" className="text-[17px] leading-[20px] text-[#356D00]">Transactions</NavLink>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#356D00]/[0.3] cursor-pointer font-bold">
                <FaRegChartBar color="green" />
                <NavLink to = "/Reports" className=" text-[17px] leading-[20px] text-[#356D00]">Reports </NavLink>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#356D00]/[0.3] cursor-pointer font-bold">
                <FaRegSun color="green" />
                <NavLink to = "/Settings" className="text-[17px] leading-[20px]  text-[#356D00]">Settings</NavLink>
            </div>
            <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#]/[0.3] cursor-pointer font-bold">
                <FaStickyNote color="green" />
                <NavLink to ="/Features" className="text-[17px] leading-[20px]   text-[#356D00]">Features </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;