import React from 'react'

function SplitPaymentDetailsModal() {
  return (
    <div>
    <div class="modal fade" id="splitpaymentdetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
<div class="modal-content">
  <div class="modal-header bg-light">
    <h5 class="modal-title" id="examModalLabel">Commercial Details</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <div className='row mb-3'>
        <div className='col-3'>Payment Method</div>
        <div className='col-2'>Bank Account</div>
        {/* <div className='col-2'></div> */}
        <div className='col-3'>Payment Reference</div>
        <div className='col-2'>Amount</div>
        <div className='col-2'></div>
    </div>
    <div className='row bg-light'>
        <div className='col-2'>
        <select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>POS</option>
  <option>Cash</option>
  <option>Bank transfer</option>
  <option>Split</option>
</select>
        </div>
        <div className='col-2'>
        <select id="inputState" class="form-select fs-13">
  <option selected>Please Select</option>
  <option>UBA</option>
  <option>GTB</option>
  <option>Jaiz Bank</option>
  <option>First Bank</option>
</select>
        </div>
        <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/></div>
        <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='0'/></div>
        <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='0'/></div>
        {/* <div className='col-2'><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='0'/></div> */}
        <div className='col-2'><img src='img/addicon.png'/></div>
    </div>
  </div>
</div>
</div>
</div>

</div>
  )
}

export default SplitPaymentDetailsModal