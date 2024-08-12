"use client"

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";

export default function SiderMenu() {
  interface MenuLink{
    icon: ReactNode,
    title: String,
    link: Url,
  }

  const menu: MenuLink[] = [
    {
      icon: <FaHouse />,
      title: "Trang chủ",
      link: "/"
    },
    {
      icon: <FaMusic />,
      title: "Danh mục bài hát",
      link: "/categories"
    },
    {
      icon: <FaPodcast />,
      title: "Ca sĩ",
      link: "/singers"
    },
    {
      icon: <FaHeart />,
      title: "Bài hát yêu thích",
      link: "/wishlist"
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng xuất",
      link: "/logout"
    },
    {
      icon: <FaUser />,
      title: "Đăng nhập",
      link: "/login"
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng ký",
      link: "/register"
    },
  ]

  const pathname = usePathname();

  return (
    <>
      <nav className="pt-[30px] px-[20px]">
        <ul className="">
            {menu.map((item, index) => (
              <li className="mb-[30px]" key={index}>
                <Link 
                  href={item.link} 
                  className={
                    `flex items-center hover:text-primary ` + 
                    (item.link === pathname ? "text-primary" : "text-white")
                  }>
                  <span className="text-[20px]">
                    {item.icon}
                  </span>
                  <span className="ml-[20px] text-[16px] font-[700]">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  )
}