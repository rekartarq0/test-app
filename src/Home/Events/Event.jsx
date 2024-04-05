import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import events from '../../assets/events/events-1.png'
import events_2 from '../../assets/events/events-2.png'
import events_3 from '../../assets/events/events-3.png'
export const Event = () => {
    return (
        <section className="container vazirmatn-uniquifier" >
            <div class=" pb-0 pb-sm-4 p-4 shadow-sm bg-white rounded">
                {/* <!-- Start Title section --> */}
                <div class="d-flex mb-4 justify-content-between align-items-center">
                    <div class="ArticleTitle w-25 border-5 border-end border-danger">
                        <h2 class="pe-2 py-3">
                            چاوپێکەوتن
                        </h2>
                    </div>
                    <a class="text-decoration-none" href="/">
                        <div class="d-flex justify-content-center align-items-center">
                            <p class="mb-0 fw-bold ms-2 text-black vazirmatn-uniquifier">
                                زیاتر ببینە
                            </p>
                            <FontAwesomeIcon icon={faArrowLeft} color='black' />
                        </div>
                    </a>
                </div>
                {/* content in here */}

                <div className="row">
                    <div className="card border-0 col-md-12 col-xl-8">
                        <div>
                            <img src={events} alt="" style={{ maxWidth: '100%', height: '100%' }} />
                        </div>
                        <h4 className="vazirmatn-uniquifier pt-3 fw-bold" style={{ fontSize: '35px' }}>گوگڵ تایبەتمەندیی ژیریی دەستکرد بۆ وێبگەڕی کرۆم زیاد دەکات</h4>
                        <p className="pt-2 vazirmatn-uniquifier lh-30 " style={{ fontSize: '25px', fontWeight: '300', lineHeight: '33px' }}>
                            جۆزێف فرانک کیتۆن، ناسراو بە بەستەر کیتۆن، یەکێک بووە لە دیارترین ئەکتەرە سینەماییەکانی قۆناغی کلاسیکی هۆڵیوود و بە ئەنجامدانی جووڵەی مەترسیدا جووڵەی مەترسیدا جووڵەی مەترسیدا جووڵەی مەترسیدا جووڵەی مەترسیدار و
                        </p>

                        <h4 className="vazirmatn-uniquifier pt-3" style={{ color: '#143D84' }}>سینەما</h4>
                    </div>
                    <div className="card border-0 col-md-12 col-xl-4">
                        <div>
                            <div>
                                <img src={events_2} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <h4 className="vazirmatn-uniquifier pt-3 fw-bold" style={{ fontSize: '25px' }}>
                                مارگۆت رۆبی بێدەنگیی خۆی بەرامبەر بە خەڵاتەکانی ئۆسکار
                            </h4>
                            <p className="pt-2 vazirmatn-uniquifier lh-30 " style={{ fontSize: '20px', color: '#143D84' }}>سینەما</p>
                        </div>
                        <div>
                            <div>
                                <img src={events_3} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <h4 className="vazirmatn-uniquifier pt-3 fw-bold" style={{ fontSize: '28px' }}>
                                بەستەر کیتۆن؛ رووخسار ساردی مەزنی سینەما
                            </h4>
                            <p className="pt-2 vazirmatn-uniquifier lh-30 " style={{ fontSize: '20px', color: '#143D84' }}>سینەما</p>
                        </div>
                    </div>

                </div>


            </div>

        </section>)
}
