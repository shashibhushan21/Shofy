import Link from "next/link";
import React, { useState } from "react";
import menu_data from "@/data/menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <nav className="tp-main-menu-content">
        {menu_data && menu_data.map((menu, i) => (
          <ul key={i}>
            <li>
              <Link href={menu.link}>
                {menu.title}
              </Link>
            </li>
          </ul>
        ))}
      </nav>
    </>
  );
};

export default MobileMenus;
