import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

function ImportServiceModal() {
  return (
    <div>
        <div class="modal fade" id="importserviceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"100%!important"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div className='container-fluid'>
            <div className='d-flex'>
            <h6 className='mb-4'>Import Service Price</h6>
            <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" className='ms-auto' style={{cursor:"pointer"}} />
            </div>
            <form className='row mb-3'>
              <div class="col-12">
               <label for="inputEmail4" class="form-label">Subsidiary</label>
               <select id="inputState" class="form-select">
                 <option selected>Please Select</option>
                 <option>Redstar Express</option>
                 <option>Redstar logistics</option>
                 <option>Redstar Freight</option>
                </select>
               </div>
            </form>

            <div className='bg-light rounded border-primary' style={{borderStyle: "dotted"}}>
                <div className='text-center p-3'>
                    <img src='img/uploadicon.png' className='img-fluid'/>
                    <div className='text-center'>
                    <label for="actual-btn" class="bg-white p-2 fs-14 bg-transparent fw-bold" style={{cursor: 'pointer'}}>Drag & drop files<span className='color-1'> or Browse</span></label>
                      <input type="file" id="actual-btn" hidden />
                    </div>
                    <p className='fs-13'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                </div>

            </div>
            <p className='text-center my-2 fs-14'>Uploading - 3/3 files</p>
            <div className=''>
            <div className='d-flex rounded border border-dark '>
                <p className='my-2'>your-file-here.PDF</p>
                <FontAwesomeIcon icon={faXmarkCircle} className="ms-auto my-3" />
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

export default ImportServiceModal