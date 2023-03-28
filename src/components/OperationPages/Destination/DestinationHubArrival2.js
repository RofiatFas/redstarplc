import React from 'react';
import SideBar from '../../SideBar';
import { Link } from 'react-router-dom';


function DestinationHubArrival2() {
  return (
    <div>
    <SideBar/>
    <main className='pt-5'>
        <div className='container-fluid pt-4' id='destination'>
        <p >Operations / Destination hub / Arrival</p>
           <h6 className=''>Destination Hub</h6>
           <form>
           <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
<label for="inputPassword4" class="form-label">Manifest number</label>
<div className='d-flex'>
<input type="password" class="form-control" id="inputPassword4" placeholder='Enter manifest number'/>
<div  id='destination'>
<Link to='/destination-hub-arrival2' class="btn btn-primary bg-1 fs-12 px-3 mx-2" type="submit">Search</Link> 
</div>
</div>
</div>
           </form>
        </div>
        <div className='container-fluid table-responsive'>
         <table class="table bg-white">
  <thead>
    <tr className='fs-13'>
      <th scope="col">Bag Number</th>
      <th scope="col">Driver Name</th>
      <th scope="col">Destination</th>
      <th scope="col">Company Name</th>
      <th scope="col">Number of Items</th>
      <th scope="col">Total weight</th>
      <th scope="col">Content</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='fs-13'>
    <tr className=''>
      <td scope="row">#00245631</td>
      <td>Biola Bakare</td>
      <td>ABV Hub</td>
      <td>26 Shipments</td>
      <td>120kg</td>
      <td>Package</td>
      <td>08038105601</td>
      <td className='fw-bold' id='origin'>
        <Link to='/destination-hub-view' className='text-decoration-none text-success'>View</Link>
      </td>
    </tr>


   
  </tbody>
</table>
         </div>
    </main>
</div>
  )
}

export default DestinationHubArrival2