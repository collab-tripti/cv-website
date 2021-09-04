import React, {Component, version} from "react";
// import Editor from "../Screens/Editor";
import ViewResume from "./ViewResume";
import Editor from "../component/Editor";
import { Redirect } from 'react-router-dom';
import axios from "axios";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {    
            user:{
                studName: '',    
                email: '',    
                dob: '',    
                gender: '',    
                phoneNumber: '',    
                city: '',    
                education:[ 
                    {
                        instituteName:'' ,
                        degreeName:'' ,
                        degreeStartMonth:'',
                        degreeStartYear:'',
                        degreeEndMonth:'',
                        degreeEndYear:'',
                    }
                ],
                experience:[
                    {
                        designation:'',
                        companyName:'',
                        expStartMonth:'',
                        expStartYear:'',
                        expEndMonth:'',
                        expEndYear:'',
                    }
                ],
                socialMediaProfile:[
                    {
                        socialSite:'',
                        link:''
                    }
                ]
            }
        };
    }


    UNSAFE_componentWillMount(){
        var temp = true;
		var cookieArray = document.cookie.split("; ");
			cookieArray.forEach((cookie)=>{
				cookie = cookie.split("=");
				if(cookie[0] === "phoneNumber"){
                    temp = false
					this.isAlreadyInDB(cookie[1])
                   
			}
		})
        if(temp){
            this.props.history.push("/")
        }
        
    }

    isAlreadyInDB= async(phoneNumber) => {

        await axios.get("http://localhost:8000/users?phoneNumber="+phoneNumber)
        .then(res=>{
            if(res.data.length === 1){
                this.setState({user:res.data[0]})
            }else{
                this.props.history.push("/")
            }
        })
        .catch(error=>{
            this.props.history.push("/");
        })
	}

    setUser = (object) => {
        this.setState({user:  { ...this.state.user, ...object}   });
    }

    pushToLogin =()=> {
        this.props.history.push("/")
    }
        
    pushToView = (user) => {
        this.props.history.push("/ViewResume", {user:user})
    }

    render(){
        // if(cookie[0] !== "phoneNumber"){
        //     return <Redirect to={ "/"  } />
        // }
       return (
           <div className="d-flex">
           <Editor user={this.state.user} setUser={this.setUser} pushToLogin={this.pushToLogin} pushToView={this.pushToView} />
            <ViewResume user={this.state.user} />
           </div>
       )
    }
}

export default Home;