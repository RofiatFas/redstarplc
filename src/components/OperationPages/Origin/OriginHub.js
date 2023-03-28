import React from 'react'
import SideBar from '../../SideBar';
import { Link } from 'react-router-dom';

function OriginHub() {
  return (
    <div>
        <SideBar/>
        <main className='pt-5'>
            <div className='container-fluid pt-4' id='origin'>
            <p >Operations / Origin hub / Arrival</p>
               <h6 className=''>Origin Hub</h6>
               <form>
               <div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <label for="inputPassword4" class="form-label">Pack bag number</label>
<div className='d-flex'>
<input type="password" class="form-control" id="inputPassword4" placeholder='Enter bag number'/>
<div  id='origin'>
<Link to='/origin-hub-arrival2' class="btn btn-primary bg-1 fs-12 px-3 mx-2" type="submit">Search</Link> 
</div>
</div>
  </div>
               </form>
            </div>
        </main>
    </div>
  )
}

export default OriginHub