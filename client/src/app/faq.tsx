"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import fs from 'fs'

function Faq({name,answer}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 text-2xl flex justify-between " style={{ backgroundColor: '#333333' }}>
        {name}
        <div className=" cursor-pointer " onClick={handleOpen}>
          {open ? <RxCross1 /> : <FaPlus />}
        </div>
      </div>
      <br />
      <div className={open ? '' : 'hidden' } style={{ backgroundColor: '#333333' }}>
        {answer}
      </div>
    </div>
  );
}

export default Faq;
