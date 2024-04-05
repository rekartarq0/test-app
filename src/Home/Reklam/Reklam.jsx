import React from 'react';
import logo from "../../assets/logo.png";

export const Reklam = () => {
    return (
        <section style={{ marginTop: '1.5rem', marginBottom: '1.5rem', }}>
            <div className="container">
                <div className="card bg-black shadow-sm border-0 p-4">
                    <div className="d-flex rounded justify-content-between items-center text-white">
                        <p className='vazirmatn-uniquifier'>X</p>
                        <img style={{ maxWidth: '20%', maxHeight: '30px' }} src={logo} alt="Logo" />
                    </div>
                    <div className="d-flex bg-black justify-content-between items-center text-white">
                        <div className="card bg-danger text-white" style={{ marginTop: '-22px', marginRight: '10px' }}>
                            <h2 className='p-2 px-4 vazirmatn-uniquifier'>بەدەستی بهێنە</h2>
                        </div>
                    </div>
                    <div className="d-flex bg-black justify-content-end items-center text-white">
                        <h2 className='text-danger vazirmatn-uniquifier' style={{ paddingLeft: '110px', marginTop: '-30px' }}>لێرە ریکلام بکە</h2>
                    </div>


                </div>

            </div>
        </section>
    );
};
