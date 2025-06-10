"use client";
import * as React from "react";
import "./SomeServices.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBuilding, faBusinessTime, faFileContract, faGavel, faMask, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function SomeServices() {
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
            <div className="bg-white py-[100px]">
                <div className="container">
                    <div className="head flex gap-6 justify-between items-center flex-col-reverse md:flex-row">
                        <button className="serve-btn gap-2 flex flex-row hover:bg-[#134776] bg-[#C9A85E] p-[20px_40px] justify-between items-center">
                            <span className="block font-[300] text-white text-[18px] leading-[29px]" > عرض جميع خدماتنا</span>
                            <FontAwesomeIcon icon={faBalanceScale} className=" font-[900] text-white text-[24px] leading-[24px]" />
                        </button>
                        <h2 className=" font-[700] text-[#134776] text-[38px] leading-539px] text-center sm:text-right " >بعض خدماتنا </h2>
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
        </>
    );
}