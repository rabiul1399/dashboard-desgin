import React from 'react';
import one from '../img/XoDO.gif';
import my from '../img/rabi-9.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faFileInvoice, faPercentage } from '@fortawesome/free-solid-svg-icons';
import './profile.css'
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';

const Profile = () => {
    return (
        <div>

            <div class=" mb-3">
                <img src={one} class=" w-100" height={100} alt="..." />

                <div className='position-relative '>
                    <img src={my} className='w-25 position-absolute top-0 start-50 translate-middle rounded-circle  border border-3 ' alt="" />
                </div>
                <div className='mt-5 text-center'>
                    <p className='fs-5 mb-1 fw-semibold'>Rabiul Islam</p>
                    <span className='text-secondary'>Web developer</span>


                </div>


                <div className='d-flex justify-content-evenly mt-4'>
                    <div className='text-center'>
                        <strong>1,225</strong>
                        <br />
                        <span className='text-secondary'>Products</span>
                    </div>
                    <span className='border-end'></span>

                    <div className='text-center'>
                        <strong>5.2k</strong>
                        <br />
                        <span className='text-secondary'>
                            followers
                        </span>
                    </div>
                </div>
            </div>
            <div className='border-top border-bottom mt-4 '>
                <div className='d-flex justify-content-between mx-2 mt-3'>
                    <p className=' fw-semibold'>Earning</p>
                    <div className='fw-semibold text-end '>   <FontAwesomeIcon className='mx-1  ' icon={faCircleExclamation} /></div>
                </div>

                <div className='w-75 mx-auto'>
                    <CircularProgressbarWithChildren value={76}>
                        <div className='text-center'>
                            <strong>76%</strong>
                            <br />
                            <h5>$25,76</h5>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <p className='text-center mt-2'>Earning this Month</p>
                <div className='d-flex align-items-center  py-3' >
                    <p className='fw-semibold mb-0 bg-secondary bg-opacity-25 text-success  rounded-3  px-1'>+2.43%</p>
                    <span>previous period</span>


                </div>

            </div>


            <div>
                <div className='d-flex justify-content-between align-items-center py-3 ' >


                </div>
                <div className='d-flex   align-items-center  my-2 justify-content-around '>
                    <p className='fw-semibold mb-0 bg-secondary bg-opacity-25  rounded-3 px-3 py-1'>12 <br />
                        <span className='text-secondary'>Sep</span>
                    </p>
                    <p className='mt-2'>Need "vulunter"</p>
                </div>
                <div className='d-flex   align-items-center   my-2 justify-content-around '>
                    <p className='fw-semibold mb-0 bg-secondary bg-opacity-25  rounded-3 px-3 py-1'>11 <br />
                        <span className='text-secondary'>Sep</span>
                    </p>
                    <p className='mt-2'>Everyone would</p>
                </div>
                <div className='d-flex   align-items-center justify-content-around  my-2 '>
                    <p className='fw-semibold mb-0 bg-secondary bg-opacity-25  rounded-3 px-3 py-1'>10 <br />
                        <span className='text-secondary'>Sep</span>
                    </p>
                    <p className='mt-2'>Need "vulunter"</p>
                </div>

            </div>



        </div>
    );
};

export default Profile;