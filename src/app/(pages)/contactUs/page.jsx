
"use client";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBalanceScale, faCheck, faDiamond, faDotCircle, faEnvelope, faEye, faEyeSlash, faGraduationCap, faHandshake, faLocationDot, faPhoneAlt, faPhoneVolume, faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
    return (
        <>
            <div className="contact-us my-44">
                <div className="container w-[95%] mx-auto">
                    <div className="contatc-info flex flex-col md:flex-row gap-6 justify-between items-center">
                        <div className="address flex flex-row gap-6">
                            <div className="text flex flex-col text-right">
                                <h3 className="text-[rgb(19,_71,_118)] text-[24px] leading-[34px] font-[700]">عنوان</h3>
                                <p className="text-[rgb(19,_71,_118)] text-[18px] leading-[29px] font-[300]">عمر بن عبدالعزيز - حي الصريف -ينبع</p>
                            </div>
                            <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)] cursor-pointer
                             hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]   px-4 py-3 rounded-sm text-center flex flex-col justify-center  ">
                                <FontAwesomeIcon icon={faLocationDot} className="text-white text-[30px] leading-[60px] font-[900]" />
                            </div>
                        </div>
                        <div className="phone flex flex-row gap-6">

                            <div className="text flex flex-col text-right">
                                <h3 className="text-[rgb(19,_71,_118)] text-[24px] leading-[34px] font-[700]">رقم الهاتف</h3>
                                <p className="text-[rgb(19,_71,_118)] text-[18px] leading-[29px] font-[300]">٠٥٤٣٠٠٧٠٠١ - ٠٥٤٣٠٠٧٠٠٢</p>
                            </div>
                            <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]  cursor-pointer
                             hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]  px-4 py-3 rounded-sm text-center flex flex-col justify-center ">
                                <FontAwesomeIcon icon={faPhoneVolume} className="text-white text-[30px] leading-[60px] font-[900]" />
                            </div>
                        </div>
                        <div className="email flex flex-row gap-6">

                            <div className="text flex flex-col text-right">
                                <h3 className="text-[rgb(19,_71,_118)] text-[24px] leading-[34px] font-[700]">البريد الالكترونى</h3>
                                <p className="text-[rgb(19,_71,_118)] text-[18px] leading-[29px] font-[300]">info@RowadAlHikmah.com</p>
                            </div>
                            <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]  cursor-pointer
                             hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]   px-4 py-3 rounded-sm text-center flex flex-col justify-center  ">

                                <FontAwesomeIcon icon={faEnvelope} className="text-white text-[30px] leading-[60px] font-[900]" />
                            </div>
                        </div>


                    </div>

                </div>
                <div className="contact-form-map ">
                    <div className="container w-[95%] mx-auto flex flex-wrap flex-col md:flex-row mt-20 justify-between items-center">

                        <div className="w-1/2 map  h-[500px]">
                            <iframe className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.692093819811!2d38.0823126!3d24.0771452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15b90795c6e6e43b%3A0x26f1150961ae3a32!2z2LTYsdmD2Kkg2LHZiNin2K8g2KfZhNit2YPZhdipINmE2YTZhdit2KfZhdin2Kkg2YjYp9mE2KfYs9iq2LTYp9ix2KfYqiDYp9mE2YLYp9mG2YjZhtmK2Kk!5e0!3m2!1sar!2seg!4v1749574632456!5m2!1sar!2seg"
                                style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                        <div className="w-1/2 contact-form text-right">
                            <h1 className="text-[rgb(19,_71,_118)] text-[38px] leading-[53px] font-[700]"
                            >اتصل بشركة رواد الحكمة <span className="text-[rgb(201,_168,_94)]">للمحاماة</span></h1>
                            <p className="sub-title text-[rgb(189,_189,_189)] text-[18px] leading-[29px] font-[300]">ارسل رسالة. سنتواصل معك بأقرب وقت </p>


                            <form className="mt-9 px-3">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="name" name="name" id="name" placeholder="(*)اسمك"
                                        className="text-[rgba(0,_0,_0,_0.5)]   text-right
                                 dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer
                                text-[16px] leading-[normal] font-[400] block py-3 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#134776] 
                                 appearance-none  " required />
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input name="email" type="email" id="email" placeholder="بريدك الالكترونى"
                                        className="text-[rgba(0,_0,_0,_0.5)]   text-right
                                 dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer
                                text-[16px] leading-[normal] font-[400] block py-3 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#134776] 
                                 appearance-none "  />
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input name="email" type="email" id="email" placeholder="(*)الجوال"
                                            className="text-[rgba(0,_0,_0,_0.5)]   text-right
                                 dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer
                                text-[16px] leading-[normal] font-[400] block py-3 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#134776] 
                                 appearance-none  "  />
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input name="email" type="email" id="email" placeholder="موضوع"
                                            className="text-[rgba(0,_0,_0,_0.5)]   text-right
                                 dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer
                                text-[16px] leading-[normal] font-[400] block py-3 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#134776] 
                                 appearance-none "  />
                                    </div>

                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <select name="consultings" id="consultings"
                                        className="block py-3 px-0 w-full  text-[16px] leading-[normal] font-[400]  text-[rgba(0,_0,_0,_0.5)] bg-transparent border-0 border-b-2  text-right
                                border-[#134776] appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer
                               " >
                                        <option value="0" disabled selected>الاستشارات</option>
                                        <option value="1" >دراسة قضية</option>
                                        <option value="2">الدعم</option>
                                        <option value="3">اخرى</option>

                                    </select>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea name="describtion" id="floating_company" placeholder="الوصف"
                                        className="block py-3 px-0 w-full  text-[16px] leading-[normal] font-[400]  text-[rgba(0,_0,_0,_0.5)] bg-transparent 
                                        border-0 border-b-3  text-right
                                border-[#134776] appearance-none dark:text-white focus:outline-none focus:ring-0  " />
                                </div>
                                <div className="w-full flex flex-col justify-center items-end">

                                    <button type="submit" className="text-white focus:ring-4 focus:outline-none  
                                text-right
                             focus:ring-gray-300 font-medium text-sm w-full sm:w-auto  bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]
                             px-5 py-4  flex flex-col justify-center cursor-pointer
                             hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)] ">ارسل طلبك</button>
                                </div>
                            </form>


                        </div>

                    </div>

                </div>
            </div >
        </>
    );
}
