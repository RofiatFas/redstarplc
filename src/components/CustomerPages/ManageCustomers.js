import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import SideBar from '../SideBar'
import DeleteModal from '../Modal/DeleteModal';
import ViewCustomerDetailsModal from '../Modal/ViewCustomerDetailsModal';

function ManageCustomers() {
  return (
    <div>
        <SideBar />
        <main class=" pt-5">
         <div class="container-fluid pt-4">
            <p>Center / Manage Frontline</p>
               <h6>Manage Customers</h6>
            <form class="row g-3">
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputEmail4" class="form-label">Subsidiary</label>
    <select id="inputState" class="form-select">
      <option selected>Please Select</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputPassword4" class="form-label">Account Number</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="ol-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress" class="form-label">First Name / Company</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="ol-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <div className='d-flex'>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
    <button type="submit" class="btn btn-primary bg-1 fs-12 mx-3" data-bs-dismiss="modal">Search</button>
    </div>
  </div>
           </form>
         </div>
         
         <div className='container-fluid table-responsive'>
          <div className='my-3 bg-white search-bg d-flex'>
          {/* <form action="" className='mx-3 rounded border border-dark search-btn'> */}
          <form action="" className='mx-3  search-btn'>
            <input type="text" placeholder="Search for package" name="search" className='fs-12 border-0 p-2'/>
            <button type="submit" className='border-0 bg-transparent fs-12 align-items-center'><FontAwesomeIcon icon={faSearch} /></button>
           </form>
           <div className='ms-auto d-flex align-item-center'>
           <p className=' fs-12 my-3'>Showing 1 - 20 of 63,000</p>
           <FontAwesomeIcon icon={faChevronLeft} className='my-3 mx-2 fs-12 ' />
           </div>
        </div>
         <table class="table bg-white">
  <thead>
    <tr className='fs-13'>
      <th scope="col">Account Number</th>
      <th scope="col">Title</th>
      <th scope="col">Full Name</th>
      <th scope="col">Company Name</th>
      <th scope="col">Code Centre</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className='fs-13'>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">RSELC02261</td>
      <td>Mrs</td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
   
  </tbody>
</table>
         </div>
       </main>

       {/* <!--ViewCustomersDetail FrontLine Modal --> */}
       <ViewCustomerDetailsModal/>

       {/* <!-- Delete Modal --> */}
       <DeleteModal/>
    </div>
  )
}

export default ManageCustomers;