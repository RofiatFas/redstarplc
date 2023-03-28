import React from 'react';
import BarChart from './Charts/BarChart';
import DonutChart from './Charts/DonutChart';
import SideBar from './SideBar';

// import profilepic from './profilepic.png'

function Home() {
  return (
    <div className='Home'>
      <SideBar />

    <main class=" pt-5">
      <div class="container-fluid pt-4">
        {/* <div class="row">
          <div class="col-md-12 fw-bold fs-3">Dashboard</div>
        </div> */}

        <div class="row">
        <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-12">Customers</h5>
                <p class="card-text fs-3 fw-bold">2,000 <span className='color-2 fw-bold fs-12'>+ 36%</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-12">Available Discounts</h5>
                <p class="card-text fs-3 fw-bold">125 <span className='color-2 fw-bold fs-12'>+ 36%</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-12">Total Sale Orders</h5>
                <p class="card-text fs-3 fw-bold">32 <span className='text-danger fw-bold fs-12'>+ 14%</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header fs-12 fw-bold">
              Number of Registered Customers by Express Code
              </div>
              <div class="card-body">
              <form action="" className='mb-3'>
                <div className='row'>
                  <div className='col rounded border border-dark p-2 w-10'>
                  <div className='rounded'>
                  <label for="">From</label>
                  <input type="date" id="" name="" className='border-0 mx-2'/>
                  {/* <label for="">to</label> */}
                  {/* <input type="date" id="" name="" className='border-0 mx-2'/> */}
                </div>
                  </div>
                  <div className='col'>
                  <button type="submit" class="btn btn-primary bg-1 fs-12">Search</button>
                  <button type="submit" class="btn btn-primary bg-1 mx-2 fs-12">Export</button>
                  </div>
                </div>
               </form>
               <hr />
                <BarChart  />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header fs-12 fw-bold">
              Number of Transactions by Express Code
              </div>
              <div class="card-body">
              <form action="" className='mb-3'>
                <div className='row'>
                  <div className='col rounded border border-dark p-2 w-10'>
                  <div className='rounded'>
                  <label for="">From</label>
                  <input type="date" id="" name="" className='border-0 mx-2'/>
                  {/* <label for="">to</label> */}
                  {/* <input type="date" id="" name="" className='border-0 mx-2'/> */}
                </div>
                  </div>
                  <div className='col'>
                  <button type="submit" class="btn btn-primary bg-1 fs-12">Search</button>
                  <button type="submit" class="btn btn-primary bg-1 mx-2 fs-12">Export</button>
                  </div>
                </div>
               </form>
               <hr />
                <BarChart className='' />
              </div>
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header fs-12 fw-bold">
              Number of Transaction by Sector
              </div>
              <div class="card-body">
              <form action="" className='mb-3'>
                <div className='row'>
                  <div className='col rounded border border-dark p-2 w-10'>
                  <div className='rounded'>
                  <label for="">From</label>
                  <input type="date" id="" name="" className='border-0 mx-2'/>
                  {/* <label for="">to</label> */}
                  {/* <input type="date" id="" name="" className='border-0 mx-2'/> */}
                </div>
                  </div>
                  <div className='col'>
                  <button type="submit" class="btn btn-primary bg-1 fs-12">Search</button>
                  <button type="submit" class="btn btn-primary bg-1 mx-2 fs-12">Export</button>
                  </div>
                </div>
               </form>
               <hr />
                <BarChart  />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header fs-12 fw-bold">
              Number of Customers By Birth Month
              </div>
              <div class="card-body">
              <form action="" className='mb-3'>
                <div className='row'>
                  {/* <div className='col rounded border border-dark p-2 w-10'>
                  <div className='rounded'>
                  <label for="">From</label>
                  <input type="date" id="" name="" className='border-0 mx-2'/>
                  <label for="">to</label>
                  <input type="date" id="" name="" className='border-0 mx-2'/>
                </div>
                  </div> */}
                  <div className='col '>
                  {/* <button type="submit" class="btn btn-primary bg-1 fs-12">Search</button> */}
                  <button type="submit" class="btn btn-primary bg-1 mx-2 fs-12 me-auto">Export</button>
                  </div>
                </div>
               </form>
               <hr />
                <DonutChart/>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </main>
    </div>
  )
}

export default Home