import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import Constant from '../../constant/constant';
import API from '../../service/home.service';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class List extends React.Component {
    state = {
        list: []
    }

    constructor(props: any) {
        super(props);
        this.removeZone = this.removeZone.bind(this);
    }

    async componentDidMount() {
        var userData = await API.getZone();
        this.setState({ list: userData.data });
    }

    async removeZone(id: any) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You should be remove state!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(async (result) => {
            if (result.value) {
                var userData = await API.deleteZone(id);
                Swal.fire(
                    'Deleted!',
                    'Your state has been deleted.',
                    'success'
                )
                this.componentDidMount();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your state is safe :)',
                    'error'
                )
            }
        })
    }


    render() {
        return (
            <div>
                <MDBTable>
                    <MDBTableHead color="primary-color" textWhite>
                        <tr>
                            <th>{Constant.code}</th>
                            <th>{Constant.name}</th>
                            <th>{Constant.operation}</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            this.state.list.length > 0 ? (
                                this.state.list.map((data: any, index: number) =>
                                    <tr key={index}>
                                        <td>{data.code}</td>
                                        <td>{data.name}</td>
                                        <td><MDBIcon
                                            icon="trash"
                                            style={{marginRight:'10px'}}
                                            onClick={this.removeZone.bind(this, data._id)}
                                        />
                                            <Link to={{
                                                pathname: `/edit/${data._id}`
                                            }}>
                                                <MDBIcon
                                                    icon="edit"
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            ) : (
                                    ''
                                )
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>
        );
    }
}

export default List;
