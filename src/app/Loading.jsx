import React from "react";
export default function loading() {
  return (
    <>
      <div role="status" className="flex flex-col justify-center items-center w-full h-[100vh]">

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="/" className=" block w-[500px] h-[200px]">
            <img src="https://rowadalhikmah.com/wp-content/uploads/2023/01/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9-1-h.png" alt="" />
          </a>

        </div>
      </div>
    </>
  );
}