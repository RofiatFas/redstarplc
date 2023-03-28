import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <nav className='bg-white fixed top color-1'>
       <p className='mx-4'>RSE Ship Manager</p>
      </nav>
    <div className='Login'>
        <div className='container bg-white w-50 h-60 rounded'>
            <div className='text-center my-3'>
            <h1 className='fs-3'>Login to Admin Portal</h1>
            <p className='fs-6'>Please login with your information</p>
            </div>
            <div>
             <form className='mx-4'>
               <div class="mb-3">
                 <label for="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               </div>
               <div class="mb-3">
                 <label for="exampleInputPassword1" className="form-label fw-bold">Password <span className='fw-light pwd'>Forgot Password?</span></label>
                 <input type="password" className="form-control" id="exampleInputPassword1"/>
               </div>
               <div class="mb-3 form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                 <label className="form-check-label" for="exampleCheck1">Remember Me</label>
               </div>
               <div class="d-grid gap-2 mb-3">
                 <Link to='/home' className="btn btn-primary bg-1" type="submit">Sign In</Link>
                </div>
                <p className='text-center'>Don’t have an account? <a href='' className='stretched-link'>Sign Up now</a> </p>
             </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login