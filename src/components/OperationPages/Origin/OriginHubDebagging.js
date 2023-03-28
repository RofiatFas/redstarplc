import React from 'react';
import SideBar from '../../SideBar';
import { Link } from 'react-router-dom';

function OriginHubDebagging() {
  return (
    <div>
    <SideBar/>
    <main className='pt-5'>
        <div className='container-fluid pt-4' id='origin'>
        <p>Operations / Origin hub / Debagging</p>
           <h5>Origin Hub</h5>
           <h6 className=''>Debagging</h6>
        </div>
        <div className='container-fluid table-responsive'>
     <table class="table bg-white">
<thead>
<tr className='fs-13'>
  <th scope="col">Bag Number</th>
  <th scope="col">Driver Name</th>
  <th scope="col">Destination</th>
  <th scope="col">Original Weight</th>
  <th scope="col">Confirmed Weight</th>
  <th scope="col">Number of Items</th>
  <th scope="col">Status</th>
  <th scope="col">Action</th>
</tr>
</thead>
<tbody className='fs-13'>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Completed</span>
    </div></td>
    <td className='fw-bold' id='origin'>
      <Link to='/origin-hub-debagging-destination' className='text-decoration-none text-success'>View</Link>
    </td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Completed</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-3 text-warning border-0 rounded-pill p-1"><span className='dot-2 mx-2'></span>Pending</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-3 text-warning border-0 rounded-pill p-1"><span className='dot-2 mx-2'></span>Pending</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Completed</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Completed</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-3 text-warning border-0 rounded-pill p-1"><span className='dot-2 mx-2'></span>Pending</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Completed</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Completed</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>Biola Bakare</td>
  <td>Lagos Hub</td>
  <td>280kg</td>
  <td>120kg</td>
  <td>26 Shipments</td>
  <td className=' text-success'><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Completed</span>
    </div></td>
    <td className='text-success fw-bold'>View</td>
</tr>


</tbody>
</table>
     </div>
    </main>
   </div>
  )
}

export default OriginHubDebagging