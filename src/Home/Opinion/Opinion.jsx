import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import opinion_1 from '../../assets/photo/photo-test.png';
import opinion_2 from '../../assets/photo/opinion-1.png';
import opinion_3 from '../../assets/photo/opinion-2.png';
import opinion_4 from '../../assets/photo/opinion-3.png';

export const Opinion = () => {
    const data = [
        { img: opinion_1, title: 'توێژینەوەیەک: جگەرەکێشان گرفتە دەروونییەکانی تازەپێگەیشتووان زیاددەکات', author: 'ناوی نوسەر' },
        { img: opinion_2, title: 'توێژینەوەیەک: جگەرەکێشان گرفتە دەروونییەکانی تازەپێگەیشتووان زیاددەکات', author: 'ناوی نوسەر' },
        { img: opinion_3, title: 'کارمەندانی تەندروستی لە سلێمانی هەڕەشەی مانگرتن دەکەن', author: 'ناوی نوسەر' },
        { img: opinion_4, title: 'هەرێمی کەتەلۆنیا بەهۆى وشکەساڵییەوە باری نائاسایی رادەگەیەنێت', author: 'ناوی نوسەر' },
    ]
    return (
        <section className="container my-lg-4 vazirmatn-uniquifier" >
            <div class=" pb-0 pb-sm-4 p-4 shadow-sm bg-white rounded">
                <div class="d-flex mb-4 justify-content-between align-items-center">
                    <div class="ArticleTitle w-25 border-5 border-end border-danger">
                        <h2 class="pe-2 py-3">
                            بیرو ڕا
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
                <div className='row '>

                    {data && data.map((item, i) => <>
                        <div class="col-md-6">
                            <a class="card text-decoration-none mb-4 p-1 ">

                                <div class="d-flex justify-content-center align-items-center">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold vazirmatn-uniquifier" style={{ lineHeight: '25px', maxWidth: '400px' }} >
                                            توێژینەوەیەک: جگەرەکێشان گرفتە دەروونییەکانی تازەپێگەیشتووان زیاددەکات
                                        </h5>

                                        <p class="mb-0 fw-bold fw-bold vazirmatn-uniquifier" style={{ color: '#143D84', fontSize: '18px' }}>
                                            ناوی نوسەر
                                        </p>
                                    </div>
                                    <div className="px-4">
                                        <img src={item.img} style={{ width: '100px', height: '100px', padding: '' }} />
                                    </div>
                                </div>

                            </a>
                        </div>
                    </>)}
                </div>



            </div>
        </section>)
}
