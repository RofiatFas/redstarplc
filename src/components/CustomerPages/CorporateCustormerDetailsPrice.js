import React from 'react';
import CreditRepaymentModal from '../Modal/CreditRepaymentModal';
import TopUpWalletModal from '../Modal/TopUpWalletModal';
import SideBar from '../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSearch, } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from '../Modal/DeleteModal';
import ImportServiceModal from '../Modal/ImportServiceModal';
import AddServicePriceModal from '../Modal/AddServicePriceModal';

function CorporateCustormerDetailsPrice() {
  return (
    <div>
            <div>
       <SideBar/>
       <main class=" pt-5" id='customer'>
         <div class="container-fluid pt-4">
            <p> Customer / Corporate Customer / Details / Manage Price</p>
            <div className='d-flex'>
            <h5>Corporate Customer Service Prices</h5>
            <div className='ms-auto'>
            <button class="btn btn-primary btn-1 fs-12 ms-auto" style={{marginRight: "10px"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal">Add Service Price</button>
            <button class="btn btn-primary btn-1 fs-12 ms-auto"  type="submit" data-bs-toggle="modal" data-bs-target="#importserviceModal">Import Service Price</button>
            </div>
            </div>
               {/* <h5>Corporate Customer Service Prices</h5> */}
               <p className='fs-13'>Society For Family Health</p>

               <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-10'>
                <div class="card h-100">
  <div class="card-header fs-10">
  <h6>Customer Detail</h6>
  </div>
  <div class="card-body">
           <form class="row g-3">
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputEmail4" class="form-label fw-bold fs-13">Company Name</label>
    <input type="text" class="form-control bg-light fs-10" id="inputAddress" placeholder="Society For Family Health"/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputPassword4" class="form-label fw-bold fs-13">Contact Name</label>
    <input type="password" class="form-control bg-light fs-10" id="inputPassword4" placeholder='Society For Family Health'/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress" class="form-label fw-bold fs-13">Company Email</label>
    <input type="text" class="form-control bg-light fs-10" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress2" class="form-label fs-13 fw-bold">Company Phone</label>
    <div className='d-flex'>
    <input type="text" class="form-control bg-light fs-10" id="inputAddress2" placeholder=""/>
    </div>
  </div>
           </form>
           <form class="row g-3 my-2">
  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <label for="inputEmail4" class="form-label fw-bold fs-13">Street Address</label>
    <input type="text" class="form-control bg-light fs-10" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputPassword4" class="form-label fw-bold fs-13">City</label>
    <input type="password" class="form-control bg-light fs-10" id="inputPassword4" placeholder=''/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress" class="form-label fw-bold fs-13">State</label>
    <input type="text" class="form-control bg-light fs-10" id="inputAddress" placeholder=""/>
  </div>
           </form>
  </div>
                </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-2 my-2 my-lg-0'>
                <div class="card h-100">
  <div class="card-header bg-white fw-bold">
  Wallet
  </div>
  <div class="card-body">
    <ul className='fs-13 list-unstyled'>
      <li>Current Balance</li>
      <li className='mb-2 fw-bold'>₦ 0.00</li>
      <li>Ledger Balance</li>
      <li className='fw-bold'>₦ 0.00</li>
    </ul>
    <div class="d-grid gap-2 mx-auto">
  {/* <button class="btn btn-primary" type="button">Button</button> */}
  <button class="btn btn-primary  bg-1 fs-10 topbtn" type="button" data-bs-toggle="modal" data-bs-target="#topupwalletModal">Top Up</button>
</div>
    {/* <button type="submit" class="btn btn-primary rebtn" ></button> */}
  </div>
</div>
                </div>
               </div>

               <div className='container-fluid table-responsive '>
          <div className='my-3 bg-white search-bg d-flex'>
          {/* <form action="" className='mx-3 rounded border border-dark search-btn'> */}
          <form action="" className='mx-3  search-btn'>
            <input type="text" placeholder="Search for package" name="search" className='fs-12 border-0 p-2'/>
            <button type="submit" className='border-0 bg-transparent fs-12 align-items-center'><FontAwesomeIcon icon={faSearch} /></button>
           </form>
           <div className='ms-auto d-flex align-item-center'>
           <p className=' fs-12 my-3'>Showing 1 - 20 of 63,000</p>
           <FontAwesomeIcon icon={faChevronLeft} className='my-3 mx-2 fs-12 ' />
           </div>
        </div>
         <table class="table bg-white">
  <thead>
    <tr className='fs-13'>
      <th scope="col">Service Zone</th>
      <th scope="col">Base Weight (Lower)</th>
      <th scope="col">Base Weight (Upper)</th>
      <th scope="col">Base Charge</th>
      <th scope="col">Add Weight</th>
      <th scope="col">Add Charge</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='fs-13'>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">LOS</td>
      <td>0.5</td>
      <td>10</td>
      <td>877</td>
      <td>0.5</td>
      <td>410</td>
      <td className='fw-bold' style={{cursor:"pointer"}} type="button" data-bs-toggle="modal" data-bs-target="#addserviceModal"><span className='color-1'>Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
  </tbody>
</table>
         </div>
         </div>
        </main> 

        <TopUpWalletModal/>
        <CreditRepaymentModal />
        <DeleteModal />
        <ImportServiceModal/>
        <AddServicePriceModal/>
    </div>
    </div>
  )
}

export default CorporateCustormerDetailsPrice