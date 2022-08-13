import React from 'react';
import { faBagShopping,  faFileInvoice, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = () => {
    return (
        <div className=''>
            <div className='row  gap-3 mx-3 justify-content-center'>
                <div className='col bg-white py-3 shadow rounded-3 '>
                    <div className='d-flex justify-content-between align-items-end' >
                        <div className='d-flex  align-items-center   '>
                        <div className='bg-primary rounded-3   p-2 text-white bg-opacity-75  icon'>
                            <FontAwesomeIcon className='mx-1  ' icon={faFileInvoice} />
                        </div>
                        <div className='ms-2'>
                            <span>Revenue</span>
                            <br />
                            <strong>$21,456</strong>
                        </div>
                        </div>

                        <p className='text-success mb-0 bg-secondary bg-opacity-25  rounded-4 px-1'>+2.65%</p>

                    </div>

                </div>
                <div className='col bg-white py-3 shadow rounded-3 '>
                    <div className='d-flex justify-content-between align-items-end' >
                        <div className='d-flex  align-items-center   '>
                        <div className='bg-primary rounded-3   p-2 text-white bg-opacity-75  icon'>
                            <FontAwesomeIcon className='mx-1  ' icon={faBagShopping} />
                        </div>
                        <div className='ms-2'>
                            <span>Orders</span>
                            <br />
                            <strong>5,463</strong>
                        </div>
                        </div>

                        <p className='text-danger mb-0 bg-secondary bg-opacity-25  rounded-4 px-1'>-0.82%</p>

                    </div>

                </div>
                <div className='col bg-white py-3 shadow rounded-3 '>
                    <div className='d-flex justify-content-between align-items-end' >
                        <div className='d-flex  align-items-center   '>
                        <div className='bg-primary rounded-3   p-2 text-white bg-opacity-75  icon'>
                            <FontAwesomeIcon className='mx-1  ' icon={faUserGroup} />
                        </div>
                        <div className='ms-2'>
                            <span>Customers</span>
                            <br />
                            <strong>45.254</strong>
                        </div>
                        </div>

                        <p className='text-danger mb-0 bg-secondary bg-opacity-25  rounded-4 px-1'>-1.04%</p>

                    </div>
                </div>        

            </div>
        </div>
    );
};

export default Card;