import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Constant from '../../constant/constant';

class About extends React.Component {

    render() {
        return (
            <div>
                <MDBCol>
                    <MDBCard style={{ width: "22rem",height: '701px' }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
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

export default About;
