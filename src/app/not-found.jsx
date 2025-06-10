import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (

    <section className="bg-white dark:bg-gray-900 flex  flex-col justify-center items-center w-full h-[100vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 font-[400] text-[rgb(19,_71,_118)] text-[261px] leading-[366px] ">
            404
          </h1>
          {/*
    Family
Changa
Style
normal
Weight
300
Color
rgb(255, 255, 255)
Size
18px
Line Height
29px
AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQq*/}
          <p className="mb-4  font-[400] text-[rgb(0,_0,_0)] text-[32px] leading-[45px] ">
            الصفحة غير موجودة.
          </p>

          <Link
            href="/"
            className="inline-flex text-white  font-[300] text-[18px] leading-[29px]  bg-[rgb(19,_71,_118)] 
            hover:bg-white hover:border-[rgb(19,_71,_118)] hover:text-[rgb(19,_71,_118)]  hover:border-2
            focus:ring-4 focus:outline-none focus:ring-[rgb(19,_71,_118)]  px-5 py-3 text-center 
            mt-[80px] mb-4"
          >
            العودة الى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
}
