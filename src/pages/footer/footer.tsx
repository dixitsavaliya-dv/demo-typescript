import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Constant from '../../constant/constant';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">{Constant.footer}</h5>
                        <p>
                            {Constant.text}
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">{Constant.links}</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">{Constant.link1}</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">{Constant.link2}</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">{Constant.link3}</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;