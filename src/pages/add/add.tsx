import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Constant from '../../constant/constant';
import API from '../../service/home.service';
import Swal from 'sweetalert2';

class Add extends React.Component {
    state = {
        zone: {
            code: '',
            name: ''
            // zoneID: '5ebe2e906e15d803fc266ee2',
            // permit: true,
            // document_name: '',
            // commission_type: '',
            // commission_value: '',
            // applicable_on: ''
        }
    }

    constructor(props: any) {
        super(props);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.saveData = this.saveData.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
    }

    handleChangeEvent(event: any) {
        event.preventDefault();
        const state: any = this.state;
        state.zone[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSwitchChange(nr: any) {
        // console.log("nr", nr);
    }


    async saveData() {
        if (this.state.zone.code && this.state.zone.name) {
            var zoneData = await API.postZone(this.state.zone);
            Swal.fire(
                "Sccess!",
                "State has been added sucessfully!",
                "success"
            )
        }
    }

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
                                {/* <div className='custom-control custom-switch'>
                                    <input
                                        type='checkbox'
                                        className='custom-control-input'
                                        id='customSwitches'
                                        checked={this.state.zone.permit}
                                        onChange={this.handleSwitchChange.bind(this, this.state.zone.permit == true ? 1 : 0)}
                                    />
                                    <label className='custom-control-label' htmlFor='customSwitches'>
                                        Toggle this switch element
        </label>
                                </div>
                                <br />
                                <label className="grey-text">
                                    {Constant.document_name}
                                </label>
                                <input
                                    type="text"
                                    name="document_name"
                                    onChange={this.handleChangeEvent}
                                    className="form-control"
                                />
                                <br />
                                <label className="grey-text">
                                    {Constant.commission_type}
                                </label>
                                <input
                                    type="text"
                                    name="commission_type"
                                    onChange={this.handleChangeEvent}
                                    className="form-control"
                                />
                                <br />
                                <label className="grey-text">
                                    {Constant.commission_value}
                                </label>
                                <input
                                    type="text"
                                    name="commission_value"
                                    onChange={this.handleChangeEvent}
                                    className="form-control"
                                />
                                <br />
                                <label className="grey-text">
                                    {Constant.applicable_on}
                                </label>
                                <input
                                    type="text"
                                    name="applicable_on"
                                    onChange={this.handleChangeEvent}
                                    className="form-control"
                                />
                                <br /> */}
                                <div className="text-center mt-4">
                                    <MDBBtn color="unique" type="button" onClick={this.saveData}>
                                        {Constant.save}
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

export default Add;
