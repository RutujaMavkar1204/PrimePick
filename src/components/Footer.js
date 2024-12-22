import React from "react";
import {NavLink} from 'react-router-dom'

export default function Footer(){
    return(
   <> 
   <div className="footertop">
      
<footer className="text-center text-lg-start bg-body-tertiary text-muted bg-dark text-light  ">
 
 
  <section className="bg-dark text-light">
  <section className="d-flex justify-content-center justify-content-lg-between bg-dark text-light p-4 ">
    
    <div className="me-5 d-none d-lg-block  ">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <NavLink to="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </NavLink>
      <NavLink to="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </NavLink>
      <NavLink to="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </NavLink>
      <NavLink to="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </NavLink>
      <NavLink to="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </NavLink>
      <NavLink to="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </NavLink>
    </div>
   
  </section>
    <div className="container text-center text-md-start  pt-5">

      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>PrimePick
          </h6>
          <p>
          Helping movie lovers find their next favorite film
          </p>
        </div>
        
      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/home" className={({isActive})=>` ${isActive? "flink": "nonflink"} "text-reset" `}>Home</NavLink>
          </p>
          <p>
            <NavLink to="/discover" className={({isActive})=>`${isActive? "flink": "nonflink"} "text-reset"`}>Discover</NavLink>
          </p>
          <p>
            <NavLink to="/new" className={({isActive})=>` ${isActive? "flink": "nonflink"} "text-reset" `}>New</NavLink>
          </p>
          <p>
            <NavLink to="/popular" className={({isActive})=>` ${isActive? "flink": "nonflink"} "text-reset" `}>Popular</NavLink>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Pune, MH 12, India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            primepick1204@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 91 123 456 77</p>
          <p><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
        </div>
      </div>
    
    </div>
  </section>
  <div className="text-center p-4 bg-dark text-light" >
    © 2021 Copyright:
    <NavLink className="text-reset fw-bold" to="https://mdbootstrap.com/">PrimePick.com</NavLink>
  </div>
 
</footer>
</div>
</>
    )
}



