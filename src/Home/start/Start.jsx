import React from 'react';
import news from "../../assets/news.png";

export const Start = () => {
    return (
        <section className='container' style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="card shadow-sm border-0 p-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-body tit">
                            <h1 className="fw-bold card-title" style={{ cursor: 'pointer', fontSize: '40px', lineHeight: '60px', height: '175px' }}>
                                بەڕێوەبەری نەخۆشخانەی گشتیی کەلار: تەندروستیی گەرمیان وەڵامی داواکارییەکانمان ناداتەوە
                            </h1>
                            <h5 className="card-text mt-4" style={{ cursor: 'pointer', fontWeight: '300', lineHeight: '35px', height: '170px' }}>
                                ئەمڕۆ سێشەممە 30ـی کانوونی دووەمی 2024 د. حارس محەممەد، بەڕێوەبەری نەخۆشخانەی گشتیی کەلار تایبەت بە رووداو گوتی، بەهۆی ناکۆکیی نێوان ئیدارەی نەخۆشخانەکە و بەڕێوەبەرایەتیی تەندروستیی گەرمیان، دەسەڵاتەکانیان کەمبووەتەوە و بەڕێوەبەری گشتیی
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <a href="/">
                            <img src={news} alt="نرخی نەوت لە بەرزترین ئاستی سێ هەفتەی رابردوو مامەڵەی پێوەدەکرێت" style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px', objectFit: 'cover' }} className="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
