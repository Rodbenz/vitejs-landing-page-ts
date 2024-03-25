import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "../profile";
import GridViewIcon from "@mui/icons-material/GridView";

interface NavBar {}
export default function NavBar({}: NavBar) {
  const currentUser = useSelector((state: any) => state?.user?.user);
  const navigate = useNavigate();

  return (
    <nav className={`mx-10 rounded-xl py-4 select-none bg-gray-300 opacity-60`}>
      <div className="flex justify-between items-center">
        <div className="">
          <img
            alt="Logo"
            src="http://trr-web.trrgroup.com/storage/INTRANET/DMZ/Asset/Logo/Logo_TRR_Lin_TH.png"
            className="w-64 pl-10"
          />
        </div>
        <div
          onClick={() => navigate("/auth/login")}
          className={`w-32 h-14 bg-green-500 mr-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-green-300 duration-300 ${
            currentUser && `hidden`
          }`}
        >
          <label className="font-bold cursor-pointer">Login</label>
        </div>
        <div
          className={`${
            !currentUser && `hidden`
          } mr-10 flex items-center space-x-5`}
        >
          <label
            htmlFor=""
            className="text-black font-bold"
          >{`${currentUser?.employee_fname_en} ${currentUser?.employee_lname_en}`}</label>
          <Profile />
          <GridViewIcon sx={{ fontSize: 50 }} color={'primary'}/>
        </div>
      </div>
    </nav>
  );
}
