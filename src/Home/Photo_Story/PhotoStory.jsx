import React from 'react'
import photo_1 from '../../assets/photo/photo-1.png'
import photo_2 from '../../assets/photo/photo-2.png'
import photo_3 from '../../assets/photo/photo-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export const PhotoStory = () => {
    const items = [
        {
            id: 1,
            photo: photo_1,
            text: 'لە رووها کرێکارانی کۆمپانیای دابەشکردنی کارەبا مانیان گرتووە یەکێتیی تۆپی پێی'
        },
        {
            id: 2,
            photo: photo_2,
            text: 'لە رووها کرێکارانی کۆمپانیای دابەشکردنی کارەبا مانیان گرتووە یەکێتیی تۆپی پێی'
        },
        {
            id: 3,
            photo: photo_3,
            text: 'راگەیێنراوی فەرمی یەکێتیی تۆپی پێی ئاسیا لەسەر کارتە سوورەکەی ئەیمەن حوسێن'
        }
    ];
    return (
        <section className="container my-lg-4 vazirmatn-uniquifier" >

            <div class=" pb-0 pb-sm-4 p-4 shadow-sm bg-white rounded">
                {/* <!-- Start Title section --> */}
                <div class="d-flex mb-4 justify-content-between align-items-center">
                    <div class="ArticleTitle w-25 border-5 border-end border-danger">
                        <h2 class="pe-2 py-3">
                            فۆتۆ ستۆری
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



                <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4'>
                    {items.map(item => (
                        <div className="" key={item.id}>
                            <div className="container position-relative">
                                <img src={item.photo} style={{ height: '100%', width: '100%' }} alt={''} />
                                <div className="container mx-2 card border-0 position-absolute bottom-0 end-0 col-10 rounded-sm shadow-sm">
                                    <p className="text-black vazirmatn-uniquifier px-4 py-2" style={{ fontSize: '20px', lineHeight: '23px' }}>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>

    )
}
