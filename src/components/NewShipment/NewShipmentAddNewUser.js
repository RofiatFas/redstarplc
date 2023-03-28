import React from 'react';
import SideBar from '../SideBar';

function NewShipmentAddNewUser() {
  return (
    <div>
            <div>
        <SideBar />
        <main class=" pt-3">
         <div class="container-fluid">
            <p>New shipment / Add new customer</p>
            <h5>Submit Order Information</h5>
            <h6 className='mb-3'>Search for returning customer</h6>

            <form class="row g-3 mb-3 fs-13">
  <div class="col-12 col-sm-12 col-md-6 col-lg-2">
    <label for="inputEmail4" class="form-label">Account type</label>
    <select id="inputState" class="form-select fs-13">
      <option selected>Please Select</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-2">
    <label for="inputPassword4" class="form-label">Account Number</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-2">
    <label for="inputAddress" class="form-label">First&nbsp;name&nbsp;/Company</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-2">
    <label for="inputAddress2" class="form-label">Phone&nbsp;Number</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className='col-12 col-sm-12 col-md-6 col-lg-2'>
  <label for="inputAddress2" class="form-label mb-3"></label>
  <div className='d-flex '>
  <button type="submit" class="btn btn-primary bg-1 fs-12 mt-2 p-2">Search</button>
    <button type="submit" class="btn btn-primary bg-1 fs-12 mt-2 p-2 mx-2">Add&nbsp;new&nbsp;custormer</button>
  </div>
  </div>

            </form>
            <h6>Add customer</h6>
            <div class="form-check mb-3">
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
               <label class="form-check-label fs-13" for="flexCheckDefault">
               Use Allocated Account Number
               </label>
            </div>

            <form>
                <div className='row g-3 mb-3'>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-1">
                   <label for="inputPassword4" class="form-label fw-bold fs-13">Title</label>
                   <input type="password" class="form-control fs-13" id="inputPassword4" placeholder='Mr'/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Surname</label>
                   <input type="password" class="form-control" id="inputPassword4"/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">First Name</label>
                   <input type="password" class="form-control" id="inputPassword4"/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Other Name</label>
                   <input type="password" class="form-control" id="inputPassword4"/>
                   </div>
                </div>
                <div className='row g-3 mb-3'>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-8 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Company Name</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder=''/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Sector</label>
                   <input type="password" class="form-control" id="inputPassword4"/>
                   </div>
                </div>
                <div className='row g-3 mb-3'>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Email</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder=''/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">City</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder=''/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">State</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder=''/>
                   </div>
                </div>
                <div className='row g-3 mb-3'>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Phone Number</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder=''/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Birthday</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder=''/>
                   </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
                   <label for="inputPassword4" class="form-label fw-bold">Wedding Anniversary</label>
                   <input type="password" class="form-control" id="inputPassword4" placeholder=''/>
                   </div>
                </div>
            </form>
            <button type="submit" class="btn btn-primary bg-1 btn-1 mb-5 fs-12 mt-2 p-2">Submit</button>
          </div>
          </main>
    </div>
    </div>
  )
}

export default NewShipmentAddNewUser