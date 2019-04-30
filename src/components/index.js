
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

class index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/business')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    tableRow(){
        return this.state.business.map(function(object, i){
            return <TableRow obj={object} key={i}/>
        });
    }

    render() { 
        return ( 
            <div>
                <table className="table" style={{marginTop:25}}>
                   <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Mobile</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                   </thead>

                   <tbody>
                        { this.tableRow() }
                   </tbody>
                </table>
            </div>
         );
    }
}
 
export default index;