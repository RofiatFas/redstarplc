import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function CreateDeliveryBagModal() {
  return (
    <div class="modal fade" id="createdeliverybagModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"100%!important"}}>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div className='container-fluid'>
              <div className='d-flex'>
              <h5 className='mb-3'>Create Delivery Bag</h5>
              <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" className='ms-auto' style={{cursor:"pointer"}} />
              </div>
              <form className='row mb-3'>
                <div class="col-12">
                 <label for="inputEmail4" class="form-label fw-bold">Bag number</label>
                 <input type="text" class="form-control bg-light border-0" id="exampleInputPassword1" placeholder='BG05426'/>
                 </div>
                 <div class="col-12">
               <label for="inputEmail4" class="form-label fw-bold">Courier</label>
               <select id="inputState" class="form-select">
                 <option selected>Please Select</option>
                 <option>...</option>
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

export default CreateDeliveryBagModal