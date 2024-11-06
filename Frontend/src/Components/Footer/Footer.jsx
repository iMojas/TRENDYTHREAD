// import React from 'react'

// const Footer = () => {
//     return (
//         <>
//             <div className="bg-primary d-flex justify-content-between fw-bold text-white p-3 mt-5" >
//                 <div>
//                     &copy;
//                     <span> {new Date().getFullYear()}</span>
//                     <span> Ojas Kumar</span>

//                 </div>
//                 <div>

//                     <a href="http://www.nirajkumar.in" target={'_blank'} className='list-group-item list-group-item-action'>www.ojaskumar.in</a>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Footer;

// import React from 'react';

// const Footer = () => <footer className="page-footer font-small blue pt-4">
//     <div className="container-fluid text-center text-md-left">
//         <div className="row">
//             <div className="col-md-6 mt-md-0 mt-3">
//                 <h5 className="navbar-brand fw-bold text-secondary">TrendyThreads</h5>
//                 <p>HIntroducing TrendyThreads – where fashion meets flair! Step into a world of chic styles and contemporary designs that elevate your wardrobe to the next level.
//                      At TrendyThreads, we believe in making every outfit a statement</p>
//             </div>

//             <hr className="clearfix w-100 d-md-none pb-0"/>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>

//             <div className="col-md-3 mb-md-0 mb-3">
//                 <h5 className="text-uppercase">Links</h5>
//                 <ul className="list-unstyled">
//                     <li><a href="#!">Link 1</a></li>
//                     <li><a href="#!">Link 2</a></li>
//                     <li><a href="#!">Link 3</a></li>
//                     <li><a href="#!">Link 4</a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>

//     <div className="footer-copyright text-center py-3">© 2024 Copyright:
//         <a href="https://mdbootstrap.com/"> Ojas.com</a>
//     </div>

// </footer>

// export default Footer

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                TrendyThreads
              </h6>
              <p>
              Introducing TrendyThreads – where fashion meets flair! 
              Step into a world of chic styles and contemporary designs that elevate your wardrobe to the next level. At TrendyThreads, we believe in making every outfit a statement. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Mens
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Womens
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kids
                </a>
              </p>
              <p>
                {/* <a href='#!' className='text-reset'>
                  Laravel
                </a> */}
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                  Motijhil, Muzaffarpur
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                TrendyThreads@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 000 111 01
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 111 000 10
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        TrendyThreads.com
        </a>
      </div>
    </MDBFooter>
  );
}