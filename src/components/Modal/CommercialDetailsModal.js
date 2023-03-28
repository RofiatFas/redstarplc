import React from 'react'

function CommercialDetailsModal() {
  return (
    <div>
        <div class="modal fade" id="commercialdetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-light">
        <h5 class="modal-title" id="examModalLabel">Commercial Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='row mb-3'>
            <div className='col-2'>Commodity</div>
            <div className='col-2'>Description</div>
            <div className='col-2'>Quantity</div>
            <div className='col-2'>Weight</div>
            <div className='col-2'>Unit of Value</div>
            <div className='col-2'></div>
        </div>
        <div className='row bg-light'>
            <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/></div>
            <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/></div>
            <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='0'/></div>
            <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='0'/></div>
            <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='0'/></div>
            <div className='col-2'><img src='img/addicon.png'/></div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CommercialDetailsModal