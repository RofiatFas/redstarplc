import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


function DeleteModal() {
  return (
    <div>
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <FontAwesomeIcon icon={faTrashCan} className='text-danger fs-1' />
        <h3 className='my-2'>Delete?</h3>
        <p className='text-muted fs-5'>Are you sure you want to delete this?</p>
        <div className=''>
  <button type="submit" class="btn btn-primary bg-transparent border-dark text-dark" data-bs-dismiss="modal">Cancel</button>
  <button type="submit" class="btn btn-primary bg-danger  mx-3" data-bs-dismiss="modal">Delete</button>
  </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeleteModal