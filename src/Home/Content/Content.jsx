import React from 'react';
import content_1 from "../../assets/content/content-1.png";
import content_2 from "../../assets/content/content-2.png";
import content_3 from "../../assets/content/content-3.png";
import content_4 from "../../assets/content/content-4.png";
import bzharda_1 from "../../assets/content/bzharda-1.png";

export const Content = () => {
    const data = [
        { img: content_1, time: 'پێش ١ دەقیقە', title: 'داوا لە حکومەتى عێراق دەکرێت نەوت بە دراوێکی دیکە جگە لە دۆلار بفرۆشێتعێراق دەکرێت' },
        { img: content_2, time: 'پێش ١ دەقیقە', title: 'ئیسرائیل هێرشەکانى بۆ سەر پارێزگای خان یونس لە کەرتی غەززە چڕکردووەتەوە' },
        { img: content_3, time: 'پێش ١ دەقیقە', title: 'ئاژانسی نێودەوڵەتی وزەی ئەتۆم: ئێران بەرهەمهێنانی یۆرانیۆمی پیتێندراوی کەمکردووەتەوە' },
        { img: content_4, time: 'پێش ١ دەقیقە', title: 'شاندێکی حەماس سەردانی ميسر دەکات و لەبارەی بارمتەکانەوە گفتوگۆ دەکەن' },
        { img: content_3, time: 'پێش ١ دەقیقە', title: 'ئەنجوومەنی نوێنەرانی عێراق بڕی یەک ملیۆن دینار لە مووچەی ئەندامە نەهاتووەکانی دەبڕێت' },
        { img: content_4, time: 'پێش ١ دەقیقە', title: 'لەبەشێک لە ویلایەتەکانی ئەمریکا ئەنفلۆنزای باڵندە کێڵگەکانی بەرهەمهێنانی هێلکەی وێرانکردووە' },
    ];

    const bzharda = [
        { img: bzharda_1, time: 'پێش ١ دەقیقە', title: 'لە ئەڵمانیا جوتیاران رێگەی گەیشتنیان بە چەند بەندەرێک داخست' },
        { img: bzharda_1, time: 'پێش ١ دەقیقە', title: 'لە ئەڵمانیا جوتیاران رێگەی گەیشتنیان بە چەند بەندەرێک داخست' },
        { img: bzharda_1, time: 'پێش ١ دەقیقە', title: 'لە ئەڵمانیا جوتیاران رێگەی گەیشتنیان بە چەند بەندەرێک داخست' },
        { img: bzharda_1, time: 'پێش ١ دەقیقە', title: 'لە ئەڵمانیا جوتیاران رێگەی گەیشتنیان بە چەند بەندەرێک داخست' },
    ]

    return (
        <section >
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {data.map((item, index) => (
                                <div key={index} className="col">
                                    <div className="card border-0 shadow-sm rounded-sm h-100">
                                        <a href="/" className="text-decoration-none px-3 pt-3">
                                            <img src={item.img} className="card-img-top" alt={item.time} style={{ height: '100%', width: '100%', borderRadius: '15px', objectFit: 'cover' }} />
                                        </a>
                                        <div className="card-body">
                                            <p className="card-title vazirmatn-uniquifier text-secondary fw-bold" style={{ fontSize: '20px', lineHeight: '28px' }}>{item.time}</p>
                                            <a href="/" className="text-decoration-none card-title">
                                                <h5 className="card-text vazirmatn-uniquifier lh-30" style={{ cursor: 'pointer', fontSize: '23px' }}>
                                                    {item.title}
                                                </h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="bg-white shadow-sm rounded ">
                            <div className="ArticleTitle mb-0 border-5 border-end border-danger">
                                <h2 className="pe-2 py-3 vazirmatn-uniquifier">
                                    بژاردەی گەرمیان ناو
                                </h2>
                            </div>

                            {bzharda && bzharda.map((item, i) => <>

                                <div key={i} class="card border-0 p-2 px-3 ">
                                    <div className="border-bottom">
                                        <h5 class="vazirmatn-uniquifier pt-3" style={{ fontSize: '16px' }}>
                                            {item.time}
                                        </h5>
                                        <a href="/" className="text-decoration-none d-flex justify-content-center align-items-center">
                                            <div class=" col-3">
                                                <img src={item.img} alt='' srcset={item.img} style={{ width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }} />
                                            </div>
                                            <div class="card-body text-black col-9 mx-2">
                                                <h5 class="card-text fw-bold vazirmatn-uniquifier" style={{ fontSize: '23px' }}>
                                                    {item.title}
                                                </h5>
                                                
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </>)}


                        </div>
                        <div className="mt-4 py-1">
                            <div className="col">
                                <div className="card border-0 shadow rounded-sm h-100 " style={{ backgroundColor: '#143D84' }}>
                                    <div className="card-body d-flex flex-column ">
                                        {/* Content aligned to the top */}
                                        <p className='vazirmatn-uniquifier text-white'>X</p>
                                        <div className="card-body d-flex flex-column justify-content-center align-items-center " style={{ padding: '105px' }}>
                                            <p className="vazirmatn-uniquifier whitespace-nowrap text-white font-bold h5" style={{ fontSize: '30px', lineHeight: '28px' }}>
                                                إعلانات جوجل
                                            </p>

                                            <p className="card- vazirmatn-uniquifier justify-content-center align-items-center lh-20 " style={{ cursor: 'pointer', color: '#ABC1E5' }}>
                                                الصحفيون الرياضيون يقطعون الطريق أيها الاسكتلندي
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};
