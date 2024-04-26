import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";

const Sidebar = () => {

  return (
    <div>
      <div className="h-screen bg-black w-16">
        <div className="p-4">
        <RxHamburgerMenu className="text-white" size={24} />
        <div className="flex flex-col justify-center items-center gap-6 py-20">
        <MdDashboard className="text-white" size={28} />
        <FaThList className="text-white" size={22} />
        <RiBillFill className="text-white" size={28} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
