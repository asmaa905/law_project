"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBuilding, faBusinessTime, faFileContract, faGavel, faMask, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
export default function SomeServices() {
    let router = useRouter();
    return (
        <>
            <div className="bg-[url('/assets/images/bg2.webp')] bg-center bg-cover py-[100px]">
                <div className="container">
                    <div className="content w-full h-full flex flex-col md:flex-row justify-center items-center">
                        <div className="w-1/4 flex flex-col justify-center items-center">

                            <h5 className="font-[500] text-[rgb(19,_71,_118)] text-[70px] leading-[normal] pb-[5px] mb-[15px] border-b-[#c9a85e] border-b-[5px]">

                                ١٩
                                <span className="font-[300] text-[rgba(19,_71,_118,_0.6)] text-[55px] leading-[normal]">مليون</span>

                            </h5>
                            <p className="font-[300] text-[rgb(19,_71,_118)] text-[18px] leading-[normal]">اجمالى المبالغ المستردة</p>
                        </div>
                        <div className="w-1/4 flex flex-col justify-center items-center">

                            <h5 className="font-[500] text-[rgb(19,_71,_118)] text-[70px] leading-[normal] pb-[5px] mb-[15px] border-b-[#c9a85e] border-b-[5px]">
                                <span className="font-[300] text-[rgba(19,_71,_118,_0.6)] text-[55px] leading-[normal]">+</span>

                                ٤,٨٩٦
                            </h5>
                            <p className="font-[300] text-[rgb(19,_71,_118)] text-[18px] leading-[normal]">استشارة ناجحة</p>
                        </div>
                        <div className="w-1/4 flex flex-col justify-center items-center">

                            <h5 className="font-[500] text-[rgb(19,_71,_118)] text-[70px] leading-[normal] pb-[5px] mb-[15px] border-b-[#c9a85e] border-b-[5px]">
                                <span className="font-[300] text-[rgba(19,_71,_118,_0.6)] text-[55px] leading-[normal]">+</span>

                                ٤٩٨
                            </h5>
                            <p className="font-[300] text-[rgb(19,_71,_118)] text-[18px] leading-[normal]">قضية ناجحة</p>
                        </div>
                        <div className="w-1/4 flex flex-col justify-center items-center">

                            <h5 className="font-[500] text-[rgb(19,_71,_118)] text-[70px] leading-[normal] pb-[5px] mb-[15px] border-b-[#c9a85e] border-b-[5px]">
                                <span className="font-[300] text-[rgba(19,_71,_118,_0.6)] text-[55px] leading-[normal]">+</span>

                                ١,٦٠٥
                            </h5>
                            <p className="font-[300] text-[rgb(19,_71,_118)] text-[18px] leading-[normal]">عملاء يثقون بنا</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}