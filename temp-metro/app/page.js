'use client'
import PaymentModal from "@/components/common/misc/Modal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  return (
    <div className="flex items-center justify-center">
      <p onClick={openModal} className="flex bg-blue-400 w-44 p-2 mt-64 cursor-pointer hover:bg-blue-200 text-white text-nowrap items-center justify-center rounded-lg"> Open Modal</p>
      <PaymentModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
    </div>
  );
}
