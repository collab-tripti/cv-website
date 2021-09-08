import React, { Component } from "react";
import axios from 'axios';


class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			error:false, 
			message: "", 
			phoneNumber: ""
		};
	}

	emptyUser = {
		studName: "",
		dob: "",
		email: "",
		city: "",
		socialMediaProfile: [
			{
			socialSite: "",
			link: ""
			}
		],
		experience: [
			{
			companyName: "",
			designation: "",
			expStartMonth: "",
			expStartYear: "",
			expEndMonth: "",
			expEndYear: ""
			}
		],
		education: [
			{
			instituteName: "",
			degreeName: "",
			degreeStartMonth: "",
			degreeStartYear: "",
			degreeEndMonth: "",
			degreeEndYear: ""
			}
		]
	}

  login = async() => {
	this.setState({error:false, message:""})
    if(this.validatePhoneNumber(this.state.phoneNumber)){
		this.isAlreadyInDB(this.state.phoneNumber);
	}
}

  validatePhoneNumber=(phoneNumber)=>{
    if(phoneNumber.length===10 && Number(phoneNumber)){
      return true;
    }
	this.setState({error: true, message:"Invalid Phone Number"})
    return false;
  }

    componentDidMount(){
		var cookieArray = document.cookie.split("; ");
			cookieArray.forEach((cookie)=>{
				cookie = cookie.split("=");
				if(cookie[0] === "phoneNumber"){
					this.isAlreadyInDB(cookie[1]);
			}
		})
    }

	isAlreadyInDB= async(phoneNumber) => {
		if(!this.validatePhoneNumber(phoneNumber)){
			return;
		}
		await axios.get("http://localhost:8000/users?phoneNumber="+phoneNumber)
		.then(res=>{
			console.log(res)
			if(res.data.length === 1){
				document.cookie="phoneNumber ="+phoneNumber;
				this.props.pushToHome();	
			}else{
				document.cookie="phoneNumber ="+this.state.phoneNumber;
				axios.post("http://localhost:8000/users", 
					{...this.emptyUser, phoneNumber: this.state.phoneNumber},
					{headers:{"content-type":"application/json"}}
					)
				.then(res=>{
					this.props.pushToHome();
				})
				.catch(error=> {
					this.setState({error:true, message:"Something went wrong"})
				})
					}
				})
		.catch(error=> {
			this.setState({error:true, message:"Something went wrong", phoneNumber:""})
			return false
		})


	}

  render() {
    return (
        <>
      <div >
          <h1 style={{ "font-size": "22px", margin: "30px auto" }}>
            Design a winning CV with us
          </h1>

          <div>
            <input
              class="inputtxt"
              placeholder="Enter your number"
              name="number"
              value={this.state.phoneNumber}
              onChange={(Event)=>{this.setState({phoneNumber:Event.target.value})}}
            >
			</input>
            <button class="btn btn-dark" type="button" onClick={this.login}>
              <span class="" style={{ color: "#fff" }}>
                Build my resume
              </span>
            </button>
          </div>
          {this.state.error && <p style={{"color":"red"}}>{this.state.message}</p>}
      </div>
      </>
    );
  }
}

export default LoginComponent;
