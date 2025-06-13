
"use client";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faClock, faEnvelope, faFolder, faPerson } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from "react";
import { faFacebookF, faGooglePlus, faGooglePlusG, faPinterest, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Article() {
    const articles = [
        {
            id: 1, date: "٢٠٢٤-٠٧-٢٠", title: "الائحة التنفيذية لطرق الاعتراض على الأحكام", image: "/assets/images/articles/عرض-تقديمي1-360x320.webp", tag: "القانون", author: "المستشار احمد الشهارى",
            body: "الباب الأول أحكام عامة المادة الأولى يقصد بالألفاظ الآتية -أينما وردت في هذه اللائحة- المعاني المبينة أمام كل منها -ما ...",
            fullContent:
            {
                chapters: [

                    {
                        id: 1,

                        number: "الباب الاولى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                    {
                        id: 2,

                        number: "الباب الثانى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                    {
                        id: 3,

                        number: "الباب الثالث",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
        {
            id: 2, date: "٢٠٢٤-٠٧-٢٠", title: "العفو الملكي ١٤٤٥ هـ", image: "/assets/images/aquod.webp", tag: "القانون", author: "المستشار احمد الشهارى", body: "",
            fullContent:
            {
                chapters: [

                    {
                        id: 1,

                        number: "الباب الاولى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
        {
            id: 3, name: "الاستشارات القانونية والشرعية", title: "الاستشارات  القانونية والشرعية", image: "/assets/images/consult.webp", tag: "القانون", author: "المستشار احمد الشهارى", body: "تقدم شركة رواد الحكمة كافة الاستشارات القانونية والشرعية الشفوية والمكتوبة فالاستشارة القانونية هي استكشاف رأي النظام و الشرع في مسألة معينة أو موضوع بعينه قد تكون محل نزاع جدي أمام القضاء أو نزاع ممكن أن يقع مستقبلاً...",
            fullContent:
            {
                chapters: [

                    {
                        id: 1,

                        number: "الباب الاولى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
        {
            id: 4, name: "التمثيل القانوني", title: "التمثيل القانوني", image: "/assets/images/some_service.webp", tag: "القانون", author: "المستشار احمد الشهارى", body: "تتولى شركة رواد الحكمة  المرافعة والمدافعة عن العملاء وتمثيلهم لدي كافة المحاكم الشرعية – ديوان المظالم – لجنة تسوية المنازعات المصرفية – لجان مكتب العمل – لجان مكتب الفصل في منازعات الأوراق التجارية – اللجان شبة القضائية والإدارية – اللجان الجمركية – المنازعات أمام هيئة التحكيم المحلية والدولية",
            fullContent:
            {
                chapters: [

                    {
                        id: 1,

                        number: "الباب الاولى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
        {
            id: 5, name: "التجارية", title: "قضايا  التجارية وتحصيل الديون", image: "/assets/images/eccomerce.webp", tag: "القانون", author: "المستشار احمد الشهارى", body: "مع صدور نظام التنفيذ بالمملكة العربية السعودية خصصت شركة رواد الحكمة قسم مستقل لقضايا الأوراق التجارية ( السند لأمر – الكمبيالة – الشيك ) وتحصيل الديون يضم نخبة من أفضل المحاميين والمستشارين في قضايا الأوراق التجارية.",
            fullContent:
            {
                chapters: [

                    {
                        id: 1,

                        number: "الباب الاولى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
        {
            id: 6, name: "الجنائية", title: "قضايا  الجنائية", image: "/assets/images/genaay.webp", tag: "القانون", author: "المستشار احمد الشهارى", body: "- الجرائم المعلوماتية. - قضايا المخدرات ( التعاطي والاتجار- التهريب ) . - قضايا القتل العمد وشبه العمد والشروع بالقتل. - قضايا السرقات . - قضايا الخطف. - قضايا الحرابة...",
            fullContent:
            {
                chapters: [

                    {
                        id: 1,

                        number: "الباب الاولى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
        {
            id: 7, name: "العمالية والادارية", title: "قضايا  العماليةوالإدارية", image: "/assets/images/workers.webp", tag: "القانون", author: "المستشار احمد الشهارى", body: "تعد شركة رواد الحكمة من أمهر وأفضل المحامين بالمملكة العربية السعودية بقضايا الشركات فقد قام بالعديد من الأبحاث المتعلقة بعمل الشركات ومنها ( حماية شركات المساهمة من الإفلاس ، وحماية الشركات العائلية من الأزمات )...",
            fullContent:
            {
                chapters: [

                    {
                        number: "الباب الاولى",
                        id: 1,
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
        {
            id: 8, name: "الأحوال الشخصية", title: "قضايا الأحوال الشخصية", image: "/assets/images/personal_statuses.webp", tag: "القانون", author: "المستشار احمد الشهارى", body: "تعد قضايا الأحوال الشخصية والأسرية وما تتضمنه من:- - قضايا الطلاق والخلع وفسخ النكاح للضرر. - قضايا النفقة . - قضايا الحضانة والزيارة. - قضايا النشوز . - قضايا إثبات الوقف والوصية والنسب والغيبة والوفاة وحصر الورثة وقسمة التركة...",
            fullContent:
            {
                chapters: [
                    {
                        id: 1,

                        number: "الباب الاولى",
                        title: 'احكام عامة',
                        subjects: [
                            { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                            { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                        ]
                    },
                ]
            }, category: "الاخبار"

        },
    ];
    const tags = [{ id: 1, name: "القضاء السعودى" },
    { id: 2, name: "ثقافة قانونية" },
    { id: 3, name: "ديوان المظالم" },
    { id: 4, name: "نظام" },
    { id: 5, name: "نظام التنفيذ" },
    { id: 6, name: "نظام التنفيذ امام ديوان المظالم" },

    ]
    // State to track the active service
    const [activeArticle, setActiveArticle] = useState(articles[0]);

    // Function to handle menu item click
    const handleArticleClick = (article) => {
        setActiveArticle(article);
    };

    const [currentArticle, setCurrentArticle] = useState({
        id: 1, date: "٢٠٢٤-٠٧-٢٠", title: "الائحة التنفيذية لطرق الاعتراض على الأحكام", image: "/assets/images/articles/عرض-تقديمي1-360x320.webp", tag: "القانون", author: "المستشار احمد الشهارى"
        , body: "الباب الأول أحكام عامة المادة الأولى يقصد بالألفاظ الآتية -أينما وردت في هذه اللائحة- المعاني المبينة أمام كل منها -ما ...",
        fullContent:
        {
            chapters: [
                {
                    id: 1,
                    number: "الباب الاول",
                    title: 'احكام عامة',
                    subjects: [
                        { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                    ]
                },
                {
                    number: "الباب الثانى",
                    title: 'احكام عامة',
                    subjects: [
                        { id: 1, number: "المادة الاولي", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                    ]
                },
                {
                    number: "الباب الثالث",
                    title: 'احكام عامة',
                    subjects: [
                        { id: 1, number: "المادة الاولى", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 2, number: "المادة الثانية", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 3, number: "المادة الثالثة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 4, number: "المادة الرابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 5, number: "المادة الخامسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 6, number: "المادة السادسة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 7, number: "المادة السابعة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },
                        { id: 8, number: "المادة الثامنة", content: "يقصد بالالفاظ الاتية اينما وردت فى هذه اللائحة المعانى المبينة امام كل منها -  ما لم يقتض السياق غير ذلك:- " },

                    ]
                },
            ]
        }, category: "الاخبار"

    });
    console.log("currentArticle", currentArticle.fullContent)
    return (
        <>
            <div className="article my-44">
                <div className="container w-[95%] mx-auto flex flex-col-reverse md:flex-row-reverse flex-wrap justify-center items-start">
                    <div className="article  w-full md:w-2/3">
                        <div className="article-cont  flex flex-col justify-center items-start gap-9 w-full">
                            <div className="image w-full  h-[250px]"  >
                                <img src={currentArticle.image} alt={currentArticle.title} className="w-full h-full" />
                            </div>
                            {currentArticle.fullContent?.chapters.map((chapter) => (
                                <div key={chapter.id} className="w-full">
                                    <div className="title text-right font-[700] text-[30px] text-[rgb(68,_68,_68)]">
                                        <span className="pl-4 text-right">{chapter.number}</span>
                                        <span className="text-right">{chapter.title}</span>
                                    </div>
                                    {chapter?.subjects?.map((subject) => (
                                        <div key={subject.id} className="text-right ">
                                            <h4 className="text-right py-5 font-[700] text-[30px] text-[rgb(68,_68,_68)]">{subject.number}</h4>
                                            <p className="content text-[rgb(68,_68,_68)]">
                                                {subject.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className="pdf-preview w-full justify-start items-end flex flex-col h-[500px]">
                                <div className="pdf-preview-section  bg-[#ccc]  ">
                                    <img src="/assets/images/laeha.png" className="h-Full w-full" alt="اللائحة التنفيذية" />
                                </div>
                                <div className="text mt-3">
                                    <span className="bg-blue-600 rounded-full text-white mr-3">تنزيل</span>
                                    <h5 className="pdf-title inline">
                                        {currentArticle.title}

                                    </h5>
                                </div>

                            </div>
                            <div className="article-data flex flex-col sm:flex-row gap-6 justify-end items-center w-full">

                                <div className="tag flex flex-col sm:flex-row justify-start items-center gap-2 flex-wrap">

                                    <p className="article-title">{currentArticle.tag}</p>
                                    <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]  cursor-pointer
                                          hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]   px-4 py-3 rounded-sm text-center flex flex-col justify-center
                                    ">
                                        <FontAwesomeIcon icon={faFolder} className="text-white text-[30px] leading-[60px] font-[900]" />
                                    </div>
                                </div>

                                <div className="date flex flex-col sm:flex-row justify-start items-center gap-2 flex-wrap">

                                    <p className="article-title">{currentArticle.date}</p>
                                    <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]  cursor-pointer
                                          hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]   px-4 py-3 rounded-sm text-center flex flex-col justify-center
                                    ">
                                        <FontAwesomeIcon icon={faClock} className="text-white text-[30px] leading-[60px] font-[900]" />
                                    </div>
                                </div>
                                <div className="author flex flex-col sm:flex-row justify-start items-center gap-2 flex-wrap">

                                    <p className="article-title">{currentArticle.author}</p>
                                    <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]  cursor-pointer
                                          hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]   px-4 py-3 rounded-sm text-center flex flex-col justify-center
                                    ">
                                        <FontAwesomeIcon icon={faPerson} className="text-white text-[30px] leading-[60px] font-[900]" />
                                    </div>
                                </div>
                            </div>
                            <div className="share-socail px-16 py-4 border border-[rgb(19,_71,_118)] w-full flex flex-col-reverse  sm:flex-row-reverse gap-6 justify-center items-center ">
                                <p className="text"> : انشرها</p>
                                <p className="icon">
                                    <FontAwesomeIcon icon={faFacebookF} className="text-[#c9a85e]  text-[24px] leading-[24px] font-[400px] " />
                                </p>
                                <p className="icon">
                                    <FontAwesomeIcon icon={faXTwitter} className="text-[#c9a85e]  text-[24px] leading-[24px] font-[400px] " />
                                </p>
                                <p className="icon">
                                    <FontAwesomeIcon icon={faPinterest} className="text-[#c9a85e]  text-[24px] leading-[24px] font-[400px] " />
                                </p>

                                <p className="icon">
                                    <FontAwesomeIcon icon={faGooglePlus} className="text-[#c9a85e]  text-[24px] leading-[24px] font-[400px] " />
                                </p>
                                <p className="icon">
                                    <FontAwesomeIcon icon={faTelegram} className="text-[#c9a85e]  text-[24px] leading-[24px] font-[400px] " />
                                </p>
                                <p className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-[#c9a85e]  text-[24px] leading-[24px] font-[400px] " />
                                </p>


                            </div>
                            <div className="arrows  flex flex-col sm:flex-row-reverse justify-between w-full items-center gap-5">


                                {currentArticle.id !== 1 ?

                                    <div className="previous-article flex flex-row justify-center items-center gap-5" >

                                        <div className="text">
                                            {articles[currentArticle.id - 2].title}
                                        </div>
                                        <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]  cursor-pointer
                                          hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]   px-4 py-3 rounded-sm text-center flex flex-col justify-center
                                    ">
                                            <FontAwesomeIcon icon={faAngleRight}
                                                className="text-white text-[30px] leading-[60px] font-[900]" />
                                        </div>
                                    </div>

                                    : <div className="previous-article " >

                                    </div>
                                }

                                {currentArticle.id !== articles.length ?

                                    < div className="next-article flex flex-col sm:flex-row justify-center items-center gap-5" >

                                        <div className="icon bg-transparent bg-[linear-gradient(135deg,_#C9A85E,_#134776)]  cursor-pointer
                                          hover:bg-[linear-gradient(135deg,_#134776,_#C9A85E)]   px-4 py-3 rounded-sm text-center flex flex-col justify-center
                                    ">
                                            <FontAwesomeIcon icon={faAngleLeft}
                                                className="text-white text-[30px] leading-[60px] font-[900]" />
                                        </div>
                                        <div className="text">
                                            {articles[currentArticle.id].title}
                                        </div>
                                    </div>
                                    : <div className="next-article " >

                                    </div>}
                            </div>
                            <div className="similar-articles border border-[rgb(19,_71,_118)] h-[500px] w-full ">
                                <h2 className="simialr-head">المنشورات ذات صلة ...</h2>
                                {/* take first 3 articles */}
                                <div className="articles">
                                    {articles.filter((article) => article.tag == currentArticle.tag
                                        && article.category == currentArticle.category)}
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="filter w-full md:w-1/3 flex flex-col flex-wrap justify-end items-start px-10 sm:px-0 xl:px-20">

                        <div className="search-sec mb-28 w-full">
                            <form action="" className="flex justify-center items-center gap-3">
                                <button type="submit" className="bg-[rgb(19,_71,_118)] hover:bg-[rgba(19,_71,_118,_0.7)] cursor-pointer text-white p-3">بحث</button>
                                <div className="relative z-0 w-full mb-2 group">
                                    <input name="search" type="text" id="search" placeholder="بحث"
                                        className="text-[rgba(0,_0,_0,_0.5)]   text-right
                                 dark:text-white focus:outline-none focus:ring-0 focus:border-gray-600 peer
                                text-[16px] leading-[normal] font-[400] block py-3 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#134776] 
                                 appearance-none "  />
                                </div>
                            </form>
                        </div>
                        <div className="section cats  mb-20 w-full">
                            <h3 className=" pl-16 pr-3 py-4  bg-transparent text-right mb-5
                                                bg-[linear-gradient(135deg,_#134776,_#C9A85E)] 
                                                text-[white] text-[18px] leading-[18px] font-[400]">التصنيفات</h3>
                            <ul className="flex flex-col justify-start items-end ">
                                <div className="w-full border-b-[0.5px] border-b-[#ccc] py-2 mb-2 flex flex-row jusitify-start items-center gap-5">
                                    <li className="text-right w-full text-[black] text-[18px] leading-[21px] font-[300]" style={{ direction: "rtl" }}>اخبار</li>
                                    <span className="disc rounded-full w-[7px] h-[7px] bg-[rgb(68,_68,_68)] block"></span>

                                </div>
                                <div className="w-full border-b-[0.5px] border-b-[#ccc] py-2 mb-2 flex flex-row jusitify-start items-center gap-5">
                                    <li className="text-right w-full text-[black] text-[18px] leading-[21px] font-[300]" style={{ direction: "rtl" }}>التحديثات</li>
                                    <span className="disc rounded-full w-[7px] h-[7px] bg-[rgb(68,_68,_68)] block"></span>

                                </div>
                                <div className="w-full border-b-[0.5px] border-b-[#ccc] py-2 mb-2 flex flex-row jusitify-start items-center gap-5">
                                    <li className="text-right w-full text-[black] text-[18px] leading-[21px] font-[300]" style={{ direction: "rtl" }}>بحث قانونى</li>
                                    <span className="disc rounded-full w-[7px] h-[7px] bg-[rgb(68,_68,_68)] block"></span>

                                </div>
                                <div className="w-full border-b-[0.5px] border-b-[#ccc] py-2 mb-2 flex flex-row jusitify-start items-center gap-5">
                                    <li className="text-right w-full text-[black] text-[18px] leading-[21px] font-[300]" style={{ direction: "rtl" }}>قانون</li>
                                    <span className="disc rounded-full w-[7px] h-[7px] bg-[rgb(68,_68,_68)] block"></span>

                                </div>

                            </ul>
                        </div>
                        <div className="section cats  mb-20 w-full">
                            <h3 className="pl-16 pr-3 py-4  bg-transparent text-right mb-5 bg-[linear-gradient(135deg,_#134776,_#C9A85E)]  text-[white] text-[18px] leading-[18px] font-[400]">وسوم</h3>
                            <div className="flex flex-col sm:flex-row-reverse justify-start items-end flex-wrap">
                                {tags.map((tag) => (
                                    <div key={tag.id} className="text-right  px-2 py-1" style={{ direction: "rtl" }}>
                                        <div className="tag w-full pl-3 pr-2 py-1 text-[black] text-[12px] leading-[21px] font-[400] border border-[#ccc] text-right">
                                            {tag.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="section cats  mb-20 w-full">
                            <h3 className=" pl-16 pr-3 py-4  bg-transparent text-right mb-5
                                                bg-[linear-gradient(135deg,_#134776,_#C9A85E)] 
                                                text-[white] text-[18px] leading-[18px] font-[400]">أحدث المقالات</h3>
                            <ul className="flex flex-col justify-start items-end ">
                                {articles.map((article) => (
                                    <div key={article.id} className="w-full border-b-[0.5px] border-b-[#ccc] py-2 mb-2 flex flex-row jusitify-start items-center gap-5">
                                        <li className="text-right w-full text-[black] text-[18px] leading-[21px] font-[300]" style={{ direction: "rtl" }}>{article.title}</li>
                                        <span className="disc rounded-full w-[7px] h-[7px] bg-[rgb(68,_68,_68)] block"></span>

                                    </div>
                                ))}


                            </ul>
                        </div>
                        <div className="section cats  mb-20 w-full">
                            <h3 className=" pl-16 pr-3 py-4  bg-transparent text-right mb-5
                                                bg-[linear-gradient(135deg,_#134776,_#C9A85E)] 
                                                text-[white] text-[18px] leading-[18px] font-[400]">اعلانات</h3>
                            <div className="image w-full h-full p-[5px_5px_10px_20px]">
                                <img src="/assets/images/adversts.png" alt="" className="image w-full h-full" />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}
