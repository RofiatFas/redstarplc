import React from 'react';
import SideBar from '../../SideBar';
import { Link } from 'react-router-dom';

function DeliveryStationArrival() {
  return (
    <div>
        <SideBar/>
        <main className='pt-5'>
            <div className='container-fluid pt-4' id='delivery'>
            <p>Operations / Delivery station / Arrival</p>
               <h6>Delivery Station</h6>

               <form>
               <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <label for="inputPassword4" class="form-label">Manifest number</label>
<div className='d-flex'>
<input type="password" class="form-control" id="inputPassword4" placeholder='Manifest number'/>
    <div id='delivery'>
    <Link to='/delivery-station-arrival2' class="btn btn-primary bg-1 fs-12 px-3 mx-2">Search</Link>
      </div> 
</div>
  </div>
               </form>
            </div>
        </main>
    </div>
  )
}

export default DeliveryStationArrival