"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBalanceScale, faBank, faBuilding, faBusinessTime, faEnvelope, faFileContract, faGavel, faMask, faPhone, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function SomeServices() {
    let router = useRouter();
    return (
        <>
            <div className=" py-[100px] relative mx-[100px] bg-white">
                <div className="container  transform-[translateY(-20%)] right-[5%] bg-white pt-16">
                    <div className="head flex flex-col justify-center items-center text-center pb-4">
                        <div className="icon  w-[25%]  mx-auto ">
                            <FontAwesomeIcon icon={faBank} className="leading-[1] font-[900] text-[28px] text-[#C9A85E]" />
                        </div>
                        <p className="sub-title font-[300] text-[rgb(153,_153,_153)] text-[18px] leading-[29px]">
                            اعضاء فريق الخبراء
                        </p>
                        <p className=" font-[700] text-[rgb(19,_71,_118)] text-[48px] leading-[67px] pb-[10px] pt-[10px]">
                            فريقنا
                        </p>
                    </div>
                    <div className="content w-full h-full flex flex-col md:flex-row justify-center items-center gap-4">
                        <div className="member w-1/4  px-2 group cursor-pointer">
                            <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                <div className="cover relative">
                                    <div className="image">
                                        <img src="assets/images/ahmedhashem.webp" alt="ahmed_hashem" />
                                    </div>
                                    <div className="img-cover absolute  top-0 right-0 left-0 bottom-0 bg-[rgba(255_255_255_/50%)] pt-10 pl-3 hidden group-hover:block">
                                        <ul className="socail w-[35px] border-l-[0.5px]  border-r-[0.5px] border-b-[0.5px]   border-[#ccc] text-center ">
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">
                                                <FontAwesomeIcon icon={faWhatsapp} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                     <FontAwesomeIcon icon={faPhone} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                     <FontAwesomeIcon icon={faEnvelope} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text pt-[40px] text-center">
                                    <h5 className="font-[900] text-[28px] leading-[36px] text-white">أحمد الهاشمى</h5>
                                    <p className="font-[300] text-[14px] leading-[18px] text-white pargraph">
                                        كبير المستشارين
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="member w-1/4  px-2 group cursor-pointer">
                            <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                <div className="cover relative">
                                    <div className="image w-full h-full">
                                        <img src="assets/images/ismail-alrefai-2.webp" alt="ismail-alrefai-2" className="w-full h-full" />
                                    </div>
                                    <div className="img-cover absolute  top-0 right-0 left-0 bottom-0 bg-[rgba(255_255_255_/50%)] pt-10 pl-3 hidden group-hover:block">
                                        <ul className="socail w-[35px] border-l-[0.5px]  border-r-[0.5px] border-b-[0.5px]   border-[#ccc] text-center ">
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">
                                                <FontAwesomeIcon icon={faWhatsapp} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                <FontAwesomeIcon icon={faPhone} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                <FontAwesomeIcon icon={faEnvelope} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text pt-[40px] text-center">
                                    <h5 className="font-[900] text-[28px] leading-[36px] text-white">اسماعيل الجهنى</h5>
                                    <p className="font-[300] text-[14px] leading-[18px] text-white pargraph">
                                        عضو مجلس ادارة
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="member w-1/4  px-2 group cursor-pointer">
                            <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                <div className="cover relative">
                                    <div className="image w-full h-full">
                                        <img src="assets/images/DSC_4161-600x600.webp" alt="ahmed_hashem" className="w-full h-full" />
                                    </div>
                                    <div className="img-cover absolute  top-0 right-0 left-0 bottom-0 bg-[rgba(255_255_255_/50%)] pt-10 pl-3 hidden group-hover:block">
                                        <ul className="socail w-[35px] border-l-[0.5px]  border-r-[0.5px] border-b-[0.5px]   border-[#ccc] text-center ">
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">
                                                <FontAwesomeIcon icon={faWhatsapp} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                <FontAwesomeIcon icon={faPhone} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                <FontAwesomeIcon icon={faEnvelope} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="text pt-[40px] text-center">
                                    <h5 className="font-[900] text-[28px] leading-[36px] text-white">سعود الجهنى</h5>
                                    <p className="font-[300] text-[14px] leading-[18px] text-white pargraph">
                                        نائب الرئيس
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="member w-1/4  px-2 group cursor-pointer">
                            <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                <div className="cover relative">
                                    <div className="image">
                                        <img src="assets/images/Maher-alrefai-1-969x1024.webp" alt="Maher-alrefai-1-969x1024" />
                                    </div>
                                    <div className="img-cover absolute  top-0 right-0 left-0 bottom-0 bg-[rgba(255_255_255_/50%)] pt-10 pl-3 hidden group-hover:block">
                                        <ul className="socail w-[35px] border-l-[0.5px]  border-r-[0.5px] border-b-[0.5px]   border-[#ccc] text-center ">
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">
                                                <FontAwesomeIcon icon={faWhatsapp} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                     <FontAwesomeIcon icon={faPhone} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                            <li className="py-2 px-2 text-center  border-t-[0.25px]  border-[#ccc] hover:bg-[#C9A85E] 
                                            bg-[rgb(19,_71,_118)] text-white">                                                     <FontAwesomeIcon icon={faEnvelope} className="font-[400] text-white text-[18px] leading-[36px]" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text pt-[40px] text-center">
                                    <h5 className="font-[900] text-[28px] leading-[36px] text-white">ماهر الرفاعى</h5>
                                    <p className="font-[300] text-[14px] leading-[18px] text-white pargraph">
                                        رئيس مجلس الادارة
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
                <div className="content w-[90%] mx-auto flex flex-col justify-center items-center">
                    <button className="serve-btn gap-2 flex flex-row hover:bg-[#134776] bg-[#C9A85E] p-[15px_25px] justify-between items-center">
                        <span className="block font-[300] text-white text-[18px] leading-[29px]" >فريق العمل</span>
                        <FontAwesomeIcon icon={faAddressBook} className=" font-[900] text-white text-[24px] leading-[24px]" />
                    </button>
                </div>
            </div>
        </>
    );
}
