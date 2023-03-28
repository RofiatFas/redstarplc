import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function StationModal() {
  return (
    <div class="modal fade" id="stationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"100%!important"}}>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div className='container-fluid'>
              <div className='d-flex'>
              <h5 className='mb-3'>Stations</h5>
              <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" className='ms-auto' style={{cursor:"pointer"}} />
              </div>
              <form className='row mb-3'>
                 <div class="col-12">
               <label for="inputEmail4" class="form-label fw-bold">Select Station</label>
               <select id="inputState" class="form-select">
                 <option selected>Please Select</option>
                 <option>Apapa</option>
                 <option>Cele</option>
                 <option>Adeola Odeku</option>
                 <option>Kakawa</option>
                 <option>Awolowo</option>
                </select>
               </div>
              </form>
              <button type="submit" class="btn btn-primary bg-1 fs-12 verified-btn" data-bs-dismiss="modal">Submit</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StationModal