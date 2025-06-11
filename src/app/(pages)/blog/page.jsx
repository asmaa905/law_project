
"use client";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
    const articles = [
        {
            id: 1, date: "٢٠٢٤-٠٧-٢٠", title: "الائحة التنفيذية لطرق الاعتراض على الأحكام", image: "assets/images/articles/عرض-تقديمي1-360x320.webp",
            body: "الباب الأول أحكام عامة المادة الأولى يقصد بالألفاظ الآتية -أينما وردت في هذه اللائحة- المعاني المبينة أمام كل منها -ما ..."
        },
        { id: 2, date: "٢٠٢٤-٠٧-٢٠", title: "العفو الملكي ١٤٤٥ هـ", image: "assets/images/aquod.webp", body: "" },
        { id: 3, name: "الاستشارات القانونية والشرعية", title: "الاستشارات  القانونية والشرعية", image: "assets/images/consult.webp", body: "تقدم شركة رواد الحكمة كافة الاستشارات القانونية والشرعية الشفوية والمكتوبة فالاستشارة القانونية هي استكشاف رأي النظام و الشرع في مسألة معينة أو موضوع بعينه قد تكون محل نزاع جدي أمام القضاء أو نزاع ممكن أن يقع مستقبلاً..." },
        { id: 4, name: "التمثيل القانوني", title: "التمثيل القانوني", image: "assets/images/some_service.webp", body: "تتولى شركة رواد الحكمة  المرافعة والمدافعة عن العملاء وتمثيلهم لدي كافة المحاكم الشرعية – ديوان المظالم – لجنة تسوية المنازعات المصرفية – لجان مكتب العمل – لجان مكتب الفصل في منازعات الأوراق التجارية – اللجان شبة القضائية والإدارية – اللجان الجمركية – المنازعات أمام هيئة التحكيم المحلية والدولية" },
        { id: 5, name: "التجارية", title: "قضايا  التجارية وتحصيل الديون", image: "assets/images/eccomerce.webp", body: "مع صدور نظام التنفيذ بالمملكة العربية السعودية خصصت شركة رواد الحكمة قسم مستقل لقضايا الأوراق التجارية ( السند لأمر – الكمبيالة – الشيك ) وتحصيل الديون يضم نخبة من أفضل المحاميين والمستشارين في قضايا الأوراق التجارية." },
        { id: 6, name: "الجنائية", title: "قضايا  الجنائية", image: "assets/images/genaay.webp", body: "- الجرائم المعلوماتية. - قضايا المخدرات ( التعاطي والاتجار- التهريب ) . - قضايا القتل العمد وشبه العمد والشروع بالقتل. - قضايا السرقات . - قضايا الخطف. - قضايا الحرابة..." },
        { id: 7, name: "العمالية والادارية", title: "قضايا  العماليةوالإدارية", image: "assets/images/workers.webp", body: "تعد شركة رواد الحكمة من أمهر وأفضل المحامين بالمملكة العربية السعودية بقضايا الشركات فقد قام بالعديد من الأبحاث المتعلقة بعمل الشركات ومنها ( حماية شركات المساهمة من الإفلاس ، وحماية الشركات العائلية من الأزمات )..." },
        { id: 8, name: "الأحوال الشخصية", title: "قضايا الأحوال الشخصية", image: "assets/images/personal_statuses.webp", body: "تعد قضايا الأحوال الشخصية والأسرية وما تتضمنه من:- - قضايا الطلاق والخلع وفسخ النكاح للضرر. - قضايا النفقة . - قضايا الحضانة والزيارة. - قضايا النشوز . - قضايا إثبات الوقف والوصية والنسب والغيبة والوفاة وحصر الورثة وقسمة التركة..." },
    ];

    // State to track the active service
    const [activeArticle, setActiveArticle] = useState(articles[0]);

    // Function to handle menu item click
    const handleArticleClick = (article) => {
        setActiveArticle(article);
    };
    return (
        <>
            <div className="blog my-44">
                <div className="container w-[95%] mx-auto flex flex-col md:flex-row-reverse flex-wrap justify-center items-center">
                    <div className="articles    w-full md:w-2/3">
                        <div className="articles-cont  flex flex-col justify-center items-start gap-9 w-full">
                            {articles.map((article) => (
                                <div key={article.id}
                                    className="article w-full flex flex-col md:flex-row justify-center items-center flex-wrap ">

                                    <div className=" w-full md:w-2/3">
                                        <div className="px-5  w-full flex flex-col  justify-end items-end">

                                            <h5 className="title text-right 
                                        text-[rgb(201,_168,_94)] text-[28px] leading-[39px] font-[400]" onClick={() => handleArticleClick(article)} >
                                                {article.title}
                                            </h5>
                                            <p className="date text-right
                                        text-[rgb(68,_68,_68)] text-[12px] leading-[19px] font-[300]">{article.date}</p>
                                            <p className="text text-right 
                                        text-[rgba(19,_71,_118,_0.7)] text-[18px] leading-[29px] font-[300]">{article.body}</p>
                                            <div className="flex flex-col justify-end items-end">
                                                <button onClick={() => handleArticleClick(article)} className="
                                                px-3 py-3 mt-5 bg-transparent
                                                bg-[linear-gradient(135deg,_#C9A85E,_#134776)] 
                                                hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]
                                                group text-[white] text-[13px] leading-[21px] font-[300]
                                            ">
                                                    <FontAwesomeIcon icon={faAngleLeft} className="
                                                  text-white font-[900] pr-3" />
                                                    <span>اعرف اكثر</span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="image w-full md:w-1/3 h-[250px]">
                                        <img src={article.image} alt={article.title} className="w-full h-full" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-end mt-5  bg-white py-3 sm:px-6">
                            <div className="flex flex-1 justify-between sm:hidden">
                                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                            </div>
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
                                        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Previous</span>
                                            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>
                                        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Next</span>
                                            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="filter bg-green-400 w-full md:w-1/3 ">sd</div>
                </div>
            </div>
        </>
    );
}
