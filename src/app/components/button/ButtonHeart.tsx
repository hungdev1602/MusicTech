"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

export default function ButtonHeart(props: any) {
  const [isActive, setIsActive] = useState(false);

  const { id, wishlist } = props;

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if(user){
        const userId = user.uid;
        console.log("Đã đăng nhập", userId)

        if(wishlist && wishlist[userId]){
          setIsActive(true);
        }
      }
    })
  }, [])

  const handleAddWishList = () => {
    const userId = authFirebase?.currentUser?.uid;

    if(id && userId) {
      const songRef = ref(dbFirebase, `/songs/${id}`);
      runTransaction(songRef, (song) => {
        if(song){
          if(song.wishlist && song.wishlist[userId]){
            song.wishlist[userId] = null;
            setIsActive(false);
          }
          else{
            if(!song.wishlist) {
              song.wishlist = {}
            }
            song.wishlist[userId] = true;
            setIsActive(true);
          }
        }
        return song;
      })
    }
  }

  return (
    <>
      <button 
        onClick={handleAddWishList}
        className={
          "w-[34px] h-[34px] rounded-full border inline-flex items-center justify-center text-white " + 
          (isActive ? "bg-primary border-primary" : "border-white")
        }
      >
        <FaHeart />
      </button>
    </>
  )
}