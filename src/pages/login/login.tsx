import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Constant from '../../constant/constant';
// import API from '../../service/home.service';
// import Swal from 'sweetalert2';

class Login  extends React.Component {
    state = {
     
    }

    constructor(props: any) {
        super(props);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
     
    }

    handleChangeEvent(event: any) {
        event.preventDefault();
        const state: any = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    // async componentDidMount() {
    //     console.log("id", this.state.zone.ids);
    //     var getZone = await API.getZoneById(this.state.zone.ids);
    //     console.log("getZone", getZone);
    //     this.setState({
    //         zone: {
    //             code: getZone.data.code,
    //             name: getZone.data.name
    //         }
    //     })
    // }

    // async editData() {
    //     if (this.state.zone.code && this.state.zone.name) {
    //         var zoneData = await API.updateZone(this.state.zone);
    //         Swal.fire(
    //             "Sccess!",
    //             "State has been updated sucessfully!",
    //             "success"
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form>
                                <p className="h4 text-center mb-4">{Constant.addZone}</p>
                                <label className="grey-text">
                                    {Constant.code}
                                </label>
                                <input
                                    type="text"
                                    name="code"
                                    onChange={this.handleChangeEvent}
                                    className="form-control"
                                />
                                <br />
                                <label className="grey-text">
                                    {Constant.name}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChangeEvent}
                                    className="form-control"
                                />
                                <br />
                                <div className="text-center mt-4">
                                    <MDBBtn color="unique" type="button">
                                        {Constant.login}
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default Login;
