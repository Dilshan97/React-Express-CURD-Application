
import React, { Component } from 'react';
import axio from 'axios';

class create extends Component {
    
    constructor(props){
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeDesignation = this.onChangeDesignation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {  
            name: '',
            email: '',
            mobile:'',
            designation:''
        }
    }

    onChangeName(e){ 
        this.setState({ 
            name: e.target.value 
        }) 
    }
    onChangeEmail(e){ 
        this.setState({ 
            email: e.target.value 
        }) 
    }
    onChangeMobile(e){ 
        this.setState({ 
            mobile: e.target.value 
        }) 
    }
    onChangeDesignation(e){ 
        this.setState({ 
            designation: e.target.value 
        }) 
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            designation: this.state.designation
        };
        
        axio.post('http://localhost:4000/business/add', obj)
           .then(res => console.log(res.data));

        this.setState({
            name: '',
            email: '',
            mobile:'',
            designation:''
        })
    }
    render() { 
        return ( 
            <div style={{marginTop:25}}>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Add new Employee</h3>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="name" onChange={this.onChangeName} value={this.state.name}/>
                            </div>

                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="email" className="form-control" name="email" onChange={this.onChangeEmail} value={this.state.email}/>
                            </div>

                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" className="form-control" name="mobile" onChange={this.onChangeMobile} value={this.state.mobile}/>
                            </div>

                            <div className="form-group">
                                <label>Designation</label>
                                <input type="text" className="form-control" name="designation" onChange={this.onChangeDesignation} value={this.state.designation}/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                            <button type="reset" className="btn btn-warning">Clear</button>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default create;