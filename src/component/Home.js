import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Activity from './Activity/Activity';
import Card from './Card/Card';
import DashboardList from './DashboardList';
import Overview from './Overview/Overview';
import Profile from './Profile/Profile';

const Home = () => {
    return (
        <div className='container-fluid pt-3  bg-light '>

            <button class="btn btn-light mb-2 ms-2  d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
            <FontAwesomeIcon className=' me-2 ' icon={faBars} /> </button>
           
            <div class="offcanvas-lg offcanvas-start w-25 d-lg-none " tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className='bg-secondary'>
                    <DashboardList />
                </div>
            </div>
            <div className='row '>


                <div className=' col-lg-2 p-0 bg-secondary d-none d-lg-block'>
                    <DashboardList />



                </div>
                <main className='  col-lg-8  '>
                    <Card />
                    <Overview />
                    <Activity />
                </main>
                <div className=' col-lg-2 p-3 p-lg-0  mt-3 bg-white'>
                    <Profile />

                </div>

            </div>
        </div>
    );
};

export default Home;