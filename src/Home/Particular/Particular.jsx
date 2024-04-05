import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import taibat_1 from '../../assets/taibat/taibat-1.png';
import taibat_2 from '../../assets/taibat/taibat-2.png';
import taibat_3 from '../../assets/taibat/taibat-3.png';

export const Particular = () => {
    const data = [
        { img: taibat_1, heading: 'راگەیێنراوی فەرمی یەکێتیی تۆپی پێی ئاسیا لەسەر کارتە سوورەکەی ئەیمەن حوسێن', title: 'سەرۆکی لیژنە هاوبەشەکانی قایمقامیەتی سلێمانی رایگەیاند، لەماوەی مانگی رابردوودا زیاتر لە شەش هەزار سەردانیان بۆ بازاڕ و فرۆشگەکان هەبووە و 614 شوێن بە بڕی نزیکەی 40 ملیۆن دینار سزا دراون، دەشڵێت، ', time: '١ کاتژمێر له‌مه‌وپێش' },
        { img: taibat_2, heading: 'یەکێتیی ئەوروپا بۆ وەرگرتنی هەڵوێست لەبارەی رۆژهەڵاتی نێوەڕاست چاوەڕێی ئەمریکا دەکات', title: 'سەرۆکی لیژنە هاوبەشەکانی قایمقامیەتی سلێمانی رایگەیاند، لەماوەی مانگی رابردوودا زیاتر لە شەش هەزار سەردانیان بۆ بازاڕ و فرۆشگەکان هەبووە و 614 شوێن بە بڕی نزیکەی 40 ملیۆن دینار سزا دراون، دەشڵێت، ', time: '١ کاتژمێر له‌مه‌وپێش' },
        { img: taibat_3, heading: 'ساڵی رابردوو خواست لەسەر زێڕ ئاستێکی پێوانەیی تۆمارکردووە', title: 'سەرۆکی لیژنە هاوبەشەکانی قایمقامیەتی سلێمانی رایگەیاند، لەماوەی مانگی رابردوودا زیاتر لە شەش هەزار سەردانیان بۆ بازاڕ و فرۆشگەکان هەبووە و 614 شوێن بە بڕی نزیکەی 40 ملیۆن دینار سزا دراون، دەشڵێت، ', time: '١ کاتژمێر له‌مه‌وپێش' },
    ];

    return (
        <section className="container my-lg-4">
            <div className="pb-0 pb-sm-4 p-4 shadow-sm bg-white rounded">

                <div className="d-flex mb-4 justify-content-between align-items-center">
                    <div className="ArticleTitle w-25 border-5 border-end border-danger">
                        <h2 className="pe-2 py-2 vazirmatn-uniquifier">
                            تایبەت
                        </h2>
                    </div>
                    <a className="text-decoration-none" href="/">
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="mb-0 fw-bold ms-2 text-black vazirmatn-uniquifier">
                                زیاتر ببینە
                            </p>
                            <FontAwesomeIcon icon={faArrowLeft} color='black' />
                        </div>
                    </a>

                </div>

                {data.map((item, i) => (
                    <div className={`row particular align-items-center my-lg-2 ${i === data.length - 1 ? '' : 'py-lg-2 border-bottom'}`} key={i}>
                        <div className="col-lg-6 col-xl-7 mb-4 mb-lg-0">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h4 className="fw-bold vazirmatn-uniquifier" style={{ color: '#DA291C', fontSize: '18px' }}>
                                        {item.time}
                                    </h4>
                                    <h4 className="fw-bold pt-2 text-black vazirmatn-uniquifier" style={{ fontSize: '25px', maxWidth: '552px', fontWeight: 700 }}>
                                        {item.heading}
                                    </h4>
                                    <h5 className="card-text mt-4" style={{ cursor: 'pointer', fontWeight: '300', lineHeight: '32px', height: '100px', maxWidth: '522px' }}>
                                        {item.title}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5 hover-fade d-flex align-items-center justify-content-center">
                            <div style={{ maxHeight: '300px', overflow: 'hidden', borderRadius: '15px' }}>
                                <img src={item.img} alt={item.title} style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
