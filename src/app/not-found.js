import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900 flex  flex-col justify-center items-center w-full h-[100vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black-600 dark:text-black-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            الصفحة غير موجودة.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            عذرًا، لا يمكننا العثور على هذه الصفحة. ستجد الكثير لاستكشافه على
            الصفحة الرئيسية.{" "}
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-gray-900 hover:bg-black-500 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-black-900 my-4"
          >
            الرجوع الى الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
}
