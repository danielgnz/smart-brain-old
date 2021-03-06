import React from 'react';

class Register extends React.Component{
	constructor(){
		super()
		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmitRegister = this.onSubmitRegister.bind(this);
		this.state = {
			regUsername: '',
			regEmail: '',
			regPassword: ''
		}
	}

	onUsernameChange(e){
		this.setState({
			regUsername: e.target.value
		});
	}

	onEmailChange(e){
		this.setState({
			regEmail: e.target.value
		});
	}

	onPasswordChange(e){
		this.setState({
			regPassword: e.target.value
		});
	}

	onSubmitRegister(){
		fetch('http://localhost:8080/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username: this.state.regUsername,
				email: this.state.regEmail,
				password: this.state.regPassword
			})
		})
		.then(resp => resp.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	render(){
		const { onRouteChange } = this.props;
		return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 center shadow-5">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Register </legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" forhtml="username">Username</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="username"  
				        	id="username"
				        	onChange={this.onUsernameChange} />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" forhtml="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
				        	onChange={this.onEmailChange} />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" forhtml="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"
				        	onChange={this.onPasswordChange} />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
				      type="submit" value="Register" onClick={this.onSubmitRegister}/>
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default Register;