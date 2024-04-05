import React from 'react'
import report_1 from '../../assets/report/report-1.png'
import report_2 from '../../assets/report/report-2.png'
import report_3 from '../../assets/report/report-3.png'
import report_4 from '../../assets/report/report-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export const Report = () => {
    return (
        <section class="container my-lg-4 vazirmatn-uniquifier">
            <div class="pb-0 pb-sm-4 p-4 shadow-sm bg-white rounded">
                {/* <!-- Start Title section --> */}
                <div class="d-flex mb-4 justify-content-between align-items-center">
                    <div class="ArticleTitle w-25 border-5 border-end border-danger">
                        <h2 class="pe-2 py-3">
                            ڕاپۆرت
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
                {/* <!-- End Title section --> */}
                <div class="row">
                    <div class="card border-0 col-md-6 col-xl-4">
                        <div class="">
                            <a href="/">
                                <div class="imageReport1">
                                    <img src={report_1} alt="report" style={{ width: '100%', height: 'auto', }}
                                    />

                                </div>
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="d-flex">
                                <p class="card-title">پێش ٥ دەقیقە
                                </p>
                                <p className='mx-2' style={{ color: '#E0E0E0' }}>|</p>
                                <p className='mx-2 text-danger'>زیاتر ببینە</p>
                            </div>
                            <a class="text-decoration-none text-black" style={{ maxWidth: '100px' }} href="/">
                                <h5 class="card-text fw-bold">
                                    ئۆپراسیۆنی هاوبەشی هێزەکانی هەسەدە – یەپەژە- ئاسایش و هاوپەیمانیی نێودەوڵەتی لە کامپی
                                </h5>
                                <p class="card-text " style={{ color: '#565D68' }}>
                                    یەکێک لە دەگمەنترین پیشانگە مێژووییەکانی جیهان، لە مۆزەخانەیەکی چین دەکرێتەوە، کە نمایشی 400 پەیکەری جیاوازی بودا دەکات و بۆ ماوەی زیاتر لە                                </p>
                            </a>


                        </div>
                    </div>


                    <div className="card cardReport2 border-0 mb-3 col-md-6 col-xl-4">
                        <div>
                            <a className="position-relative" href="/">

                                <div className="imageReport2">
                                    <img
                                        src={report_2}
                                        alt="report"
                                        style={{
                                            width: '100%',
                                            height: '130%'
                                        }}
                                    />
                                </div>
                            </a>
                            <div className="card-img-overlay card-body">
                                <div className="d-flex">
                                    <p className="card-title text-white px-1">پێش ٥ دەقیقە</p>
                                </div>
                                <a className="text-decoration-none text-white px-2" href="/">
                                    <h5 className="card-text fw-bold px-4" style={{ fontSize: '22px', marginTop: '-15px' }}>
                                        دادگە دۆسیەی تاوانی ئالێک باڵدوینی یەکلاکردەوە
                                    </h5>
                                </a>
                                <p className="px-4 card-text" style={{ color: '#BBC7DB', paddingBottom: '70px', fontSize: '14px', marginTop: '-10px' }}>
                                    یەکێک لە دەگمەنترین پیشانگە مێژووییەکانی جیهان، لە مۆزەخانەیەکی چین دەکرێتەوە، کە نمایشی 400 پەیکەری جیاوازی بودا دەکات و بۆ ماوەی زیاتر لە
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="card cardReport border-0 col-xl-4">
                        <div class="row">

                            <div class="col-md-6 col-xl-10">
                                <div>
                                    <a href="/">
                                        <div class="imageReport">
                                            <img src={report_3} alt="" style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                    </a>
                                </div>

                                <div class="card-body">
                                    <div class="d-flex">
                                        <p className="card-title">پێش ٥ دەقیقە
                                        </p>
                                        <p className='mx-2'>|</p>
                                        <p className='mx-2 text-danger'>رەنگدان</p>


                                    </div>
                                    <a class="text-decoration-none text-black" href="/">
                                        <h5 class="card-text fw-bold mb-2">
                                            ئەشقی دێرینی ئێرانییەکان بۆ بەردی پیرۆز
                                        </h5>
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-10">
                                <div class="hover-fade">
                                    <a href="/">
                                        <div class="imageReport">
                                            <img src={report_4} alt="" style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                    </a>
                                </div>

                                <div class="card-body">
                                    <div class="d-flex">
                                        <p className="card-title">پێش ٥ دەقیقە
                                        </p>
                                        <p className='mx-2'>|</p>
                                        <p className='mx-2 text-danger'>رەنگدان</p>


                                    </div>
                                    <a class="text-decoration-none text-black" href="/">
                                        <h5 class="card-text fw-bold">
                                            دادگە دۆسیەی تاوانی ئالێک باڵدوینی یەکلاکردەوە
                                        </h5>
                                    </a>
                                </div>
                            </div>



                        </div>
                    </div>



                </div>
            </div>
        </section>)
}
