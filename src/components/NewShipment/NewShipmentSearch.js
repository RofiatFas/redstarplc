import React from 'react';
import CommercialDetailsModal from '../Modal/CommercialDetailsModal';
import SplitPaymentDetailsModal from '../Modal/SplitPaymentDetailsModal';
import SideBar from '../SideBar';

function NewShipmentSearch() {
  return (
    <div>
    <SideBar />
    <main class=" pt-5">
     <div class="container-fluid pt-4" id='new-shipment'>
        <p>New shipment</p>
        <h5>Submit Order Information</h5>
        <h6 className='mb-3'>Search for returning customer</h6>

        <form class="row g-3 mb-3">
<div class="col-12 col-sm-12 col-md-6 col-lg-2 fs-13">
<label for="inputEmail4" class="form-label">Account type</label>
<select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>...</option>
</select>
</div>
<div class="col-12 col-sm-12 col-md-6 col-lg-2 fs-13">
<label for="inputPassword4" class="form-label">Account Number</label>
<input type="password" class="form-control" id="inputPassword4"/>
</div>
<div class="col-12 col-sm-12 col-md-6 col-lg-2 fs-13">
<label for="inputAddress" class="form-label">First&nbsp;name&nbsp;/Company</label>
<input type="text" class="form-control" id="inputAddress" placeholder=""/>
</div>
<div class="col-12 col-sm-12 col-md-6 col-lg-2 fs-13">
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

        <div className='row mb-3'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-9'>
                <div className=''>
                                <div class="card mb-3">
  <div class="card-header fw-bold">
  Recipient Information
  </div>
  <div class="card-body">
    <form>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Name</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Phone Number</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        </div>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Email Address</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Street</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        </div>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">City</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Sate</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Country</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        </div>
    </form>
  </div>
             </div>
                </div>
             <div class="card mb-3">
  <div class="card-header fw-bold">
  Shipment Information
  </div>
  <div class="card-body">
    <form>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Delivery City </label>
<select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>...</option>
</select>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Delivery Town</label>
<select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>...</option>
</select>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Flyer No</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        </div>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Delivery City </label>
<select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>...</option>
</select>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Delivery Town</label>
<select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>...</option>
</select>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-2 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Pieces</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="0"/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-2 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Weight</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="0"/>
       </div>
        </div>
        <div className='row'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-12 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Content Description</label>
<div className='d-flex'>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
<button type="button" class="btn btn-primary assignbtn bg-1 fs-12 mx-2  p-2" data-bs-toggle="modal" data-bs-target="#commercialdetailsModal">Commercial&nbsp;Details</button>
<button type="button" class="btn btn-primary assignbtn bg-1 fs-12  p-2">Generate&nbsp;Price</button>
</div>
       </div>
        {/* <div class="col-12 col-sm-12 col-md-6 col-lg-4 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Weight</label>
<div className='d-flex '>
<button type="submit" class="btn btn-primary assignbtn bg-1 fs-12 mt-4 p-2">Commercial&nbsp;Details</button>
<button type="submit" class="btn btn-primary assignbtn bg-1 fs-12 mt-2 p-2 mx-2">Generate&nbsp;Price</button>
        </div>
       </div> */}
        </div>
    </form>
  </div>
             </div>

             <div class="card">
  <div class="card-header fw-bold">
  Payment Information
  </div>
  <div class="card-body">
    <form>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Declared Value</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="0"/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Onforwarding Charge</label>
<input type="text" class="form-control bg-light" id="inputAddress2" placeholder="1000"/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Insurance Charge</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="0"/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Crating Charge</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="0"/>
       </div>
        </div>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Service Charge</label>
<input type="text" class="form-control bg-light" id="inputAddress2" placeholder="0"/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Discount</label>
<input type="text" class="form-control bg-light" id="inputAddress2" placeholder="0"/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Payment Method</label>
<select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>...</option>
</select>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Bank Account</label>
<select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>...</option>
</select>
       </div>
        </div>
        <div className='row mb-3'>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Payment Reference</label>
<input type="text" class="form-control" id="inputAddress2" placeholder=""/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">VAT</label>
<input type="text" class="form-control bg-light" id="inputAddress2" placeholder="685"/>
       </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 fs-13">
<label for="inputEmail4" class="form-label fw-bold">Total Amount</label>
<input type="text" class="form-control" id="inputAddress2" placeholder="9779"/>
       </div>
        </div>
        <div className='d-flex '>
<button type="submit" class="btn btn-primary bg-1 fs-13 mt-2 p-2">Submit and Print</button>
<button type="button" class="btn btn-primary bg-1 fs-13 mt-2 p-2 mx-2" data-bs-toggle="modal" data-bs-target="#splitpaymentdetailsModal">Split Payment</button>
        </div>
    </form>
    
  </div>
</div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 my-3 my-lg-0'>
            <div class="card" >
  <div class="card-body">
    <ul className='list-unstyled fs-13'>
        <li className='text-muted'>Account No</li>
        <li className='fw-bold mb-3'>RSELC00004</li>
        <li className='text-muted'>SurName</li>
        <li className='fw-bold mb-3'>GRACE</li>
        <li className='text-muted'>Other Names</li>
        <li className='fw-bold mb-3'>B</li>
        <li className='text-muted'>SPoints</li>
        <li className='fw-bold mb-3'>152</li>
        <li className='text-muted'>Phone Number</li>
        <li className='fw-bold mb-3'>08069173167</li>
        <li className='text-muted'>Email</li>
        <li className='fw-bold mb-3 fs-12'>GANYANWUGRACE@GMAIL.COM</li>
        <li className='text-muted'>Company Address</li>
        <li className='fw-bold mb-3'>RSELC00004</li>
        <li className='text-muted'>Centre Code</li>
        <li className='fw-bold mb-3'>10119</li>
        <li className='text-muted'>Address</li>
        <li className='fw-bold mb-3'>MAFOLUKU LAGOS</li>
        <div class="d-grid gap-2">
  <button class="btn btn-primary bg-1 fs-13" type="button">Redeem point</button>
  {/* <button class="btn btn-primary" type="button">Button</button> */}
</div>
    </ul>
  </div>
</div>
            </div>
        </div>
      </div>
      </main>
      <CommercialDetailsModal/>
      <SplitPaymentDetailsModal/>
</div>
  )
}

export default NewShipmentSearch