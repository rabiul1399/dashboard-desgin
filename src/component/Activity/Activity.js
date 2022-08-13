import React from 'react';
import OrderStatas from './OrderStatas';
import ProductView from './ProductView';
import UserActivity from './UserActivity';

const Activity = () => {
    return (
        <div>
            <div className='row  gap-3 mx-3 justify-content-center'>
                <div className='col bg-white py-3 shadow rounded-3 '>

                    <div className='d-flex justify-content-between'>
                        <h5 className='fw-bold'>User Activity</h5>
                        <select class=" border-0 text-secondary fw-semibold" aria-label="Default select example">
                            <option selected >Weekly</option>
                            <option value="1">Months</option>
                            <option value="2">Daily</option>
                        </select>
                    </div>
                    <div className='ms-2 '>
                        <span>Order Value</span>
                        <br />
                        <strong>12.03%</strong>
                    </div>

                    <div className='' >

                        <UserActivity />



                    </div>

                </div>
                <div className='col bg-white py-3 shadow rounded-3 '>

                    <div className='d-flex justify-content-between'>
                        <h5 className='fw-bold'>Order Statas</h5>
                        <div className='fw-semibold'>...</div>
                    </div>

                    <OrderStatas />

                    <div className='border-top mx-1'>
                        <span className='text-secondary  fw-semibold '>Completed</span>
                        <span className='text-secondary mx-5  text-center fw-semibold'>Pending</span>
                        <span className='text-secondary  fw-semibold'>Cancel</span>
                    </div>

                </div>
                <div className='col bg-white py-3 shadow rounded-3 '>

                    <div className='d-flex justify-content-between mb-3'>
                        <h5 className='fw-bold'>Top Product</h5>
                        <select class=" border-0 text-secondary fw-semibold" aria-label="Default select example">
                            <option value="1">Monthly</option>
                            <option selected >Weekly</option>
                            <option value="2">Daily</option>
                        </select>
                    </div>
                    <ProductView />
                </div>

            </div>
        </div>
    );
};

export default Activity;