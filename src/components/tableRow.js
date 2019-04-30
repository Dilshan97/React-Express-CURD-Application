
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class tableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        axios.get('http://localhost:4000/business/delete/'+ this.props.obj._id)
            .then(console.log('Deletd'))
            .catch(err => console.log(err))
    }

    render() { 
        return ( 
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.mobile}</td>
                <td>{this.props.obj.designation}</td>
                <td><Link to={"/edit/"+this.props.obj._id} className="btn btn-warning btn-sm"><i className="fas fa-edit"></i></Link>&nbsp;
                    <button className="btn btn-danger btn-sm" onClick={this.delete}><i className="fas fa-trash"></i></button></td>
            </tr>
         );
    }
}
 
export default tableRow;