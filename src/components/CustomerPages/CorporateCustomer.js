import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../SideBar'
import DeleteModal from '../Modal/DeleteModal';
import ImportServiceModal from '../Modal/ImportServiceModal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {React, useEffect} from 'react'
import { getCorporatecustomer } from '../../state/actions/Customer.Action/corporatecustomer.action';

function CorporateCustomer() {
  const dispatch = useDispatch();
  const corporateCustomers = useSelector((state) => state.corporate?.allCorporatecustomers);
  console.log('corporatecustomers:', corporateCustomers);
  
  useEffect(() => {
    dispatch(getCorporatecustomer())
  }, [dispatch])
  return (
    <div>
        <SideBar />
        <main class=" pt-5">
         <div class="container-fluid pt-4">
            <p>Center / Corporate Frontline</p>
            <div className='d-flex'>
               <h6>Frontline Staff</h6> 
               <button class="btn btn-primary btn-1 fs-10 ms-auto" type="submit" data-bs-toggle="modal" data-bs-target="#importserviceModal">Import&nbsp;Customer</button>
            </div>
            <form class="row g-3">
  <div class="col-12 c0l-sm-12 col-md-6 col-lg-3">
    <label for="inputEmail4" class="form-label">Subsidiary</label>
    <select id="inputState" class="form-select">
      <option selected>Please Select</option>
      <option>Redstar Express</option>
      <option>Redstar logistics</option>
      <option>Redstar Freight</option>
    </select>
  </div>
  <div class="col-12 col-sm-12 col-md-6 col-lg-3">
    <label for="inputPassword4" class="form-label">Account Number</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12 c0l-sm-12 col-md-6 col-lg-3">
    <label for="inputAddress" class="form-label">First Name / Company</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-12 c0l-sm-12 col-md-6 col-lg-3">
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
  {corporateCustomers?.length > 0 && corporateCustomers?.map((c, index) => {
  <tbody className='fs-13'>
    <tr className=''key={index}>
      <td scope="row">RSELC02261</td>
      <td></td>
      <td>CHIDINMA TOM</td>
      <td>ZENITH BANK</td>
      <td>40101</td>
      <td>bsadiq@redstarplc.com</td>
      <td>08038105601</td>
      <td>23.95</td>
      <td id='customer'>
        <Link to='/corporate-customer-details' className='text-success fw-bold text-decoration-none'>View</Link>
      </td>
    </tr>
  </tbody>
  }
  )}
</table>
</div>
</main>



       {/* <!--View FrontLine Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width:"100%!important"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div className='container-fluid'>
            <div className='d-flex'>
            <h6 className='mb-4'>Customer Details</h6>
            <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" className='ms-auto' style={{cursor:"pointer"}} />
        {/* <button type="submit" class="btn btn-primary bg-danger  mx-3" data-bs-dismiss="modal">Delete</button> */}
            </div>
        <div className='card'>
            <div className='row p-3'>
                <div className='col-4'>
                    <img src='img/customerpic.jpg' className='img-fluid img-rounded rounded-circle' />
                </div>
                <div className='col-4'>
                    <p className='fs-12 text-muted'>Name</p>
                    <h6 className='fs-10'>Bilikisu Sadiq</h6>
                    <p className='fs-12 text-muted'>Account Number</p>
                    <h6 className='fs-10'>RSELC02285</h6>
                    <p className='fs-12 text-muted'>Phone</p>
                    <h6  className='fs-10'>08038105601</h6>
                </div>
                <div className='col-4'>
                    <p className='fs-12 text-muted'>Email</p>
                    <h6 className='fs-10'>bsadiq@redstarplc.com</h6>
                    <p className='fs-12 text-muted'>Company name</p>
                    <h6 className='fs-10'>ZENITH BANK</h6>
                    <p className='fs-12 text-muted'>Address</p>
                    <h6  className='fs-10'>Lekki,&nbsp;Lagos,&nbsp;Nigeria.</h6>
                </div>
                {/* <div className='col-4'></div> */}
            </div>
        </div>
        <div class="row my-3">
        <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10 text-muted">Total Points</h5>
                <p class="card-text fw-bold fs-13">23.95</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h5 class="card-title text-uppercase fs-10 text-muted">used Points</h5>
                <p class="card-text fs-13 fw-bold">0</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 h-100">
            <div class="card text-dark bg-white ">
              {/* <div class="card-header">Header</div> */}
              <div class="card-body">
                <h4 class="card-title text-uppercase fs-10 text-muted">Available&nbsp;Points</h4>
                <p class="card-text fs-13 fw-bold">23.95</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
       {/* <!--Import Service Modal --> */}
       <ImportServiceModal/>

{/* <!-- Delete Modal --> */}
<DeleteModal/>
    </div>
  )
}

export default CorporateCustomer;