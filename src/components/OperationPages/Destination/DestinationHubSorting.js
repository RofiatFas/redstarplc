import React from 'react';
import SideBar from '../../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import StationModal from '../../Modal/StationModal';
import { Link } from 'react-router-dom';

function DestinationHubSorting() {
  return (
    <div>
    <SideBar/>
    <main className='pt-5'>
        <div className='container-fluid pt-4' id='destination'>
        <p>Operations / Destination hub / Sorting</p>
           <h5>Destination Hub</h5>
           <h6 className=''>Sorting</h6>
           <div className='d-flex mb-3'>
            <button class="btn btn-primary bg-1 assignbtn fs-12 px-3 mx-2 ms-auto" type="submit" data-bs-toggle="modal" data-bs-target="#stationModal">Assign to station</button> 
            <div id='destination'>
            <Link to='/destination-hub-sorting-apapa' class="btn btn-primary bg-1 btn-1 fs-12 px-3 mx-2 text-decoration-none">Next</Link> 
            </div>
           </div>
        </div>
        <div className='container-fluid table-responsive'>
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
  <th scope="col">Original&nbsp;Weight</th>
  <th scope="col">Confirmed&nbsp;Weight</th>
  <th scope="col">Pieces</th>
  <th scope="col">Seal No</th>
  <th scope="col">Status</th>
</tr>
</thead>
<tbody className='fs-11'>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
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
  <td>15kg</td>
  <td>2</td>
  <td>2546</td>
    <td className='text-success fw-bold'>Confirmed&nbsp;<FontAwesomeIcon icon={faCheck}/></td>
</tr>
</tbody>
</table>
        </div>
    </main>
    <StationModal/>
   </div>
  )
}

export default DestinationHubSorting