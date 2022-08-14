import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBars, faFlagUsa, faGear, faGrip, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import my from './img/rabi-9.jpg'
const Navbar = () => {
    return (
        <div>
            <nav class=" d-flex justify-content-between  pt-3 bg-light">                 <div>
                
                <a class="navbar-brand fs-3 ms-2" href="#">Dashboard</a>
            </div>

                <div>
                    <div className='me-5'>
                        <FontAwesomeIcon className='mx-2 text-' icon={faSearch} />
                        <FontAwesomeIcon className='mx-2' icon={faFlagUsa} />
                        <Link to='/home'><FontAwesomeIcon className='mx-2' icon={faGrip} /></Link>
                        <span className='position-relative mx-2'>
                            <FontAwesomeIcon icon={faBell} />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                4+
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </span>

                        <FontAwesomeIcon className='mx-2' icon={faGear} />

                    </div>

                    {/* <div className='position-relative '>
                        <img src={my} className='w-25 position-absolute rounded-circle  border border-3 ' alt="" />
                    </div> */}

                </div>


            </nav>





        </div>
    );
};

export default Navbar;