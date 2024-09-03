"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdDashboard, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TiContacts } from "react-icons/ti";


const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: <AiOutlineHome />

  },
  {
    name: "About",
    href: "/",
    icon: <BsPeople />

  },
  {
    name: "Mails",
    href: "/",
    icon: <FiMail />

  },
  {
    name: "Contact",
    href: "/",
    icon: <TiContacts />

  }
];

export default function Sidebar() {

  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(false);


  const toggleSidebarCollapseHandler = () => {
    setIsCollapsedSidebar((prev) => !prev);
  }


  return <div className="sidebar_wrapper">
    <button className="btn" onClick={toggleSidebarCollapseHandler}>
      <MdOutlineKeyboardArrowLeft />
    </button>
    <aside className="sidebar" data-collapse={isCollapsedSidebar}>
      <div className="sidebar_top">
        <Image src="/301io.png" width={140} height={50} className="sidebar_logo" alt={"logo"} />
        
      </div>
      <ul className="sidebar_list">
        {sidebarItems.map(({ name, href, icon }) => (
          <li className="sidebar_item" key={name}>
            <Link href="/" className="sidebar_link">
              <div className="sidebar_icon">
                {icon}
              </div>
              <span className="sidebar_name">
                {name}</span></Link>
          </li>
        ))}
      </ul>
    </aside>
  </div>
}