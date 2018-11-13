import React from 'react';

import './forms.scss';

export class SignUpForm extends  React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            login: '',
            password: '',
            password1: ''  
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange = (e) => {
        let name = e.target.name;      
        let value = e.target.value;
        this.setState({
            [name] : value
        })
    }
    render() {
        return(
            <div className="sing-form">
                <h1 className="form-title">Sign Up</h1>
                <form>
                    <input 
                        className="form-control" 
                        type="email"
                        value={this.state.email} 
                        placeholder="Email"     
                        name="email"
                        onChange={this.handleInputChange}/>
                    <input 
                        className="form-control" 
                        type="password"
                        value={this.state.password} 
                        placeholder="Password" 
                        name="password"
                        onChange={this.handleInputChange}/>
                    <input 
                        className="form-control" 
                        type="password"
                        value={this.state.password1} 
                        placeholder="Confirm password" 
                        name="password1"
                        onChange={this.handleInputChange}/>
                    <input 
                        className="form-control" 
                        type="text"
                        value={this.state.login} 
                        placeholder="Login"     
                        name="login"
                        onChange={this.handleInputChange}/>                    
                    <button 
                        className="btn btn-primary"
                        onClick={this.signIn}>Sign Up</button>
                    <div className="info-text">
                        or <span className="link">Sign Ii</span> if you have an account
                    </div>
                </form>              
            </div>
        )
    }
}