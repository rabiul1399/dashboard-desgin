import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Overview = () => {

    const data = [
        {
            name: 'Page A',
            uv: 0,
            pv: 0,
            amt: 0,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    const monthsSelect = () => {
        alert("You selected some dtext!");
    }

    // static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';
    return (
        <div className=' mx-3  py-5 '>
            <div className='bg-white shadow rounded-3 p-2'>
                <div className='d-flex justify-content-between'>
                    <h4 className=''>Overview</h4>
                    <div className='fw-semibold'>Sort By: <select class=" border-0 text-secondary fw-semibold" aria-label="Default select example">
                        <option selected >Yearly</option>
                        <option onSelect={monthsSelect} value="1">2022</option>
                        <option value="2">2021</option>
                        <option value="2">2019</option>
                        <option value="2">2018</option>
                    </select></div>
                </div>
                <div className='row  mt-3'>
                    <div className='col-4 '>
                        <h5 className='text-secondary'>This Month</h5>

                        <div>
                            <div className='d-flex align-items-center mb-2 ' >
                                <div className=''>
                                    <h3>$21,456</h3>
                                </div>
                                <p className=' mb-0 bg-secondary bg-opacity-25 text-success rounded-4 px-1 ms-4'>+2.65%</p>

                            </div>

                            <div>
                                <div className='d-flex justify-content-between border-bottom mb-2'>
                                    <div className='ms-2 '>
                                        <span>Orders</span>
                                        <br />
                                        <strong>5,456</strong>
                                    </div>
                                    <div className='ms-2 '>
                                        <span>Sales</span>
                                        <br />
                                        <strong>41,456</strong>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between  border-bottom mb-2'>
                                    <div className='ms-2 '>
                                        <span>Order Value</span>
                                        <br />
                                        <strong>12.03%</strong>
                                    </div>
                                    <div className='ms-2 '>
                                        <span>Customers</span>
                                        <br />
                                        <strong>21,456</strong>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between mb-2 '>
                                    <div className='ms-2 '>
                                        <span>Income</span>
                                        <br />
                                        <strong>$32.356</strong>
                                    </div>
                                    <div className='ms-2 '>
                                        <span>Expenses</span>
                                        <br />
                                        <strong>$12,456</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8 '>

                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;