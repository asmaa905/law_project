
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBank, } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faBalanceScale, faBuilding, faBusinessTime, faFileContract, faGavel, faMask, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./SomeServices.css"
import { useState } from "react";

import * as React from "react";
export default function Services() {
    const services = [
        { id: 1, name: "تأسيس الشركات", title: "تأسيس الشركات", image: "assets/images/business-jpg-74161145593532097-600x338.webp", body: "لدى شركة رواد الحكمة خبرة طويلة في مجال تأسيس الشركات التجارية المحلية والمختلطة بمختلف أنواعها ( المساهمة – المحدودة – التضامنية – التوصية البسيطة – القابضة... الخ ) وما يطرأ عليها من تعديلات وتصفية الشركات - تسجيل العلامات التجارية – تسجيل الوكالات التجارية – استخراج السجلات التجارية والقيام بتعديلاتها – تحويل المؤسسات الفردية إلي شركات – إعداد اللوائح العمالية الداخلية والمهام الوظيفية للشركات والمؤسسات – وضع الأنظمة والمواثيق التي تحافظ على حماية واستقرار الشركات العائلية ( من الأزمات ) – تولي مهام التحكيم في المنازعات التجارية – استصدار تراخيص وسجلات الشركات الأجنبية والمختلطة من الهيئة العامة للاستثمار" },
        { id: 2, name: "صياغة وتدقيق كافة العقود ", title: "صياغة وتدقيق  كافة العقود", image: "assets/images/aquod.webp", body: "العقود من أهم مصادر الالتزام في التعاملات اليومية بين أفراد المجتمع فيما بينهم أو بين أفراد المجتمع ومؤسساته العامة أو الخاصة أو بين مؤسسات المجتمع العامة والخاصة فيما بينها، وحيث إن الفرد منا في حياته اليومية يبرم العديد من العقود (دون وعي منه بأهميتها والآثار المترتبة عليها) لذا ينبغي عليه المعرفة والعلم بشروط العقود التي أبرمها والالتزامات المترتبة عليها..." },
        { id: 3, name: "الاستشارات القانونية والشرعية", title: "الاستشارات  القانونية والشرعية", image: "assets/images/consult.webp", body: "تقدم شركة رواد الحكمة كافة الاستشارات القانونية والشرعية الشفوية والمكتوبة فالاستشارة القانونية هي استكشاف رأي النظام و الشرع في مسألة معينة أو موضوع بعينه قد تكون محل نزاع جدي أمام القضاء أو نزاع ممكن أن يقع مستقبلاً..." },
        { id: 4, name: "التمثيل القانوني", title: "التمثيل القانوني", image: "assets/images/some_service.webp", body: "تتولى شركة رواد الحكمة  المرافعة والمدافعة عن العملاء وتمثيلهم لدي كافة المحاكم الشرعية – ديوان المظالم – لجنة تسوية المنازعات المصرفية – لجان مكتب العمل – لجان مكتب الفصل في منازعات الأوراق التجارية – اللجان شبة القضائية والإدارية – اللجان الجمركية – المنازعات أمام هيئة التحكيم المحلية والدولية" },
        { id: 5, name: "التجارية", title: "قضايا  التجارية وتحصيل الديون", image: "assets/images/eccomerce.webp", body: "مع صدور نظام التنفيذ بالمملكة العربية السعودية خصصت شركة رواد الحكمة قسم مستقل لقضايا الأوراق التجارية ( السند لأمر – الكمبيالة – الشيك ) وتحصيل الديون يضم نخبة من أفضل المحاميين والمستشارين في قضايا الأوراق التجارية." },
        { id: 6, name: "الجنائية", title: "قضايا  الجنائية", image: "assets/images/genaay.webp", body: "- الجرائم المعلوماتية. - قضايا المخدرات ( التعاطي والاتجار- التهريب ) . - قضايا القتل العمد وشبه العمد والشروع بالقتل. - قضايا السرقات . - قضايا الخطف. - قضايا الحرابة..." },
        { id: 7, name: "العمالية والادارية", title: "قضايا  العماليةوالإدارية", image: "assets/images/workers.webp", body: "تعد شركة رواد الحكمة من أمهر وأفضل المحامين بالمملكة العربية السعودية بقضايا الشركات فقد قام بالعديد من الأبحاث المتعلقة بعمل الشركات ومنها ( حماية شركات المساهمة من الإفلاس ، وحماية الشركات العائلية من الأزمات )..." },
        { id: 8, name: "الأحوال الشخصية", title: "قضايا الأحوال الشخصية", image: "assets/images/personal_statuses.webp", body: "تعد قضايا الأحوال الشخصية والأسرية وما تتضمنه من:- - قضايا الطلاق والخلع وفسخ النكاح للضرر. - قضايا النفقة . - قضايا الحضانة والزيارة. - قضايا النشوز . - قضايا إثبات الوقف والوصية والنسب والغيبة والوفاة وحصر الورثة وقسمة التركة..." },
    ];

    // State to track the active service
    const [activeService, setActiveService] = useState(services[0]);

    // Function to handle menu item click
    const handleServiceClick = (service) => {
        setActiveService(service);
    };
    return (
        <>
            <div className="services my-44">
                <div className="container pb-[100px]">
                    <div className="w-full flex flex-col md:flex-row  justify-center md:justify-between items-center text-black h-full flex-wrap ">
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img loading="lazy" decoding="async" width="60" height="60" src="assets/images/icons/eccomerce.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">القضايا التجارية </h5>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" src="https://rowadalhikmah.com/wp-content/uploads/2019/03/icon1.png" data-src="" className="
                               w-[80%] h-[80%]" alt="" />
                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">الاستشارات القانونية</h5>
                            </div>

                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" width="64" height="64" src="assets/images/icons/seagha.webp"
                                        data-src="" className="w-[80%] h-[80%]" alt="" />
                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">صياغة وتدقيق العقود
                                </h5>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" width="64" height="64" src="assets/images/icons/sea.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">قضايا النقل البحرى</h5>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img loading="lazy" decoding="async" width="60" height="60" src="assets/images/icons/airplane.svg" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">قضايا النقل الجوى
                                </h5>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" width="64" height="64" src="assets/images/icons/person.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">القضايا العمالية
                                </h5>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" width="64" height="64" src="assets/images/icons/represent.webp"
                                        data-src="" className="w-[80%] h-[80%]" alt="" />
                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">التمثيل القانونى</h5>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" src="assets/images/icons/manger.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="" />
                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">القضايا الادارية</h5>
                            </div>

                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img loading="lazy" decoding="async" width="60" height="60" src="assets/images/icons/genay.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center"> القضايا الجنائية
                                </h5>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" width="64" height="64" src="assets/images/icons/fekrea.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">حماية حقوق الفكرية</h5>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img loading="lazy" decoding="async" width="60" height="60" src="assets/images/icons/personal_status.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">الاحوال الشخصية

                                </h5>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-5 flex flex-col  justify-center items-center">
                            <div className="content w-[80%] p-[15px] hover:shadow-[0px_10px_25px_rgba(0,_0,_0,_0.13)]     flex flex-col justify-center items-center gap-10">
                                <div className="icon bg-[rgb(19,_71,_118)] text-white w-[64px] h-[64px]  p-3">
                                    <img decoding="async" width="64" height="64" src="assets/images/icons/international.webp" data-src="" className="
                               w-[80%] h-[80%]" alt="international represention" />

                                </div>
                                <h5 className="font-[700] text-[#000] text-[24px] leading-[34px] text-center">التمثيل الدولى</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="head-cover w-full  relative h-[1500px] sm:h-[1000px] " >
                    <div className="image w-full h-full">
                        <img src="assets/images/backgroud.jpg" alt="cover" className="w-full h-full" />
                    </div>
                    <div className="cover w-full h-full absolute top-0 right-0 bottom-0 left-0  pt-[303px] sm:pt-[250px] pb-[200px]
                                            flex flex-col justify-center items-center text-center" style={{ backgroundColor: "rgba(255 255 255 /60%)" }}>
                        <div className="container pb-[200px] sm:pb-[10px]">
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
                            <div className="image w-full  hidden md:flex flex-col md:flex-row pt-[100px] pr-[40px]">
                                <img src="assets/images/background_4.png" alt="service" />
                            </div>
                            <div className="how-to-work-items  flex flex-col md:flex-row md:gap-0 gap-5 pt-5">
                                <div className="w-full  md:w-1/4 px-[15px] lg:h-[300px]">
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
                                <div className="w-full  md:w-1/4 px-[15px] lg:h-[300px]">

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
                                <div className="w-full  md:w-1/4 px-[15px] lg:h-[300px]">

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
                                <div className="w-full  md:w-1/4 px-[15px] lg:h-[300px]">

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
                            <button className="group cursor-pointer mx-auto mt-[70px] font-[300]
                                                    text-white hover:bg-white bg-[rgb(19,_71,_118)] 
                                                    bg-[linear-gradient(-45deg,_rgb(201,_168,_94),_rgb(19,_71,_118))] 
                                                    hover:bg-none
                                                    text-[18px] leading-[29px] p-[20px_40px]  hover:text-[rgb(201,_168,_94)] 
                                                    hover:border-[rgb(201,_168,_94)]
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
                <div className="floating-about bg-white pt-[50px] pb-[25px]">

                    <div className="notifcation bg-[linear-gradient(-45deg,_rgb(201,_168,_94),_rgb(19,_71,_118))] w-[80%] mx-auto my-3 sm:my-0  
                                                        transform-[translateY(unset)] sm:transform-[translateY(-40%)]  sm:-translate-x-[5%] translate-x-[unset] 
                                                        flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center gap-2 p-[10px_10px] sm:p-[50px_50px]">
                        <div className="w-full sm:w-1/4">
                            <button className="group cursor-pointer font-[300] text-[#1e4686] bg-[white]  flex flex-row justify-center 
                                                          items-center text-[18px] leading-[29px]  hover:bg-[transparent] hover:border-[white] hover:border-2 border-0 hover:text-white p-[.6em_1.2em]
                                                        transition-[background_.2s_ease-in-out,_color_.2s_ease-in-out,_border-color_.2s_ease-in-out_!important]">
                                <FontAwesomeIcon icon={faAngleLeft} className="text-[#1e4686]  group-hover:text-white font-[900] text-[18px] leading-[36px] pr-3" />
                                <strong>ارسل طلب</strong>
                            </button>
                        </div>
                        <div className="w-3/4 sm:w-1/2">
                            <h3 className="font-[700] text-[#fff] text-[32px] leading-[45px] text-right">اطلب دراسة قضيتك</h3>
                            <p className="font-[300] text-[#fff] text-[18px] leading-[29px] text-right">شركة رواد الحكمة تتيح لك طلب دراسة قضيتك وحيثياتها وبيان موقفك فيها .</p>
                        </div>
                        <div className="w-1/4 sm:w-1/10 icon h-[60px]">
                            <img src="assets/images/study.webp" alt="study" className="w-full h-full" />
                        </div>
                    </div>
                </div>
                <div className="bg-white py-[100px]">
                    <div className="container">
                        <div className="head flex gap-6 justify-between items-center flex-col-reverse sm:flex-row mb-14">
                            <button className="serve-btn gap-2 flex flex-row hover:bg-[#134776] bg-[#C9A85E] p-[20px_40px] justify-between items-center">
                                <span className="block font-[300] text-white text-[18px] leading-[29px]" >استشارتك</span>
                                <FontAwesomeIcon icon={faBalanceScale} className=" font-[900] text-white text-[24px] leading-[24px]" />
                            </button>
                            <h2 className=" font-[700] text-[#134776] text-[38px] leading-539px] text-center sm:text-right " >خدماتنا بعمق</h2>
                        </div>
                        <div className="body flex flex-col-reverse md:flex-row border-2 border-[#ccc] justify-between items-start mt-5  sm:px-0 px-3 sm:pb-0 pb-3">
                            <div className="pt-[28px] sm:pt-0 w-full sm:w-2/3 flex flex-col-reverse  md:flex-row justify-end items-start sm:px-5 px-0">
                                <div className="image w-full  sm:w-1/3">
                                    <img src={activeService.image} alt={activeService.title} className="w-full h-full" />
                                </div>
                                <div className="text w-full sm:w-2/3 text-right ">
                                    <h3 className="font-[700] text-[rgb(19,_71,_118)] text-[32px] leading-[45px] pb-5">
                                        <span className=" text-[rgb(19,_71,_118)] ">{activeService.title.split(' ')[0]}</span>
                                        &nbsp; <span className=" text-[#C9A85E] ">{activeService.title.split(' ').slice(1).join(' ')}</span>
                                    </h3>
                                    <p className="paragaph font-[300] text-[rgb(68,_68,_68)] text-[18px] leading-[29px] ">
                                        {activeService.body}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 bg-[#134776]">
                                <ul className="w-full h-full">
                                    {services.map((service) => (
                                        <li
                                            key={service.id}
                                            className={`p-[12px_5px] sm:p-[12px_20px] hover:bg-white text-[16px] leading-[26px] font-[400]  
                                                               cursor-pointer hover:text-[rgb(19,_71,_118)] 
                                                               flex flex-row gap-2 justify-end items-center text-right 
                                                               ${activeService.id === service.id ? 'bg-white text-[rgb(19,_71,_118)]' : 'bg-[rgb(19,_71,_118)] text-white'}`}
                                            onClick={() => handleServiceClick(service)}
                                        >
                                            <span>{service.name}</span>
                                            <FontAwesomeIcon icon={
                                                service.id === 1 ? faBusinessTime :
                                                    service.id === 2 ? faFileContract :
                                                        service.id === 3 ? faBalanceScale :
                                                            service.id === 4 ? faGavel :
                                                                service.id === 5 ? faBuilding :
                                                                    service.id === 6 ? faMask :
                                                                        service.id === 7 ? faUserPlus :
                                                                            faUsers
                                            } />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
