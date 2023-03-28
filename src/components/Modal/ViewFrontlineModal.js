import React from 'react'

function ViewFrontlineModal() {
  return (
    <div>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      {/* <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div class="modal-body">
        <h3 className='fs-5'>View FrontLine</h3>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold fs-13">First Name</label>
    <input type="text" class="form-control fs-13" placeholder='Bilikisu' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold fs-13">Last Name</label>
    <input type="text" class="form-control fs-13" placeholder='Sodiq' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold fs-13">Email address</label>
    <input type="email" class="form-control fs-13" placeholder='bsadiq@redstarplc.com' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold fs-13">Phone Number</label>
    <input type="text" class="form-control fs-13" placeholder='09062739247' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
      <label for="select" class="form-label fw-bold fs-13">Express Centre</label>
      <select id="select" class="form-select bg-light fs-13">
        <option>HEAD OFFICE</option>
      </select>
  </div>
  <div class="mb-3">
      <label for="select" class="form-label fw-bold fs-13">Account Type</label>
      <select id="select" class="form-select bg-light fs-13">
        <option>Retail</option>
      </select>
  </div>
  <button type="submit" class="btn btn-primary bg-1 fs-13" data-bs-dismiss="modal">Close</button>
</form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ViewFrontlineModal