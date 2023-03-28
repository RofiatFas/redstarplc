import React from 'react';
import CreateDeliveryBagModal from '../../Modal/CreateDeliveryBagModal';
import CreatepodModal from '../../Modal/CreatepodModal';
import SideBar from '../../SideBar';
import { Link } from 'react-router-dom';

function DeliveryStationDeliverPickup() {
  return (    <div>
    <SideBar/>
    <main>
        <div className='container-fluid mt-3'>
        <p>Operations / Delivery station / Delivery / Pickup</p>
           <h5>Delivery Station</h5>
           <h6 className='mb-2'>Delivery Shipment</h6>
           <div className='d-flex my-3'>
               <div id='delivery'>
               <Link to='/delivery-station-onforwarding' className='fs-12 mx-2 p-2 text-muted text-decoration-none '>Onforwarding</Link>
               </div>
               <div id='delivery'>
            <Link to='/delivery-station-pickup' class="btn btn-primary btn-1 fs-12 text-decoration-none" type="button">Pickup</Link>
            </div>
            </div>
        </div>
        <div className='container-fluid table-responsive '>
     <table class="table bg-white">
<thead>
<tr className='fs-13'>
  <th scope="col">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </th>
  <th scope="col">Waybill&nbsp;No</th>
  <th scope="col">Date</th>
  <th scope="col">Origin&nbsp;City</th>
  <th scope="col">Destination&nbsp;City</th>
  <th scope="col">Weight</th>
  <th scope="col">Pieces</th>
  <th scope="col">Seal No</th>
  <th scope="col">Status</th>
  <th scope="col">Status</th>
</tr>
</thead>
<tbody className='fs-13'>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>
<tr className=''>
  <td scope="row">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
</div>
  </td>
  <td scope="row">005648752DB</td>
  <td>Feb&nbsp;04th,2023</td>
  <td>Lagos</td>
  <td>Abuja</td>
  <td>10kg</td>
  <td>2</td>
  <td>2546</td>
  <td className=' text-success' ><div className=''><span type="button" class="fs-13 verified-btn bg-2 text-success border-0 rounded-pill p-1"><span className='dot mx-2'></span>Verified</span>
    </div></td>
    <td className='text-primary fw-bold'data-bs-toggle="modal" data-bs-target="#createpodModal" style={{cursor:"pointer"}}>Create POD</td>
</tr>

</tbody>
</table>
        </div>
    </main>
    <CreateDeliveryBagModal/>
    <CreatepodModal/>
   </div>
  )
}

export default DeliveryStationDeliverPickup