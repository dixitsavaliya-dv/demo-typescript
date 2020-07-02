import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Constant from '../../constant/constant';

class Services extends React.Component {

    render() {
        return (
            <div>
                <MDBCol>
                    <MDBCard style={{ width: "22rem", height: '701px' }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>{Constant.demo}</MDBCardTitle>
                            <MDBCardText>
                                {Constant.content}
                            </MDBCardText>
                            <MDBBtn href="#">{Constant.button}</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>
        );
    }
}

export default Services;
