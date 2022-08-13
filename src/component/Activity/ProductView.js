import React from 'react';

const ProductView = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center py-3 ' >
                <div className='d-flex  align-items-center   '>
                    <div className='bg-primary rounded-3   p-2 text-white bg-opacity-75 fw-bold  icon'>
                        #1
                    </div>
                    <div className='ms-2'>
                        <span className='text-secondary'>T-shirt</span>
                        <br />
                        <strong>$21.4</strong>
                    </div>
                </div>
                <p className='fw-semibold mb-0 bg-secondary bg-opacity-25  rounded-3 px-3 py-1'>3.84k</p>

            </div>
            <div className='d-flex justify-content-between align-items-center  py-3' >
                <div className='d-flex  align-items-center   '>
                    <div className='bg-primary rounded-3   p-2 text-white bg-opacity-75 fw-bold  icon'>
                        #2
                    </div>
                    <div className='ms-2'>
                        <span className='text-secondary'>Hoodie</span>
                        <br />
                        <strong>$24.5</strong>
                    </div>
                </div>
                <p className='fw-semibold mb-0 bg-secondary bg-opacity-25  rounded-3 px-3 py-1'>3.4k</p>

            </div>
            <div className='d-flex justify-content-between align-items-center  py-3' >
                <div className='d-flex  align-items-center   '>
                    <div className='bg-primary rounded-3   p-2 text-white bg-opacity-75 fw-bold  icon'>
                        #3
                    </div>
                    <div className='ms-2'>
                        <span className='text-secondary'>Shirt</span>
                        <br />
                        <strong>$22.5</strong>
                    </div>
                </div>
                <p className='fw-semibold mb-0 bg-secondary bg-opacity-25  rounded-3 px-3 py-1'>2.8k</p>

            </div>
            <div className='d-flex justify-content-between align-items-center  py-3' >
                <div className='d-flex  align-items-center   '>
                    <div className='bg-primary rounded-3   p-2 text-white bg-opacity-75 fw-bold  icon'>
                        #4
                    </div>
                    <div className='ms-2'>
                        <span className='text-secondary'>Cap</span>
                        <br />
                        <strong>$22.5</strong>
                    </div>
                </div>
                <p className='fw-semibold mb-0 bg-secondary bg-opacity-25  rounded-3 px-3 py-1'>2.8k</p>

            </div>
        </div>
    );
};

export default ProductView;