import React from 'react'
import SingleBarChart from '../Charts/SingleBarChart'
import SideBar from '../SideBar'

function TransactionReport() {
  return (
    <div>
        <SideBar/>
        <main className='pt-5'>
            <div className='container-fluid pt-4'>
               <p>Report / RSM Transaction Report</p>
               <h6>RSM Transaction Report</h6>
               <form class="row g-3 mb-3">
  <div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <label for="inputEmail4" class="form-label">Subsidiary</label>
    <select id="inputState" class="form-select">
      <option selected>Please Select</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <label for="inputPassword4" class="form-label">2022-8-14</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder='2022-8-14'/>
  </div>
  {/* <div class="ol-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress" class="form-label">End Date</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="2023-01-14"/>
  </div> */}
  <div class="ol-12 col-sm-12 col-md-6 col-lg-4">
    <label for="inputAddress2" class="form-label">End Date</label>
    <div className='d-flex'>
    <input type="text" class="form-control" id="inputAddress2" placeholder="2023-01-14"/>
    <button type="submit" class="btn btn-primary bg-1 fs-12 mx-3" data-bs-dismiss="modal">Search</button>
    </div>
  </div>
           </form>

        <div class="row ">
        <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10">Revenue</h5>
                <p class="card-text fs-5 fw-bold">26568 <span className='color-2 fw-bold fs-12'>+ 36%</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10">Total Crating</h5>
                <p class="card-text fs-5 fw-bold">125 <span className='color-2 fw-bold fs-12'>+ 36%</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10">Amount By POS</h5>
                <p class="card-text fs-6 fw-bold">32 <span className='text-danger fw-bold fs-12'>+ 14%</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10">Amounts By Cash</h5>
                <p class="card-text fs-5 fw-bold">2,000 <span className='color-2 fw-bold fs-12'>+ 36%</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10">Amount By Transfer</h5>
                <p class="card-text fs-5 fw-bold">6568 <span className='color-2 fw-bold fs-12'>+ 36%</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10">Total Sale Orders</h5>
                <p class="card-text fs-5 fw-bold">10000 <span className='text-danger fw-bold fs-12'>+ 14%</span></p>
              </div>
            </div>
          </div>
        </div>
           
        <div class="row my-3">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header fs-12 fw-bold">
              Number of Transactions by Express Code
              </div>
              <div class="card-body">
               <SingleBarChart />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header fs-12 fw-bold">
              Number of Transactions by Express Code
              </div>
              <div class="card-body">
               <SingleBarChart />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header fs-12 fw-bold">
              Number of Transactions by Express Code
              </div>
              <div class="card-body">
               <SingleBarChart />
              </div>
            </div>
          </div>
        </div>
            </div>
        </main>
    </div>
  )
}

export default TransactionReport