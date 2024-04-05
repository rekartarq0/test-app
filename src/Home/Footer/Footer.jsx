import React from 'react'
import logo from '../../assets/logob.png'
import fb from '../../assets/fb.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedn.png'
import insta from '../../assets/instagram.png'
export const Footer = () => {
    return (
        <footer className="text-white align-items-center justify-content-center d-flex" style={{ width: '100%', backgroundColor: '#152745', minHeight: '30vh' }}>
            <div className="container">
                <div className="row justify-content-center align-items-center py-2">
                    <div className="col-auto">
                        <img src={logo} alt="Logo 1" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p className="vazirmatn-uniquifier font-weight-bold pb-2" style={{ color: '#C0CADA' }}>
                            مافی سەرجەم بابەتەکان پارێزراوە بۆ گەرمیان ناو
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="d-flex col-auto vazirmatn-uniquifier font-weight-bold pb-2" style={{ fontSize: '22px' }}>
                        <p className="mx-3">
                            دەربارە
                        </p>
                        <p className="mx-3">
                            پەیوەندی
                        </p>
                        <p className="mx-3">
                            ریکلام بکە
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="d-flex col-auto vazirmatn-uniquifier font-weight-bold" style={{ fontSize: '22px' }}>
                        <p className="mx-2">
                            <img src={youtube} alt="" />
                        </p>
                        <p className="mx-2">
                            <img src={insta} alt="" />
                        </p>
                        <p className="mx-2">
                            < img src={linkedin} alt="" />
                        </p>
                        <p className="mx-2">
                            < img src={fb} alt="" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>)
}
