
"use client";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBalanceScale, faBank, faCheck, faDiamond, faDotCircle, faEnvelope, faEye, faEyeSlash, faGraduationCap, faHandshake, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function About() {
    return (
        <>
            <div className="about-us  my-36">
                <div className="about-us-section container">
                    <div className="about-us-section flex px-[4rem] flex-col sm:flex-row justify-center items-center mb-16 sm:mb-0">
                        <div className="w-full md:w-1/2  flex flex-col  justify-center items-center md:text-right text-center">
                            <div className="image h-3/4">
                                <img src="assets/images/reem-albrkane1.webp" alt="reem-albrkane" />
                            </div>
                            <h5 className="title  text-[rgb(19,_71,_118)] leading-[53px] text-[38px] font-[700]   text-center md:text-right ">
                                <p className="text-[rgb(153,_153,_153)] leading-[29px] text-[18px] font-[300]  text-center md:text-right my-[1rem]">معلومات عنا</p>
                                لدينا قسم نسائي محترف
                            </h5>
                        </div>

                        <div className="w-full md:w-1/2 md:text-right text-center">

                            <h1 className="title text-[rgb(19,_71,_118)] leading-[53px] text-[38px] font-[700]   text-center md:text-right">
                                <p className="text-[rgb(153,_153,_153)] leading-[29px] text-[18px] font-[300]  my-[1rem]">معلومات عنا</p>
                                شركة رواد الحكمة
                            </h1>
                            <p className="text-[rgb(68,_68,_68)] leading-[29px] text-[18px] font-[300] my-[2rem] text-center md:text-right">شركة مهنية في مجال المحاماة ، تتسم خدماتها القانونية بالتنوع والملاءمة لطبيعة حاجة العملاء ومتطلباتهم ، مستندة في ذلك على منهجية قانونية تتماشى مع المتغيرات والتطورات التي يشهدها القطاع الخاص .
                                <br />
                                تحرص الشركة على سمعتها وتطوير خبراتها المتنوعة لتبقى مصدر ثقتهم واختيارهم الأنسب للمطالبة بحقوقهم أو الدفاع عنها ، من خلال فريق عمل مؤهل محترف ذي كفاءة عالية يوفر الخدمات والحلول القانونية الشاملة .
                            </p>
                            <ul className="flex flex-col sm:flex-row justify-center items-center sm:items-start
                        flex-wrap mt-4  text-right">
                                <li className="flex flex-row md:w-1/2  w-full justify-end mb-2">
                                    <p className="text-[rgb(68,_68,_68)] leading-[27px] text-[17px] font-[700]  text-center md:text-right">الاحترافية</p>
                                    <div className="icon cursor-pointer bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                        <FontAwesomeIcon icon={faCheck} className="text-white font-[900] text-[18px] leading-[36px]" />
                                    </div>
                                </li>
                                <li className="flex flex-row md:w-1/2 w-full justify-end mb-2">
                                    <p className="text-[rgb(68,_68,_68)] leading-[27px] text-[17px] font-[700]  text-center md:text-right">الخبرة</p>
                                    <div className="icon cursor-pointer bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                        <FontAwesomeIcon icon={faBalanceScale} className="text-white font-[900] text-[18px] leading-[36px]" />
                                    </div>
                                </li>
                                <li className="flex flex-row md:w-1/2 w-full justify-end mb-2">
                                    <p className="text-[rgb(68,_68,_68)] leading-[27px] text-[17px] font-[700]  text-center md:text-right">المعرفة</p>
                                    <div className="icon cursor-pointer  bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                        <FontAwesomeIcon icon={faGraduationCap} className="text-white font-[900] text-[18px] leading-[36px]" />
                                    </div>
                                </li>
                                <li className="flex flex-row md:w-1/2 w-full justify-end mb-2">
                                    <p className="text-[rgb(68,_68,_68)] leading-[27px] text-[17px] font-[700]  text-center md:text-right">الثقة</p>
                                    <div className="icon cursor-pointer  bg-[#c9a85e]  px-3 py-2    ml-[10px]  hover:py-3 hover:px-4 transition-[all_1s_ease-in-out]">
                                        <FontAwesomeIcon icon={faHandshake} className="text-white font-[900] text-[18px] leading-[36px]" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="teams mt-36">

                        <div className="content flex flex-col justify-center items-center">
                            <div className="icon  ">
                                <FontAwesomeIcon icon={faBank} className="leading-[1] font-[900] text-[28px] text-[#C9A85E]" />
                            </div>
                            <p className="sub-title font-[300] text-[rgb(30,_70,_134)] text-[18px] leading-[29px]">
                                أعضاء فريق الخبراء
                            </p>
                            <p className=" font-[700] text-[rgb(19,_71,_118)] text-[48px] leading-[67px] pb-[10px] pt-[10px]">
                                فريقنا
                            </p>
                        </div>
                        {/* Family
Roboto, sans-serif
Style
normal
Weight
600
Color
rgb(75, 145, 174)
Size
59px
Line Height
59px */}
                        <div className="content  ">
                            <div className="mangers w-full h-full flex flex-col sm:flex-row justify-center items-center flex-wrap">
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image h-3/4">
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
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image w-full h-3/4">
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
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image w-full h-3/4">
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
                                <div className="member w-full md:w-1/3 px-2 group cursor-pointer">
                                    <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image h-3/4">
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

                            </div>
                            <div className="members-employees mt-24 pt-24 w-full h-full flex flex-col sm:flex-row justify-center items-center flex-wrap">
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image h-3/4">
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
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image h-3/4">
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
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image h-3/4">
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
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image w-full h-3/4">
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
                                <div className="member w-full  md:w-1/3 px-2 group cursor-pointer mb-5">
                                    <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image w-full h-3/4">
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
                                <div className="member w-full md:w-1/3 px-2 group cursor-pointer">
                                    <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                        <div className="cover relative">
                                            <div className="image h-3/4">
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

                            </div>

                            <div className="members-womans mt-20 pt-24 ">
                                <div className="content-header flex flex-row justify-center items-center  mb-20 gap-52 w-full">
                                    <h2 className="w-full sm:w-1/7 font-[600] leading-[59px] text-[rgb(75,_145,_174)]
                                    text-[59px] font-['Changa',_sans-serif] shadow-[rgba(0,_0,_0,_0.3)_4px_7px_22px] line-clamp-2"> القسم النسائى</h2>
                                    <div className="w-full sm:w-1/5 member  px-2 group cursor-pointer mb-5">
                                        <div className="content  h-full  bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_25px]">
                                            <div className="cover relative">
                                                <div className="image bg-white">
                                                    <img src="assets/images/replicate-prediction-j0hy3y9st9rg80cky8199511c0.webp" alt="ahmed_hashem" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">رحاب رمضان

                                                </h5>
                                                <p className="font-[300] text-[14px] leading-[18px] text-white pargraph">
                                                    مستشارة قانونية
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col sm:flex-row-reverse justify-center items-center flex-wrap">
                                    <div className="member w-full  md:w-1/4 px-2 group cursor-pointer mb-5">
                                        <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image ">
                                                    <img src="assets/images/replicate-prediction-z1bmkbs9zdrgc0chjdy827w29c-1152x1536.webp" alt="ahmed_hashem" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">غيداء البلادى</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="member w-full  md:w-1/4 px-2 group cursor-pointer mb-5">
                                        <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image bg-white">
                                                    <img src="assets/images/renad-alqamde-600x838.webp" alt="ahmed_hashem" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">ريناد الغامدى</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="member w-full  md:w-1/4 px-2 group cursor-pointer mb-5">
                                        <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image bg-white">
                                                    <img src="assets/images/45565-scaled.webp" alt="heba alnazlawy" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">هبة النزلاوى</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="member w-full  md:w-1/4 px-2 group cursor-pointer mb-5">
                                        <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image w-full">
                                                    <img src="assets/images/replicate-prediction-jjesdhyf31rga0chy5y8pzjaj8-1254x1536.webp" alt="ismail-alrefai-2" className="w-full h-full" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">رؤى الصبحي</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="member w-full  md:w-1/4 px-2 group cursor-pointer mb-5">
                                        <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image w-full  h-[unset] sm:h-[250px] bg-white">
                                                    <img src="assets/images/IMG-20241017-WA0028_1_-removebg-preview-401x600.webp" alt="ahmed_hashem" className="w-full h-full" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">سارة الجحدلي</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="member w-full md:w-1/4 px-2 group cursor-pointer mb-5">
                                        <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image   bg-white">
                                                    <img src="assets/images/replicate-prediction-7tbmq6w3hxrg80cmbtssz0x5nc-600x600.webp" alt="Maher-alrefai-1-969x1024" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">هدى الجهني</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="member w-full  md:w-1/4 px-2 group cursor-pointer mb-5">
                                        <div className="content w-full  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image w-full  h-[unset] sm:h-[250px]">
                                                    <img src="assets/images/6574-1159x1536.webp" alt="ahmed_hashem" className="w-full h-full" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">غدير الشيخي</h5>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="member w-full md:w-1/4 px-2 group cursor-pointer">
                                        <div className="content  h-full border-[#C9A85E] border-4 bg-transparent bg-[linear-gradient(0deg,_#134776,_#C9A85E)] p-[3px_3px_40px]">
                                            <div className="cover relative">
                                                <div className="image  h-[unset] sm:h-[250px]">
                                                    <img src="assets/images/DSC_4387-768x509.webp" alt="Maher-alrefai-1-969x1024" className="w-full h-full" />
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
                                                <h5 className="font-[900] text-[28px] leading-[36px] text-white">سكينة برطالة</h5>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
