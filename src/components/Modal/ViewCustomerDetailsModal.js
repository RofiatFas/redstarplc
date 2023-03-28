import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,} from '@fortawesome/free-solid-svg-icons';


function ViewCustomerDetailsModal() {
  return (
    <div>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"100%!important"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div className='container-fluid'>
            <div className='d-flex'>
            <h6 className='mb-4'>Customer Details</h6>
            <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" className='ms-auto' style={{cursor:"pointer"}} />
        {/* <button type="submit" class="btn btn-primary bg-danger  mx-3" data-bs-dismiss="modal">Delete</button> */}
            </div>
        <div className='card'>
            <div className='row p-3'>
                <div className='col-4'>
                    <img src='img/customerpic.jpg' className='img-fluid img-rounded rounded-circle' />
                </div>
                <div className='col-4'>
                    <p className='fs-12 text-muted'>Name</p>
                    <h6 className='fs-10'>Bilikisu Sadiq</h6>
                    <p className='fs-12 text-muted'>Account Number</p>
                    <h6 className='fs-10'>RSELC02285</h6>
                    <p className='fs-12 text-muted'>Phone</p>
                    <h6  className='fs-10'>08038105601</h6>
                </div>
                <div className='col-4'>
                    <p className='fs-12 text-muted'>Email</p>
                    <h6 className='fs-10'>bsadiq@redstarplc.com</h6>
                    <p className='fs-12 text-muted'>Company name</p>
                    <h6 className='fs-10'>ZENITH BANK</h6>
                    <p className='fs-12 text-muted'>Address</p>
                    <h6  className='fs-10'>Lekki,&nbsp;Lagos,&nbsp;Nigeria.</h6>
                </div>
                {/* <div className='col-4'></div> */}
            </div>
        </div>
        <div class="row my-3">
        <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10 text-muted">Total Points</h5>
                <p class="card-text fw-bold fs-13">23.95</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10 text-muted">used Points</h5>
                <p class="card-text fs-13 fw-bold">0</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title text-uppercase fs-10 text-muted">Available&nbsp;Points</h4>
                <p class="card-text fs-13 fw-bold">23.95</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ViewCustomerDetailsModal