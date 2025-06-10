
"use client";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
export default function Services() {
    return (
        <>
            <div className="services py-5">
                <div className="container h-full">
                    <div className=" flex flex-col-reverse md:flex-row h-full justify-center items-start">
                        <div className="w-full md:w-2/3  flex flex-col md:flex-row justify-center md:justify-between items-center  text-black h-full flex-wrap my-auto mt-5">
                            <div className="w-full sm:w-1/2 mb-5">
                                <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                    <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                        <img decoding="async" width="64" height="64" src="https://rowadalhikmah.com/wp-content/uploads/2019/03/icon4.png"
                                            data-src="" className="w-[80%] h-[80%]" alt="" />
                                    </div>
                                    <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">تأسيس وحوكمة الشركات</h5>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-5">
                                <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                    <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                        <img decoding="async" src="https://rowadalhikmah.com/wp-content/uploads/2019/03/icon1.png" data-src="" className="
                               w-[80%] h-[80%]" alt="" />
                                    </div>
                                    <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">الاستشارات القانونية</h5>
                                </div>

                            </div>
                            <div className="w-full sm:w-1/2 mb-5">
                                <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                    <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                        <img loading="lazy" decoding="async" width="60" height="60" src="https://rowadalhikmah.com/wp-content/uploads/2019/02/icon1.png" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                    </div>
                                    <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">التمثيل القانوني
                                    </h5>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-5">
                                <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                    <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                        <img decoding="async" width="64" height="64" src="https://rowadalhikmah.com/wp-content/uploads/2019/03/icon7.png" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                    </div>
                                    <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">صياغة وتدقيق العقود</h5>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 title flex flex-col  justify-between items-end text-white 
                    bg-[linear-gradient(-45deg,_rgba(201,_168,_94,_0.91),_rgba(19,_71,_118,_0.88))] bg-transparent p-[55px_55px_35px]  h-[500px]">
                            <h4 className="title font-[700] text-[#fff] text-[36px] leading-[50px]">
                                خدماتنا
                            </h4>
                            <a href="/services" className=" font-[300] text-[#fff] text-[18px] leading-[29px] flex flex-row justify-center items-center">
                                <FontAwesomeIcon icon={faAngleLeft} className="text-white font-[900] text-[18px] leading-[36px] pr-2" /> جميع الخدمات
                            </a>
                        </div>
                    </div>
                    <div className="notifcation bg-[linear-gradient(-45deg,_rgba(201,_168,_94,_0.91),_rgba(19,_71,_118,_0.88))] my-[100px] 
                    px-[10px] py-[20px] bg-red-100">
                        <p className="font-[700] text-[#fff] text-[36px] leading-[50px] text-center">تلبية لاحتياجات عملائنا الكرام وخصوصياتهم <br />
                            يوجد لدينا قسم نسائي </p>
                    </div>
                </div>
            </div>
        </>
    );
}
