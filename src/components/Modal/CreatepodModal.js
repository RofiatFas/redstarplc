import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function CreatepodModal() {
  return (
    <div class="modal fade" id="createpodModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"100%!important"}}>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div className='container-fluid'>
              <div className='d-flex'>
              <h5 className='mb-3'>Create POD</h5>
              <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" className='ms-auto' style={{cursor:"pointer"}} />
              </div>
              <form className='row mb-3'>
                <div class="col-12 mb-3">
                 <label for="inputEmail4" class="form-label fw-bold">Picker name</label>
                 <input type="text" class="form-control text-muted" id="exampleInputPassword1" placeholder='Enter picker name'/>
                 </div>
                <div class="col-12 mb-3">
                 <label for="inputEmail4" class="form-label fw-bold">Picker ID number</label>
                 <input type="text" class="form-control text-muted" id="exampleInputPassword1" placeholder='Enter picker ID number'/>
                 </div>
                <div class="col-12 ">
                 <label for="inputEmail4" class="form-label fw-bold">Expiring date</label>
                 <input type="text" class="form-control text-muted" id="exampleInputPassword1" placeholder='Enter expirirng date'/>
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

export default CreatepodModal