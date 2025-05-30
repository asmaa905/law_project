
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
                <div className="cover w-full h-full  p-[200px_10px_120px_10px]
                        flex flex-col justify-center items-center text-center" style={{ backgroundColor: "rgb(21 57 92)" }}>
                    <div className="container ">
                        <div className="content">

                            <h6 className="sub-title font-[300] text-[white] text-[32px] leading-[36px] pb-[30px]">
                                نقدم لكم
                            </h6>
                            <h2 className="title font-[700] text-[white] text-[110px] leading-[110px] pb-[35px] pt-[20px]">
                                افضل الحلول البرمجية
                            </h2>
                            <div className="buttons flex flex-col md:flex-row justify-center items-center pt-9 relative gap-3 w-1/2 mx-auto">
                                <button className=" cursor-pointer  bg-[#fff] text-[rgb(21_57_92)] text-[22px] leading-[35px] font-[300] 
                                hover:bg-[#134776] hover:text-[#fff] px-5 py-3">تواصل معنا
                                </button>
                                <div className="seplitor bg-[#C9A85E] text-white text-[14px] leading-[28px] font-[400]  py-[5px] px-3 h-[40%] absolute left-[45%]">أو</div>
                                <button className=" cursor-pointer bg-[#fff] text-[rgb(21_57_92)] text-[22px] leading-[35px] font-[300]
                                 hover:bg-[#134776] hover:text-[#fff]  px-5 py-3">أطلب استشارتك
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}