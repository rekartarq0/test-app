import React from 'react';
import logo from '../../assets/logo.png'; // Import as default export
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    return (
        <nav className='d-flex justify-content-between align-items-center text-white sticky-top'
            style={{ backgroundColor: '#143D84', paddingLeft: '120px', paddingRight: '120px', paddingTop: '10px', paddingBottom: '10px' }}>
            <div>
                <img src={logo} alt="Logo" className="h" style={{ height: '65px' }} />
            </div>
            <div className='d-flex align-items-center fs-4 mt-2'>
                <p className='vazirmatn-uniquifier mx-3'>هەواڵ</p>
                <p className='vazirmatn-uniquifier mx-3'>ڕاپۆرت</p>
                <p className='vazirmatn-uniquifier mx-3'>چاوپێکەوتن </p>
                <p className='vazirmatn-uniquifier mx-3'>بیروڕا</p>
                <p className='vazirmatn-uniquifier mx-3'>فۆتۆ ستۆری</p>
                <p className='vazirmatn-uniquifier mx-3'>تایبەت</p>
            </div>
            <FontAwesomeIcon size='lg' icon={faSearch} color='white' />
        </nav>
    );
};

export default NavBar;
