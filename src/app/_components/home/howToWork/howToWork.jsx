
"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBank, faComment, faDiamond, faDotCircle, faEnvelope, faEye, } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
export default function HeaderPage() {
    let router = useRouter();
    return (
        <>
            <div className="relative">
                <div className="head-cover w-full  relative" >
                    <div className="image w-full h-full">
                        <img src="assets/images/backgroud.jpg" alt="cover" className="w-full h-full" />
                    </div>
                    <div className="cover w-full h-full absolute top-0 right-0 bottom-0 left-0 pt-[250px] pb-[100px]
                        flex flex-col justify-center items-center text-center" style={{ backgroundColor: "rgba(255 255 255 /60%)" }}>
                        <div className="container pb-[200px]">
                            <div className="content">
                                <div className="icon  w-[25%]  mx-auto ">
                                    <FontAwesomeIcon icon={faBank} className="leading-[1] font-[900] text-[28px] text-[#C9A85E]" />
                                </div>
                                <p className="sub-title font-[300] text-[rgb(153,_153,_153)] text-[18px] leading-[29px]">
                                    خطوة بخطوة
                                </p>
                                <p className=" font-[700] text-[rgb(19,_71,_118)] text-[48px] leading-[67px] pb-[10px] pt-[10px]">
                                    كيف نعمل ؟
                                </p>
                            </div>
                            <div className="image w-full  flex flex-col md:flex-row pt-[100px] pr-[40px]">
                                {/* public\assets\images\ */}
                                <img src="assets/images/background_4.png" alt="service" />
                            </div>
                            <div className="how-to-work-items  flex flex-col md:flex-row">
                                <div className="w-1/4 px-[15px] h-[300px]">
                                    <div className="bg-white p-[60px_35px_40px] m-auto shadow-[0px_5px_25px_0px_rgba(0,_0,_0,_0.1)] h-full">
                                        <h4 className="font-[700] text-[rgb(19,_71,_118)] text-[24px] leading-[34px] pb-[25px]">عن بعد</h4>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faAngleDown} className="text-[#C9A85E] font-[900] text-[27px] leading-[41px] pb-2" />
                                        </div>
                                        <p className="pargraph font-[300] text-[rgb(102,_102,_102)] text-[18px] leading-[29px] ">
                                            تقديم الخدمات القانونية والاستشارات عن طريق برامج الاتصال ومتابعة الاعمال .

                                        </p>
                                    </div>

                                </div>
                                <div className="w-1/4 px-[15px] h-[300px]">
                                    <div className="bg-white p-[60px_35px_40px] m-auto shadow-[0px_5px_25px_0px_rgba(0,_0,_0,_0.1)] h-full">
                                        <h4 className="font-[700] text-[rgb(19,_71,_118)] text-[24px] leading-[34px] pb-[25px]">زيارة ميدانية</h4>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faAngleDown} className="text-[#C9A85E] font-[900] text-[27px] leading-[41px] pb-2" />
                                        </div>
                                        <p className="pargraph font-[300] text-[rgb(102,_102,_102)] text-[18px] leading-[29px] ">
                                            زيارة احد ممثلي الشركة من محامين ومستشارين الى مقر عملك لتقديم الخدمات

                                        </p>
                                    </div>

                                </div>
                                <div className="w-1/4 px-[15px] h-[300px]">
                                    <div className="bg-white p-[60px_35px_40px] m-auto shadow-[0px_5px_25px_0px_rgba(0,_0,_0,_0.1)] h-full">
                                        <h4 className="font-[700] text-[rgb(19,_71,_118)] text-[24px] leading-[34px] pb-[25px]">زيارة الشركة</h4>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faAngleDown} className="text-[#C9A85E] font-[900] text-[27px] leading-[41px] pb-2" />
                                        </div>
                                        <p className="pargraph font-[300] text-[rgb(102,_102,_102)] text-[18px] leading-[29px] ">
                                            نرحب بزيارة عملائنا الى مقرالشركة لتقديم الخدمات القانونية والاستشارات.

                                        </p>
                                    </div>

                                </div>
                                <div className="w-1/4 px-[15px] h-[300px]">
                                    <div className="bg-white p-[60px_35px_40px] m-auto shadow-[0px_5px_25px_0px_rgba(0,_0,_0,_0.1)] h-full">
                                        <h4 className="font-[700] text-[rgb(19,_71,_118)] text-[24px] leading-[34px] pb-[25px]">طلب استشارة</h4>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faAngleDown} className="text-[#C9A85E] font-[900] text-[27px] leading-[41px] pb-2" />
                                        </div>
                                        <p className="pargraph font-[300] text-[rgb(102,_102,_102)] text-[18px] leading-[29px] ">
                                            تتيح شركة رواد الحكمة عن طريق الموقع الالكتروني ومنصة الواتساب والهاتف .
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <button className="group cursor-pointer mx-auto mt-[100px] font-[300]
                                text-white bg-[linear-gradient(-45deg,_rgb(201,_168,_94),_rgb(19,_71,_118))] 
                                text-[18px] leading-[29px] p-[20px_40px] 
                                hover:bg-white hover:text-[rgb(201,_168,_94)] 
                                hover:shadow-[1px_2px_5px_rgb(255,_255,_255)] hover:border-[rgb(201,_168,_94)]
                                transition-[all_duration-200_ease-in-out]
                                flex flex-row justify-between items-center gap-6
                        ">
                                نبدا الان!
                                <FontAwesomeIcon
                                    icon={faCommentAlt}
                                    className="text-white group-hover:text-[rgb(201,_168,_94)]"
                                />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}