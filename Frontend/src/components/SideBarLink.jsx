
import { BsChatSquare } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiNewspaperLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

const links = [
    { name: 'All Chats', icon: <BsChatSquare/> },
    { name: 'Works', icon: <MdOutlineWorkOutline/> },
    { name: 'Friends', icon: <LiaUserFriendsSolid/> },
    { name: 'News', icon: <PiNewspaperLight/> },
    { name: 'Profile', icon: <CgProfile/> },
    { name: 'Logout', icon: <CiLogout/>},
  ];

function SideBarLinks() {
    return (
        <div className="w-2/12 bg-slate-800 border-l flex flex-col items-start p-6 justify-evenly h-screen rounded-2xl pr-0">
            {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center mb-4 cursor-pointer hover:text-blue-500">
                <span className="text-2xl mr-2">{link.icon}</span>
                <span className="font-normal text-sm">{link.name}</span>
            </div>
            ))}
        </div>
    )
}

export default SideBarLinks