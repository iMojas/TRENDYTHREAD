// import React from 'react'

// const About = () => {
//     return (
//         <div style={{ minHeight: "80vh" }}>About</div>
//     )
// }

// export default About

import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function ProfileStatistics() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://media.licdn.com/dms/image/v2/D5603AQHHyFfBAVRpGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700328832069?e=1730332800&v=beta&t=U-wJO1wCC41ux7Wpd0oCg660FfOiE6dTvS4FUTd0_1w"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Ojas</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Owner <span className="mx-2">|</span> <a href="#!">OjasKr.com</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">$100+</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">revenue</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">100000+</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Customer</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">500+</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Employee</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}