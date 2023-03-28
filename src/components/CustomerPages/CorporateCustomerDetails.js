import React from 'react'
import CreditRepaymentModal from '../Modal/CreditRepaymentModal';
import TopUpWalletModal from '../Modal/TopUpWalletModal';
import SideBar from '../SideBar';
import { Link } from 'react-router-dom';

function CorporateCustomerDetails() {
  return (
    <div>
       <SideBar/>
       <main class="pt-5" id='customer'>
         <div class="container-fluid pt-4">
            <p> Customer / Corporate Customer / Details</p>
               <h5>Corporate Customer Details</h5>
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

               <div className='row my-3'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-10'>
                <div class="card">
  <div class="card-header fs-10">
  <h6>RSL Accountl</h6>
  </div>
  <div class="card-body">
           <form class="row g-3">
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputEmail4" class="form-label fw-bold fs-13">Account Number</label>
    <input type="text" class="form-control bg-light fs-10" id="inputAddress" placeholder="RSLCust-000002"/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputPassword4" class="form-label fw-bold fs-13">Credit Limit</label>
    <input type="password" class="form-control bg-light fs-10" id="inputPassword4" placeholder='0'/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress" class="form-label fw-bold fs-13">Credit Balance</label>
    <input type="text" class="form-control bg-light fs-10" id="inputAddress" placeholder="0"/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress2" class="form-label fs-13 fw-bold"></label>
    <div className='d-flex my-1'>
    {/* <input type="text" class="form-control" id="inputAddress2" placeholder=""/> */}
    <button type="button" class="btn btn-primary bg-1 fs-10 rebtn" data-bs-toggle="modal" data-bs-target="#creditrepaymentModal">Repayment</button>
    <div id='customer'>
    <Link to='/corporate-customer-details-price' type="button" class="btn btn-primary bg-1 fs-10 mx-2 rebtn">Manage&nbsp;Price</Link>
    </div>
    </div>
  </div>
  
           </form>
  </div>
                </div>
                </div>
               </div>
         </div>
        </main> 

        <TopUpWalletModal/>
        <CreditRepaymentModal />
    </div>
  )
}

export default CorporateCustomerDetails