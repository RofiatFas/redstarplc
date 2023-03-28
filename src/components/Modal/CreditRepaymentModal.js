import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,} from '@fortawesome/free-solid-svg-icons';

function CreditRepaymentModal() {
  return (
    <div>
      <div class="modal fade" id="creditrepaymentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"100%!important"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div className='container-fluid'>
            <div className='d-flex'>
            <h6 className='mb-4 fs-4'>Credit Repayment</h6>
            <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" className='ms-auto' style={{cursor:"pointer"}} />
            </div>
            <form className='row mb-3'>
              <div class="col-12 mb-3">
               <label for="inputEmail4" class="form-label fw-bold">Bank Account</label>
               <select id="inputState" class="form-select">
                 <option selected>Please Select</option>
                 <option>Jaiz Bank</option>
                 <option>UBA Bank</option>
                 <option>GTB Bank</option>
                </select>
               </div>

               <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label fw-bold">Receipt No.</label>
                <input type="text" class="form-control" id="exampleInputPassword1"/>
              </div>
               <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label fw-bold">Amount</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder='0'/>
              </div>
            </form>

            <div className='bg-light rounded border-primary mb-3' style={{borderStyle: "dotted"}}>
                <div className='text-center p-3'>
                    <div className='text-center'>
                    <label for="actual-btn" class="bg-white p-2 fs-14 bg-transparent fw-bold" style={{cursor: 'pointer'}}>Drag & drop files<span className='color-1'> or Browse</span></label>
                      <input type="file" id="actual-btn" hidden />
                    </div>
                    <p className='fs-13'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                </div>

            </div>
            <button type="submit" class="btn btn-primary bg-1">Submit</button>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  )
}

export default CreditRepaymentModal