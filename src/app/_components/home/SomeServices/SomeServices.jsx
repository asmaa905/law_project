
"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import "./SomeServices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBuilding, faBusinessTime, faFileContract, faGavel, faMask, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
export default function SomeServices() {
    let router = useRouter();
    return (
        <>
            <div className="bg-white py-[100px]">
                <div className="container">
                    <div className="head flex gap-6 justify-between items-center flex-col md:flex-row">
                        <button className="serve-btn gap-2 flex flex-row hover:bg-[#134776] bg-[#C9A85E] p-[20px_40px] justify-between items-center">
                            <span className="block font-[300] text-white text-[18px] leading-[29px]" > عرض جميع خدماتنا</span>
                            <FontAwesomeIcon icon={faBalanceScale} className=" font-[900] text-white text-[24px] leading-[24px]" />
                        </button>
                        <h2 className=" font-[700] text-[#134776] text-[38px] leading-539px]" >بعض خدماتنا </h2>
                    </div>
                    <div className="body flex flex-col md:flex-row border-2 border-[#ccc] justify-between items-center mt-5">
                        <div className="w-2/3 flex flex-col md:flex-row justify-end items-center px-5">
                            <div className="image w-1/3">
                                <img src="assets/images/some_service.webp" alt="some_service" className="w-full h-full" />
                            </div>
                            <div className="text w-2/3 text-right ">
                                <h3 className="font-[700] text-[rgb(19,_71,_118)] text-[32px] leading-[45px] pb-5">
                                    <span className=" text-[rgb(19,_71,_118)] ">التمثيل</span>
                                    &nbsp; <span className=" text-[#C9A85E] ">القانونى</span>
                                </h3>
                                <p className="paragaph font-[300] text-[rgb(68,_68,_68)] text-[18px] leading-[29px] ">تتولى شركة رواد الحكمة  المرافعة والمدافعة عن العملاء وتمثيلهم لدي كافة المحاكم الشرعية – ديوان المظالم – لجنة تسوية المنازعات المصرفية – لجان مكتب العمل – لجان مكتب الفصل في منازعات الأوراق التجارية – اللجان شبة القضائية والإدارية – اللجان الجمركية – المنازعات أمام هيئة التحكيم المحلية والدولية
                                </p>
                            </div>


                        </div>
                        <div className="w-1/3 bg-[#134776]">
                            <ul className="w-full h-full">
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  
                                cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)]
                                 flex flex-row gap-2 justify-end items-center  active">
                                    <span className="">تأسيس الشركات</span>
                                    <FontAwesomeIcon icon={faBusinessTime} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className="">تأسيس الشركات</span>
                                    <FontAwesomeIcon icon={faBusinessTime} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className="">صياغة وتدقيق كافة العقود </span>
                                    <FontAwesomeIcon icon={faFileContract} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className="">الاستشارات القانونية والشرعية</span>
                                    <FontAwesomeIcon icon={faBalanceScale} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className="">التمثيل القانوني</span>
                                    <FontAwesomeIcon icon={faGavel} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className="">التجارية</span>
                                    <FontAwesomeIcon icon={faBuilding} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className="">الجنائية</span>
                                    <FontAwesomeIcon icon={faMask} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className=""> العمالية والادارية</span>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </li>
                                <li className="p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  cursor-pointer hover:text-[rgb(19,_71,_118)] text-white bg-[rgb(19,_71,_118)] flex flex-row gap-2 justify-end items-center  ">
                                    <span className="">الأحوال الشخصية</span>
                                    <FontAwesomeIcon icon={faUsers} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}