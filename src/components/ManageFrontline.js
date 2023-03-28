import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSearch, } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import SideBar from './SideBar'
import ViewFrontlineModal from './Modal/ViewFrontlineModal';
import AddFrontlineModal from './Modal/AddFrontlineModal';
import EditModal from './Modal/EditModal';
import DeleteModal from './Modal/DeleteModal';

function ManageFrontline() {
  return (
    <div>
        <SideBar />
        <main class=" pt-3">
         <div class="container-fluid">
            <p>Center / Manage Frontline</p>
            <div className='d-flex'>
               <h6>Frontline Staff</h6> 
               <button class="btn btn-primary btn-1 fs-12 ms-auto" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal2">Add Frontline</button>
            </div>
            <p className='fs-12'>Subsidiary</p>
            <div className=''>
                <div className='d-flex'>
                  <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                  <select class="form-select selectbtn-1 fs-12" id="inlineFormSelectPref">
                    <option selected>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                   </select>
                   <div className='mx-3'>
                   <button class="btn btn-primary btn-1 fs-12 px-3" type="submit">Search</button> 
                   </div>
                </div>
            </div>
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
         <table class="table">
  <thead>
    <tr className='fs-13'>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Type</th>
      <th scope="col">Centre Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody className='fs-13'>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
    <tr className=''>
      <td scope="row">Bilikisu Sadiq</td>
      <td>bsadiq@redstarplc.com</td>
      <td>09062739247</td>
      <td>Retail</td>
      <td>HEAD OFFICE</td>
      <td className='fw-bold' style={{cursor:"pointer"}}><span className='text-success' data-bs-toggle="modal" data-bs-target="#exampleModal1">View</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal3">Edit</span>
      <span><div class="vr mx-2"></div></span>
      <span className='text-danger mx-2'data-bs-toggle="modal" data-bs-target="#exampleModal4">Delete</span></td>
    </tr>
   
  </tbody>
</table>
         </div>
       </main>

       {/* <!--View FrontLine Modal --> */}
      <ViewFrontlineModal/> 
       {/* <!--Add FrontLine Modal --> */}
      <AddFrontlineModal/>
       {/* <!--Edit FrontLine Modal --> */}
      <EditModal/>
     {/* <!-- Delete Modal --> */}
     <DeleteModal/>

    </div>
  )
}

export default ManageFrontline