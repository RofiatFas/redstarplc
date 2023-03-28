import React from 'react';
import SideBar from '../SideBar';
import { Link } from 'react-router-dom';

function NewShipment() {
  return (
    <div>
        <SideBar />
        <main class=" pt-5">
         <div class="container-fluid pt-4" id='newshipment'>
            <p>New shipment</p>
            <h5>Submit Order Information</h5>
            <h6>Search for returning customer</h6>

            <form class="row g-3">
  <div class="col-12 c0l-sm-12 col-md-6 col-lg-2">
    <label for="inputEmail4" class="form-label">Account type</label>
    <select id="inputState" class="form-select">
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
  <div id='newshipment'>
  <Link to='/new-shipment-search' type="submit" class="btn btn-primary bg-1 fs-12 mt-2 p-2">Search</Link>
  </div>
    <button type="submit" class="btn btn-primary bg-1 fs-12 mt-2 p-2 mx-2">Add&nbsp;new&nbsp;custormer</button>
  </div>
  </div>

            </form>
          </div>
          </main>
    </div>
  )
}

export default NewShipment