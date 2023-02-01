import { fa8, faCalendarAlt, faComment, faDashboard, faDiagramProject, faElevator, faEnvelope, faFileAlt, faFileInvoice, faGrinSquint, faPenToSquare, faUserCheck, faWifi3 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DashboardList = () => {
    return (
        <div className='m-2'>
            <div className='d-flex justify-content-between '>
                <span className='fw-semibold'>MENU</span>
                <button type="button" class="btn  btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="accordion " id="accordionExample">
                <div class="accordion-item border border-0 ">
                    <h2 class="accordion-header " id="headingOne">
                        <button class="accordion-button bg-secondary fw-semibold ps-0 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <FontAwesomeIcon className=' me-2 ' icon={faDashboard} />  Dashboards
                        </button>

                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show bg-secondary" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                            <option selected className='text-light'>Ecommerce</option>
                            <option value="1">Saas</option>
                            <option value="2">Crypto</option>
                            <option value="3">Newes</option>

                        </div>
                    </div>
                </div>


            </div>
            <div>
                <span>APPLICATIONS</span>

                <div class="  mt-3">
                    <li class="list-group-item list-group-item-action py-2" aria-current="true">
                        <FontAwesomeIcon className=' me-2' icon={faCalendarAlt} /> Calendar
                    </li>
                    <li class="list-group-item list-group-item-action py-2" aria-current="true">
                        <FontAwesomeIcon className=' me-2' icon={faComment} />  Chat <span className='d ms-5 text-danger'>Hot</span>
                    </li>
                    <li class="list-group-item list-group-item-action py-2" aria-current="true">
                        <FontAwesomeIcon className=' me-2' icon={faFileAlt} /> File Manager
                    </li>
                    <li class="list-group-item list-group-item-action py-2" >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className=' me-2' icon={faFileAlt} />
                            <select class="form-select bg-secondary border-0 ps-1 " aria-label="Default select example">
                                <option selected> Ecommerce</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>

                            </select>
                        </div>
                    </li>
                    <li class="list-group-item list-group-item-action py-2" >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className=' me-2' icon={faEnvelope} />
                            <select class="form-select bg-secondary border-0 ps-1 " aria-label="Default select example">
                                <option selected> Email</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>

                            </select>
                        </div>
                    </li>

                    <li class="list-group-item list-group-item-action py-2" >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className=' me-2' icon={faFileInvoice} />
                            <select class="form-select bg-secondary border-0 ps-1 " aria-label="Default select example">
                                <option selected> Invoices</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>

                            </select>
                        </div>
                    </li>

                    <li class="list-group-item list-group-item-action py-2" >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className=' me-2' icon={faDiagramProject} />
                            <select class="form-select bg-secondary border-0 ps-0 " aria-label="Default select example">
                                <option selected> Projects</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>

                            </select>
                        </div>
                    </li>

                    <li class="list-group-item list-group-item-action py-2" >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className=' me-2' icon={faWifi3} />
                            <select class="form-select bg-secondary border-0 ps-0 " aria-label="Default select example">
                                <option selected> Contacts</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>

                            </select>
                        </div>
                    </li>

                </div>
            </div>

            <div>
                <p>LAYOUTS</p>
                <p>PAGES</p>

                <div className='mt-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <FontAwesomeIcon className=' me-2' icon={faUserCheck} /> Authentication  </div>
                        <FontAwesomeIcon className=' me-2' icon={fa8} />
                    </div>

                </div>

                <li class="list-group-item list-group-item-action py-2" >
                    <div className='d-flex align-items-center'>
                        <FontAwesomeIcon className=' me-2' icon={faGrinSquint} />
                        <select class="form-select bg-secondary border-0 ps-0 " aria-label="Default select example">
                            <option selected> Utillity</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>

                        </select>
                    </div>
                </li>
            </div>
            <div className='mt-4'>
                <p className='fw-semibold'>COMPONENTS</p>

                <div>
                    <li class="list-group-item list-group-item-action py-2" >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className=' me-2' icon={faElevator} />
                            <select class="form-select bg-secondary border-0 ps-0 " aria-label="Default select example">
                                <option selected> UI Elements</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>

                            </select>
                        </div>
                    </li>
                    <li class="list-group-item list-group-item-action py-2" >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className=' me-2' icon={faPenToSquare} />
                            <select class="form-select bg-secondary border-0 ps-0 " aria-label="Default select example">
                                <option selected> Forms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>

                            </select>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default DashboardList;