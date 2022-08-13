import React from 'react';
import Activity from './Activity/Activity';
import Card from './Card/Card';
import Overview from './Overview/Overview';

const Home = () => {
    return (
        <div className='container-fluid  bg-light '>
            <div className='row '>


                <div className='col-md-2 pe-0 bg-success'>

                    <h3> home</h3>
                </div>
                <main className=' col-md-8  '>

                    <Card />
                    <Overview />
                    <Activity />



                </main>
                <div className=' col-md-2  bg-secondary'>
                    <h2>profile</h2>
                    <h2>profile</h2>
                    <h2>profile</h2>

                </div>

            </div>
        </div>
    );
};

export default Home;