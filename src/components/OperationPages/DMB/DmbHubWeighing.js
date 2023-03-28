import React from 'react';
import CourierModal from '../../Modal/CourierModal';
import SideBar from '../../SideBar';

function DmbHubWeighing() {
  return (
    <div>
    <SideBar/>
    <main className='pt-5'>
        <div className='container-fluid pt-4' id='dmb'>
        <p >Operations / DBM Hub / Weighing</p>
           <h6>DBM Hub</h6>
           <h6>RSL Manifests</h6>
           <form className='mb-3'>
           <div class="col-12 col-sm-12 col-md-6 col-lg-4">
<label for="inputPassword4" class="form-label">Manifest Tag  number</label>
<div className='d-flex'>
<input type="password" class="form-control" id="inputPassword4" placeholder='Enter bag number'/>
<button class="btn btn-primary bg-1 fs-12 px-3 mx-2" type="submit">Search</button> 
</div>
</div>
           </form>
        </div>
        <div className='container-fluid table-responsive'>
     <table class="table bg-white">
<thead>
<tr className='fs-13'>
  <th scope="col">Bag Number</th>
  <th scope="col">Seal Number</th>
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
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>
<tr className=''>
  <td scope="row">#00245631</td>
  <td>2546</td>
  <td>ABV Hub</td>
  <td>26 Shipments</td>
  <td>
    <div className='d-flex'>
        <span>120kg</span>
        <img src='img/editicon.png' className='img-fluid' />
    </div>
  </td>
  <td>Package</td>
  <td>08038105601</td>
  <td className='text-primary fw-bold' data-bs-toggle='modal' data-bs-target='#courierModal' style={{cursor:'pointer'}}>Assign to courier</td>
</tr>

</tbody>
</table>
     </div>
    </main>
    <CourierModal/>
</div>
  )
}

export default DmbHubWeighing