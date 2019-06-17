
import React, { Component } from 'react';

class edit extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeDesignation = this.onChangeDesignation.bind(this);
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

    render() { 
        return ( 
            <div>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={}>
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
 
export default edit;