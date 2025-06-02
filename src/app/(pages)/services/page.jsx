
"use client";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBalanceScale, faCheck, faDiamond, faDotCircle, faEnvelope, faEye, faEyeSlash, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';
export default function Services() {
    return (
        <>
            <div className="about-us ">
                <div className=" h-full relative">
                    <div className="head-cover w-full h-[700px] relative " >
                        <div className="image w-full h-full">
                            <img src="assets/images/rawid-alhikma.jpg" alt="cover" className="w-full h-full" />
                        </div>
                        <div className="cover w-full h-full absolute top-0 right-0 bottom-0 left-0 flex flex-col  pt-[100px]" style={{ backgroundColor: "#2A3D8B", opacity: "0.9" }}>

                            <div className="main-title  w-[60%]  mx-auto mt-[0px]">
                                <h4 className="font-[700] text-[#fff] text-[36px] leading-[50px] pb-[20px] text-center">شركة رواد الحكمة للمحاماة والاستشارات القانونية
                                </h4>

                                <p className="pargraph font-[300] text-[#fff] text-[18px] leading-[29px] text-center pb-[30px]">
                                    شركة رواد الحكمة للمحاماة والاستشارات القانونية شركة مهنية ذات مسؤولية محدودة، مرخص لها بتقديم الخدمات القانونية من قبل وزارة العدل في المملكة العربية السعودية، تتكون من مجموعة من المحامين والمستشارين الحاصلين على درجات علمية عليا ، يتمتعون بخبرة واسعة تمتد لثلاثين عاما في مجالات القانون المختلفة كالقضاء التجاري والإداري والمنازعات المدنية لتشكل بذلك افضل كيان محاماة في المملكة ومجموعة متكاملة من خدمات المحاماة والاستشارات القانونية والشرعية وفق أعلى معايير الجودة
                                </p>
                            </div>

                            <div className="container mx-auto">
                                <ul className="flex flex-col sm:flex-row justify-center items-start flex-wrap mt-4">
                                    <li className="flex flex-row md:w-1/7 sm:w-1/3 w-full justify-end ">
                                        <p className="font-[300] text-[#fff] text-[18px] leading-[29px]">الاحترافية</p>
                                        <div className="icon bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                            <FontAwesomeIcon icon={faCheck} className="text-white font-[900] text-[18px] leading-[36px]" />
                                        </div>
                                    </li>
                                    <li className="flex  flex-row md:w-1/7 sm:w-1/3 w-full justify-end">
                                        <p className="font-[300] text-[#fff] text-[18px] leading-[29px]">الخبرة</p>
                                        <div className="icon bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                            <FontAwesomeIcon icon={faBalanceScale} className="text-white font-[900] text-[18px] leading-[36px]" />
                                        </div>
                                    </li>
                                    <li className="flex flex-row md:w-1/7 sm:w-1/3 w-full justify-end mb-5">

                                        <p className="font-[300] text-[#fff] text-[18px] leading-[29px]">المعرفة</p>
                                        <div className="icon bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                            <FontAwesomeIcon icon={faGraduationCap} className="text-white font-[900] text-[18px] leading-[36px]" />
                                        </div>
                                    </li>

                                    <li className="flex flex-row md:w-1/7 sm:w-1/3 w-full justify-end">
                                        <p className="font-[300] text-[#fff] text-[18px] leading-[29px]">الثقة</p>
                                        <div className="icon bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                            <FontAwesomeIcon icon={faHandshake} className="text-white font-[900] text-[18px] leading-[36px]" />
                                        </div>
                                    </li>
                                </ul>
                                <button className=" cursor-pointer mx-auto mt-[30px] mb-[50px] font-[300] text-white bg-[#c9a85e]  flex flex-row justify-center items-center
                            text-[18px] leading-[29px]  hover:bg-[rgb(153,_153,_153)]  border-0 p-[.6em_1.2em]
                            transition-[background_.2s_ease-in-out,_color_.2s_ease-in-out,_border-color_.2s_ease-in-out_!important]">
                                    <FontAwesomeIcon icon={faAngleLeft} className="text-white font-[900] text-[18px] leading-[36px] pr-3" />
                                    <strong>اقرأ أكثر</strong>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="floating-about bg-white pb-[200px]">
                        <div className="container relative">
                            <div className="notifcation bg-[linear-gradient(-45deg,_rgb(201,_168,_94),_rgb(19,_71,_118))] w-[90%] mx-auto 
                            absolute bottom-[-96px] left-[5%] p-[10px_10px] sm:p-[50px_50px] flex flex-col sm:flex-row justify-between items-center gap-2">
                                <div className="w-1/4">
                                    <button className="group cursor-pointer font-[300] text-[#1e4686] bg-[white]  flex flex-row justify-center 
                              items-center text-[18px] leading-[29px]  hover:bg-[transparent] hover:border-[white] hover:border-2 border-0 hover:text-white p-[.6em_1.2em]
                            transition-[background_.2s_ease-in-out,_color_.2s_ease-in-out,_border-color_.2s_ease-in-out_!important]">
                                        <FontAwesomeIcon icon={faAngleLeft} className="text-[#1e4686]  group-hover:text-white font-[900] text-[18px] leading-[36px] pr-3" />
                                        <strong>ارسل طلب</strong>
                                    </button>
                                </div>
                                <div className="w-1/2">
                                    <h3 className="font-[700] text-[#fff] text-[32px] leading-[45px] text-right">اطلب دراسة قضيتك</h3>
                                    <p className="font-[300] text-[#fff] text-[18px] leading-[29px] text-right">شركة رواد الحكمة تتيح لك طلب دراسة قضيتك وحيثياتها وبيان موقفك فيها .</p>
                                </div>
                                <div className="w-1/10 icon h-[60px]">
                                    <img src="assets/images/study.webp" alt="study" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
