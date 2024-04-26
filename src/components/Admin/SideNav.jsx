import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const SideNav = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="flex justify-between">
        {/*<div>
          <img src="/nexible.gif" alt="logo" className="h-8" />
  </div>*/}
        <div className="text-3xl font-bold">ADMIN</div>
        <div className="flex items-center gap-6 mr-10">
          <FaBell className="text-gray-600" size={24} />
          <div className="bg-black rounded-full p-2">
            <IoPerson className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
