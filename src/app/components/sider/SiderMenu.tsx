"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode, useEffect, useState } from "react";
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {
  const [isLogin, setIsLogin] = useState<boolean>()

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user: any) => {
      if(user){
        const uid = user.uid;
        // console.log("Đã đăng nhập", uid);
        setIsLogin(true);
      }
      else{
        // console.log("Chưa đăng nhập");
        setIsLogin(false);
      }
    })
  }, [])

  interface MenuLink{
    icon: ReactNode,
    title: String,
    link: Url,
    logged?: Boolean
  }

  const menu: MenuLink[] = [
    {
      icon: <FaHouse />,
      title: "Home",
      link: "/"
    },
    {
      icon: <FaMusic />,
      title: "Song Categories",
      link: "/categories"
    },
    {
      icon: <FaPodcast />,
      title: "Singers",
      link: "/singers"
    },
    {
      icon: <FaHeart />,
      title: "Wishlist",
      link: "/wishlist",
      logged: true
    },
    {
      icon: <FaRightFromBracket />,
      title: "Log out",
      link: "/logout",
      logged: true
    },
    {
      icon: <FaUser />,
      title: "Log in",
      link: "/login",
      logged: false
    },
    {
      icon: <FaUserPlus />,
      title: "Register",
      link: "/register",
      logged: false
    },
  ]

  return (
    <>
      <nav className="pt-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <SiderMenuItem 
              key={index} 
              item={item} 
              isShow={item.logged === undefined || item.logged === isLogin ? true : false}
            />
          ))}
        </ul>
      </nav>
    </>
  )
}