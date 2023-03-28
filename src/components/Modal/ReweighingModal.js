import React from 'react'

function ReweighingModal() {
  return (
    <div>
<div class="modal fade" id="reweighingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h5>Reweighing</h5>
        <p>Please enter the new weight of the item</p>
        <form>
        <div class="mb-3">
          {/* <label for="exampleInputEmail1" class="form-label fw-bold fs-13"></label> */}
          <input type="text" class="form-control fs-13" placeholder='Type weight value here in kg' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
        </form>
        <div>
  <button type="submit" class="btn btn-primary bg-transparent border-dark text-dark fs-12 verified-btn" data-bs-dismiss="modal">Cancel</button>
  <button type="submit" class="btn btn-primary bg-1 fs-12 mx-3 verified-btn" data-bs-dismiss="modal">Submit</button>
  </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ReweighingModal