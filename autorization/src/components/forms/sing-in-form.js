import React from 'react';

import './forms.scss';

export class SignInForm extends  React.Component {
    constructor(){
        super();
        this.state = {
            login: '',
            password: '' 
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
    signIn = (e) => {
        e.preventDefault();

        let url = 'https://flatearth-api.herokuapp.com/api/v1/auth';
        
        fetch(url, {  
            method: 'POST',  
            headers: {  
            'auth': '1234'  
            },  
            body: JSON.stringify({
                user:"sa", 
                password: "admin" 
            })
        })         
        .then((data) => data.json())
        .then( (data) => {console.log(data)});
    }
    render() {
        return(
            <div className="sing-form">
                <h1 className="form-title">Sign in</h1>
                <form>
                    <input 
                        className="form-control" 
                        value={this.state.login} 
                        placeholder="Login" 
                        name="login"
                        onChange={this.handleInputChange}/>
                    <input 
                        className="form-control" 
                        value={this.state.password} 
                        placeholder="Login" 
                        name="password"
                        onChange={this.handleInputChange}/>
                    <button 
                        className="btn btn-primary"
                        onClick={this.signIn}>Sign in</button>
                    <div className="info-text">
                        or <span className="link">Sign Up</span> if you haven't an account
                    </div>
                </form>              
            </div>
        )
    }
}