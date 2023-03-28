import React from 'react';
import SideBar from '../../SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CreateManifestModal from '../../Modal/CreateManifestModal';

function DestinationHubSortingCele() {
  return (
    <div>
    <div>
<SideBar/>
<main className='pt-5'>
 <div className='container-fluid pt-4' id='destination'>
 <p>Operations / Destination hub / Sorting / Cele</p>
    <h5>Destination Hub</h5>
    <h6 className=''>Sorting</h6>
    <div class="d-flex justify-content-between fs-12 mb-3">
       <div class="p-2 bd-highlight" id='destination'>
        <Link to='/destination-hub-sorting-apapa' className='text-decoration-none text-muted'>Apapa</Link>
       </div>
       <div class="p-2 bd-highlight" id='link destination'>
       <Link to='/destination-hub-sorting-cele' class="btn btn-primary bg-1 btn-1 fs-12 px-3 mx-2 text-decoration-none">Cele</Link> 
       </div>
       <div class="p-2 bd-highlight" id='destination'>
        <Link to='/destination-hub-sorting-adeola-odeku' className='text-decoration-none text-muted'>Adeola Odeku</Link>
       </div>
       <div class="p-2 bd-highlight" id='destination'>
        <Link to='/destination-hub-sorting-awolowo' className='text-decoration-none text-muted'>Awolowo</Link>
       </div>
       <div class="p-2 bd-highlight text-muted">Shomolu</div>
       <div class="p-2 bd-highlight text-muted">Lekki</div>
       <div class="p-2 bd-highlight text-muted">Ikeja</div>
       <div class="p-2 bd-highlight text-muted">Ajah</div>
       <div class="p-2 bd-highlight">
       <button class="btn btn-primary assignbtn bg-1 fs-12 px-3 mx-2 " type="button" data-bs-toggle='modal' data-bs-target='#createmanifestModal'>Create Manifest</button> 
       </div>
    </div>
 </div>
 <div className='container-fluid table-responsive'>
<table class="table bg-white">
<thead>
<tr className='fs-13'>
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
<tbody className='fs-13'>
<tr className=''>
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
<CreateManifestModal/>
</div>
    </div>
  )
}

export default DestinationHubSortingCele