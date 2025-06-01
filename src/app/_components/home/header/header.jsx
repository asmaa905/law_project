
"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond, faDotCircle, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
export default function HeaderPage() {
    let router = useRouter();
    return (
        <>
            <div className="relative">
                <div className="head-cover w-full h-[700px] relative" >
                    <div className="image w-full h-full">
                        <img src="assets/images/bakback.png" alt="cover" className="w-full h-full" />
                    </div>
                    <div className="cover w-full h-full absolute top-0 right-0 bottom-0 left-0 flex flex-col  pt-[150px]" style={{ backgroundColor: "transparent" }}>
                        <div className="main-title  w-[95%] md:w-[60%]  mx-auto mt-[50px]">
                            <img src="assets/images/logos/com.webp" alt="" className="w-full h-full pos" />
                        </div>

                        <p className=" w-[90%] md:w-[50%]  mx-[unset] text-wrap md:mx-auto font-[300] text-[rgb(19,_71,_118)] text-[16px] md:text-[20px] text-center pb-[10px] pt-[10px]">شركة مهنية ذات مسؤولية محدودة،  مرخص لها بتقديم
                            الخدمات والاستشارات القانونية
                        </p>
                        <button className=" cursor-pointer mx-auto mt-[100px] font-[400] text-white bg-[rgb(19,_71,_118)] text-[14px] leading-[16px] block 
                    hover:text-[rgb(19,_71,_118)] hover:bg-[transparent] hover:border-[rgb(19,_71,_118)] hover:border-2 border-0
                    p-[17px_25px]
                    transition-[background_.2s_ease-in-out,_color_.2s_ease-in-out,_border-color_.2s_ease-in-out_!important]">إحجز موعد
                        </button>
                    </div>
                </div>
                <div className="container flex flex-col-reverse sm:flex-row sm:flex-wrap justify-center lg:justify-between items-start  pb-[30px] -translate-y-[7%] md:-translate-y-[15%] translate-x-[0%] bg-transparent">
                    <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 h-[380px] md:px-[16px] px-[10px] py-[5px]">
                        <div className="bg-white border border-[#3f51b5] hover:border-[#c9a85e] p-[25px_10px] 
                        hover:border-b-[10px] transition-all duration-220 ease-in-out flex flex-col items-center h-full">
                            <div className="icon m-[0_0_20px]">
                                <FontAwesomeIcon className="  text-[#c9a85e]  font-[400] text-[40px] leading-[80px]" icon={faDiamond} />
                            </div>
                            <h4 className="title text-black font-[700] text-[24px] leading-[34px] p-[0_0_15px]">قيمنا</h4>
                            <p className="pargraph text-center pt-[6px]  text-[rgb(68,_68,_68)] font-[300] text-[18px] leading-[29px]">
                                نلتزم بالخصوصية والصدق والشفافية واكمال العمل بإتقان وكفاءة واحترافية لتحقيق أهداف عملائنا وكسب ثقتهم وبناء شراكات استراتيجية طويلة الأمد معهم
                            </p>
                        </div>

                    </div>
                    <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 h-[380px] md:px-[16px] px-[10px] py-[5px]">
                        <div className="bg-white border border-[#3f51b5] hover:border-[#c9a85e] p-[25px_10px] 
                        hover:border-b-[10px] transition-all duration-220 ease-in-out flex flex-col items-center h-full">                            <div className="icon m-[0_0_20px]">
                                <FontAwesomeIcon className="text-[#c9a85e]  font-[400] text-[40px] leading-[80px]" icon={faEnvelope} />
                            </div>
                            <h4 className="title text-black font-[700] text-[24px] leading-[34px] p-[0_0_15px]">رسالتنا</h4>
                            <p className="pargraph text-center pt-[6px]  text-[rgb(68,_68,_68)] font-[300] text-[18px] leading-[29px]">
                                نحرص على توفير خدمات قانونية مميزة لعملائنا من خلال منظومة قانونية متكاملة تقدم خدماتها المتخصصة بكفاءة واحترافية
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 h-[380px] md:px-[16px] px-[10px] py-[5px]">
                        <div className="bg-white border border-[#3f51b5] hover:border-[#c9a85e] p-[25px_10px] 
                        hover:border-b-[10px] transition-all duration-220 ease-in-out flex flex-col items-center h-full">                            <div className="icon m-[0_0_20px]">
                                <FontAwesomeIcon className="text-[#c9a85e]  font-[400] text-[40px] leading-[80px]" icon={faDotCircle} />
                            </div>
                            <h4 className="title text-black font-[700] text-[24px] leading-[34px] p-[0_0_15px]">هدفنا</h4>
                            <p className="pargraph text-center pt-[6px]  text-[rgb(68,_68,_68)] font-[300] text-[18px] leading-[29px]">
                                المحافظة على مصالح وسرية وخصوصية عملائنا وفهم أهدافهم وتلبية كافة احتياجاتهم القانونية، والعمل جاهدين على توفير خدمات قانونية عالية الجودة
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2 h-[380px] md:px-[16px] px-[10px] py-[5px]">
                        <div className="bg-white border border-[#3f51b5] hover:border-[#c9a85e] p-[25px_10px] 
                        hover:border-b-[10px] transition-all duration-220 ease-in-out flex flex-col items-center h-full">                            <div className="icon m-[0_0_20px]">
                                <FontAwesomeIcon className="text-[#c9a85e]  font-[400] text-[40px] leading-[80px]" icon={faEye} />
                            </div>
                            <h4 className="title text-black font-[700] text-[24px] leading-[34px] p-[0_0_15px]">رؤيتنا</h4>
                            <p className="pargraph text-center pt-[6px]  text-[rgb(68,_68,_68)] font-[300] text-[18px] leading-[29px]">
                                التميز والريادة سعيا منا إلى تقديم الخدمات القانونية بصورة مميزة لضمان رعاية مصالح عملائنا وتحقيق تطلعاتهم ومصالحهم
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
