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
          
            <div class="offcanvas offcanvas-start w-25" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className='bg-secondary'>
                    <DashboardList />
                </div>
            </div>

            <div className='row '>
                <main className='  col-lg-9  '>
                    <Card />
                    <Overview />
                    <Activity />
                </main>
                <div className=' col-lg-3 p-3 p-lg-0  mt-3 bg-white'>
                    <Profile />

                </div>
            </div>
        </div>
    );
};

export default Home;