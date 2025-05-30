import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Then use like this:
export default function Footer() {
  return (
    <>
      <div className="footer-top text-white text-right pt-[60px] pb-[50px] bg-[#134776]">
        <div className="container flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <h4 className=" mb-[20px] font-[400] text-white text-[20px] leading-[28px] pt-[14px] pr-[22px] pb-[14px] b-w-[0_0_1px] rounded-[2px] bg-transparent bg-[linear-gradient(-90deg,__rgba(0,_0,_0,_0.22),_#134776)]">تواصل معنا</h4>
            <div className="content">
              <div className="col-cont flex flex-col justify-center items-end  mb-[20px]">
                <div className="head flex justify-between gap-2 font-[300] text-[16px] leading-[32px] text-white">

                  <p className="text">
                    الهاتف
                  </p>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                </div>
                <p className="cont font-[400] text-[14px] leading-[29px] text-white">٠٦٣٠٠٧٠٠٢ - ٠٥٤٣٠٠٧٠٠١</p>
              </div>
              <div className="col-cont flex flex-col justify-center items-end mb-[20px]">
                <div className="head flex justify-between gap-2 font-[300] text-[16px] leading-[32px] text-white">
                  <p className="text">
                    الايميل
                  </p>
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />

                  </div>
                </div>
                <p className="cont font-[400] text-[14px] leading-[29px] text-white">info@rowadalhikmah.com</p>

              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <h4 className=" mb-[20px] font-[400] text-white text-[20px] leading-[28px] pt-[14px] pr-[22px] pb-[14px] b-w-[0_0_1px] rounded-[2px] bg-transparent bg-[linear-gradient(-90deg,__rgba(0,_0,_0,_0.22),_#134776)]">مواعيد العمل</h4>
            <div className="hours-work">
              <div className="open flex justify-between items-center border-b-1 border-b-white mb-[20px] pb-1
            font-[300] text-white text-[18px] leading-[29px]">
                <p className="open-time">  ٨:٠٠ص حتى ٥:٠٠م </p>
                <p className="open-days">من الاحد الى الخميس</p>
              </div>
              <div className="close  flex justify-between items-center border-b-1 border-b-white pb-1
            font-[300] text-white text-[18px] leading-[29px]">
                <p className="open-time">مغلق</p>
                <p className="open-days">الجمعة - السبت</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col justify-center items-end">
            <div className="image w-[220px]  mb-[30px] ml-auto">
              <img src="/assets/images/logos/logo-footer.webp" alt="" className="w-full h-full" />
            </div>
            <div className="paragph text-white leading-[29px] text-[18px]  font-[300] mb-[30px] max-w-[372.5px]">
              <p>نحرص على توفير خدمات قانونية مميزة لعملائنا من خلال منظومة قانونية متكاملة  تقدم خدماتنا المخصصة بكفاءة واحترافية</p>
            </div>
            <div className="social flex justify-end items-center">
              <div className="icon-social text-[#fff] bg-[#c9a85e] py-[5px] px-[10px] ml-[15px]">
                <FontAwesomeIcon icon={faLocationDot} className="text-[16px]" />
              </div>
              <div className="icon-social text-[#fff] bg-[#c9a85e] py-[5px] px-[10px] ml-[15px]">
                <FontAwesomeIcon icon={faTwitter} className="text-[16px]" />
              </div>
              <div className="icon-social text-[#fff] bg-[#c9a85e]  py-[5px] px-[10px] ml-[15px]">
                <FontAwesomeIcon icon={faEnvelope} className="text-[16px]" />
              </div>
              <div className="icon-social text-[#fff] bg-[#c9a85e] py-[5px] px-[10px] ml-[15px]">
                <FontAwesomeIcon icon={faWhatsapp} className="text-[16px]" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div
        style={{
          background: "#113d64",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: '20px', paddingBottom: '20px',
          border: "1px solid transparent"
        }}
      >
        {/*   Family
Changa
Style
normal
Weight
300
Color
rgb(255, 255, 255)
Size
14px
Line Height
22px
AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQ*/}
        <p className="text-[14px] leading-[22px] text-white font-[300]"
          style={{ marginBottom: 2, textAlign: "center", color: "#fff", direction: "rtl" }}
        >
          © جميع الحقوق محفوظة لدى شركة رواد الحكمة ٢٠٢٥
        </p>
      </div>
    </>

  );
}
