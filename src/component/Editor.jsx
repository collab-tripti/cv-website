import React, { Component } from "react";    
    
class Editor extends Component {    
    constructor(props) {    
        super(props);
        this.state = {
                        error:this.errorField
                    }
    }
    
    handleFormValidation = () => {    
        let temp = {};
        temp.studName = this.props.user.studName !== "" ? "" : "This field is required";
        temp.email = this.props.user.email !== "" ? "" : "This field is required";
        temp.dob = this.props.user.dob !== "" ? "" : "This field is required";
        temp.city = this.props.user.city !== "" ? "" : "This field is required";
        temp.aboutme = this.props.user.aboutme !== "" ? "" : "This field is required";
        temp.phoneNumber = (this.props.user.phoneNumber.length === 10 && Number(this.props.user.phoneNumber))? "" : "This field is invalid";
        var educationArray = [];
        this.props.user.education.map((edu) => {
            var newTemp = {}
            newTemp.instituteName =  edu.instituteName !== "" ? "" : "This field is required";
            newTemp.degreeName =  edu.degreeName !== "" ? "" : "This field is required";
            newTemp.degreeStartMonth =  edu.degreeStartMonth === "select"  || edu.degreeStartMonth === "" ? "This field is required" : "";
            newTemp.degreeStartYear =  edu.degreeStartYear === "select"  || edu.degreeStartYear === "" ? "This field is required" : "";
            newTemp.degreeEndMonth =  edu.degreeEndMonth === "select"  || edu.degreeEndMonth === "" ? "This field is required" : "";
            newTemp.degreeEndYear =  edu.degreeEndYear === "select"  || edu.degreeEndYear === "" ? "This field is required" : "";
            educationArray.push(newTemp);
        })
        
        var experienceArray = [];
        this.props.user.experience.map((exp) => {
            var newTemp = {}
            newTemp.companyName =  exp.companyName !== "" ? "" : "This field is required";
            newTemp.designation =  exp.designation !== "" ? "" : "This field is required";
            newTemp.expStartMonth =  exp.expStartMonth === "select"  || exp.expStartMonth === "" ? "This field is required" : "";
            newTemp.expStartYear =  exp.expStartYear === "select"  || exp.expStartYear === "" ? "This field is required" : "";
            newTemp.expEndMonth =  exp.expEndMonth === "select"  || exp.expEndMonth === "" ? "This field is required" : "";
            newTemp.expEndYear =  exp.expEndYear === "select"  || exp.expEndYear === "" ? "This field is required" : "";
            experienceArray.push(newTemp);
        })
        var socialArray = []
        this.props.user.socialMediaProfile.forEach((social) => {
            var newTemp = {}
            newTemp.socialSite =  social.socialSite !== "" ? "" : "This field is required";
            newTemp.link =  social.link !== "" ? "" : "This field is required";
            socialArray.push(newTemp);
        })
        temp.education = educationArray.every(edu=>Object.values(edu).every(x=>x==="")) === true? "":"false"
        temp.experience = experienceArray.every(exp=>Object.values(exp).every(x=>x===""))=== true? "":"false"
        temp.socialMediaProfile = socialArray.every(social=>Object.values(social).every(x=>x===""))=== true? "":"false"
        const result = Object.values(temp).every(x => x === "");
        temp.education = educationArray
        temp.experience = experienceArray
        temp.socialMediaProfile = socialArray
        this.setState({ error: temp} );
		return result;
    }    
    
    handleChange = (e) => {    
        this.props.setUser({ [e.target.name]: e.target.value });    
    }    

    handleDyanmicChange = (type, id, fieldName, value) => {
        var tempObject = this.props.user[type];
        tempObject[id][fieldName] = value;
        this.props.setUser({[type]:tempObject})

    }
    emptyEducationField = {
        instituteName:'' ,
        degreeName:'' ,
        degreeStartMonth:'',
        degreeStartYear:'',
        degreeEndMonth:'',
        degreeEndYear:''
    };

    emptyExperienceField = {
        companyName:'' ,
        designation:'' ,
        expStartMonth:'',
        expStartYear:'',
        expEndMonth:'',
        expEndYear:''
    };

    emptysocialMediaProfile ={
        socialSite:'',
        link:''
    }

    errorField = {
        studName:'',
        phoneNumber:'',
        aboutme:'',
        email:'',
        dob:'',
        city:'',
        education:[
        {
            instituteName:'' ,
            degreeName:'' ,
            degreeStartMonth:'',
            degreeStartYear:'',
            degreeEndMonth:'',
            degreeEndYear:''
        },
        {
            instituteName:'' ,
            degreeName:'' ,
            degreeStartMonth:'',
            degreeStartYear:'',
            degreeEndMonth:'',
            degreeEndYear:''
        },
        {
            instituteName:'' ,
            degreeName:'' ,
            degreeStartMonth:'',
            degreeStartYear:'',
            degreeEndMonth:'',
            degreeEndYear:''
        }
    ],
    experience:[
        {
            companyName:'',
            designation:'',
            expStartMonth:'',
            expStartYear:'',
            expEndMonth:'',
            expEndYear:''
        },
        {
            companyName:'',
            designation:'',
            expStartMonth:'',
            expStartYear:'',
            expEndMonth:'',
            expEndYear:''
        },
        {
            companyName:'',
            designation:'',
            expStartMonth:'',
            expStartYear:'',
            expEndMonth:'',
            expEndYear:''
        }
        ],
        socialMediaProfile:[
            {
                socialSite:'',
                link:''
            },
            {
                socialSite:'',
                link:''
            },
            {
                socialSite:'',
                link:''
            }
        ]

    }

    educationField = (id) => {
                            
        return (<>
                <p className="mb-2">Education details {id+1}</p>
                <div>    
                            <label htmlFor="instituteName">Institute Name</label>    
                            <input type="text" name="instituteName"    
                                value={this.props.user.education[id].instituteName}    
                                onChange={(value)=>this.handleDyanmicChange("education",id, "instituteName", value.target.value)}    
                                placeholder="Institute Name"    
                                // className={instituteNameErr ? ' showError' : ''} 
                                />    
                            {this.state.error.education[id].instituteName &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].instituteName}</div>    
                            }    
    
                        </div> 
                        <div>    
                            <label htmlFor="degreeName">Degree Name</label>    
                            <input type="text" name="degreeName"    
                                value={this.props.user.education[id].degreeName}    
                                onChange={(value)=>this.handleDyanmicChange("education",id, "degreeName", value.target.value)}
                                placeholder="Degree Name"    
                                // className={degreeNameErr ? ' showError' : ''} 
                                />    
                            {this.state.error.education[id].degreeName &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeName}</div>    
                            }    
    
                        </div> 
                        <div className="d-flex col-lg-12 justify-content-between mb-3">
                            <div>    
                                <label htmlFor="degreeStartDate">Start Date</label>    
                                <div className="d-flex col-lg-12 justify-content-between">
                                    <div>
                                    <select name="degreeStartMonth"    
                                        value={this.props.user.education[id].degreeStartMonth}    
                                        onChange={(value)=>this.handleDyanmicChange("education",id, "degreeStartMonth", value.target.value)}   
                                        // className={degreeStartMonthErr ? ' showError' : ''} 
                                        >    
                                        <option value="select">--Select--</option>    
                                        <option name="January" value="Jan">January</option>
                                        <option name="February" value="Feb">February</option>
                                        <option name="March" value="Mar">March</option>
                                        <option name="April" value="Apr">April</option>
                                        <option name="May" value="May">May</option>
                                        <option name="June" value="Jun">June</option>
                                        <option name="July" value="Jul">July</option>
                                        <option name="August" value="Aug">August</option>
                                        <option name="September" value="Sep">September</option>
                                        <option name="October" value="Oct">October</option>
                                        <option name="November" value="Nov">November</option>
                                        <option name="December" value="Dec">December</option>  
                                    </select> 
                                    {this.state.error.education[id].degreeStartMonth &&    
                                        <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeStartMonth}</div>    
                                    }
                                    </div>     
                                    <div>
                                    <select name="degreeStartYear"    
                                        value={this.props.user.education[id].degreeStartYear}    
                                        onChange={(value)=>this.handleDyanmicChange("education",id, "degreeStartYear", value.target.value)}
                                        // className={degreeStartYearErr ? ' showError' : ''} 
                                        >    
                                        <option value="select">--Select--</option>    
                                        <option name="1" value="2011">2011</option>
                                        <option name="2" value="2012">2012</option>
                                        <option name="3" value="2013">2013</option>
                                        <option name="4" value="2014">2014</option>
                                        <option name="5" value="2015">2015</option>
                                        <option name="6" value="2016">2016</option>
                                        <option name="7" value="2017">2017</option>
                                        <option name="8" value="2018">2018</option>
                                        <option name="9" value="2019">2019</option>
                                        <option name="10" value="2020">2020</option>
                                        <option name="11" value="2021">2021</option>
                                    </select>
                                    {this.state.error.education[id].degreeStartYear &&    
                                        <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeStartYear}</div>    
                                    }
                                    </div>
                                </div>  
                                    
                                
                            </div> 
                            <div>    
                                <label htmlFor="degreeEndDate">End Date</label> 
                                <div className="d-flex col-lg-12 justify-content-between">
                                    <div>
                                    <select name="degreeEndMonth"    
                                        value={this.props.user.education[id].degreeEndMonth}    
                                        onChange={(value)=>this.handleDyanmicChange("education",id, "degreeEndMonth", value.target.value)}  
                                        // className={degreeStartMonthErr ? ' showError' : ''} 
                                        >    
                                        <option value="select">--Select--</option>    
                                        <option name="January" value="Jan">January</option>
                                        <option name="February" value="Feb">February</option>
                                        <option name="March" value="Mar">March</option>
                                        <option name="April" value="Apr">April</option>
                                        <option name="May" value="May">May</option>
                                        <option name="June" value="Jun">June</option>
                                        <option name="July" value="Jul">July</option>
                                        <option name="August" value="Aug">August</option>
                                        <option name="September" value="Sep">September</option>
                                        <option name="October" value="Oct">October</option>
                                        <option name="November" value="Nov">November</option>
                                        <option name="December" value="Dec">December</option>  
                                    </select>   
                                    {this.state.error.education[id].degreeEndMonth &&    
                                        <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeEndMonth}</div>    
                                    }
                                    </div> 
                                    <div>
                                    <select name="degreeEndYear"    
                                        value={this.props.user.education[id].degreeEndYear}    
                                        onChange={(value)=>this.handleDyanmicChange("education",id, "degreeEndYear", value.target.value)}    
                                        // className={degreeStartYearErr ? ' showError' : ''} 
                                        >    
                                        <option value="select">--Select--</option>    
                                        <option name="1" value="2011">2011</option>
                                        <option name="2" value="2012">2012</option>
                                        <option name="3" value="2013">2013</option>
                                        <option name="4" value="2014">2014</option>
                                        <option name="5" value="2015">2015</option>
                                        <option name="6" value="2016">2016</option>
                                        <option name="7" value="2017">2017</option>
                                        <option name="8" value="2018">2018</option>
                                        <option name="9" value="2019">2019</option>
                                        <option name="10" value="2020">2020</option>
                                        <option name="11" value="2021">2021</option>
                                    </select>
                                    {this.state.error.education[id].degreeEndYear &&    
                                        <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeEndYear}</div>    
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
        )
    }

    experienceField = (id) => {
        return <>
                <p className="mb-2">Experience details {id+1}</p>
                <div>    
                    <label htmlFor="companyName">Company Name</label>    
                    <input type="text" name="companyName"    
                        value={this.props.user.experience[id].companyName}    
                        onChange={(value)=>this.handleDyanmicChange("experience", id,"companyName", value.target.value )}    
                        placeholder="Company Name"    
                    />    
                    {this.state.error.experience[id].companyName &&    
                        <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.experience[id].companyName}</div>    
                    }    
                </div>
                <div>    
                    <label htmlFor="designation">Designation</label>    
                    <input type="text" name="designation"    
                        value={this.props.user.experience[id].designation}    
                        onChange={(value)=>this.handleDyanmicChange("experience", id, "designation", value.target.value)}    
                        placeholder="Institute Name"    
                    />    
                    {this.state.error.experience[id].designation && <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.experience[id].designation}</div>}    
                </div> 
                <div className="d-flex col-lg-12 justify-content-between mb-2">
                <div>    
                    <label htmlFor="jobStartDate">Start Date</label> 
                    <div className="d-flex col-lg-12 justify-content-between">
                        <div>
                        <select name="expStartMonth"    
                            value={this.props.user.experience[id].expStartMonth}    
                            onChange={(value)=>this.handleDyanmicChange("experience", id, "expStartMonth", value.target.value)}    
                        >
                            <option value="select">--Select--</option>    
                            <option name="January" value="Jan">January</option>
                            <option name="February" value="Feb">February</option>
                            <option name="March" value="Mar">March</option>
                            <option name="April" value="Apr">April</option>
                            <option name="May" value="May">May</option>
                            <option name="June" value="Jun">June</option>
                            <option name="July" value="Jul">July</option>
                            <option name="August" value="Aug">August</option>
                            <option name="September" value="Sep">September</option>
                            <option name="October" value="Oct">October</option>
                            <option name="November" value="Nov">November</option>
                            <option name="December" value="Dec">December</option>  
                        </select>  
                        {this.state.error.education[id].degreeStartMonth &&    
                            <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeStartMonth}</div>    
                        }
                        </div>  
                        <div>
                        <select name="expStartYear"    
                            value={this.props.user.experience[id].expStartYear}    
                            onChange={(value)=>this.handleDyanmicChange("experience", id, "expStartYear", value.target.value)}    
                            >    
                            <option value="select">--Select--</option>    
                            <option name="1" value="2011">2011</option>
                            <option name="2" value="2012">2012</option>
                            <option name="3" value="2013">2013</option>
                            <option name="4" value="2014">2014</option>
                            <option name="5" value="2015">2015</option>
                            <option name="6" value="2016">2016</option>
                            <option name="7" value="2017">2017</option>
                            <option name="8" value="2018">2018</option>
                            <option name="9" value="2019">2019</option>
                            <option name="10" value="2020">2020</option>
                            <option name="11" value="2021">2021</option>
                        </select>
                        {this.state.error.education[id].degreeStartYear &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeStartYear}</div>    
                        }
                        </div>
                    </div>
                </div>
                <div>    
                    <label htmlFor="jobEndDate">End Date</label> 
                    <div className="d-flex col-lg-12 justify-content-between">
                        <div>
                        <select name="expEndMonth"    
                            value={this.props.user.experience[id].expEndMonth}    
                            onChange={(value)=>this.handleDyanmicChange("experience", id,"expEndMonth" , value.target.value)}    
                        >    
                            <option value="select">--Select--</option>    
                            <option name="January" value="Jan">January</option>
                            <option name="February" value="Feb">February</option>
                            <option name="March" value="Mar">March</option>
                            <option name="April" value="Apr">April</option>
                            <option name="May" value="May">May</option>
                            <option name="June" value="Jun">June</option>
                            <option name="July" value="Jul">July</option>
                            <option name="August" value="Aug">August</option>
                            <option name="September" value="Sep">September</option>
                            <option name="October" value="Oct">October</option>
                            <option name="November" value="Nov">November</option>
                            <option name="December" value="Dec">December</option>  
                        </select>  
                        {this.state.error.education[id].degreeEndMonth &&    
                            <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeEndMonth}</div>    
                        } 
                        </div> 
                        <div>
                        <select name="expEndYear"    
                            value={this.props.user.experience[id].expEndYear}    
                            onChange={(value)=>this.handleDyanmicChange("experience", id, "expEndYear", value.target.value)}    
                        >    
                            <option value="select">--Select--</option>    
                            <option name="1" value="2011">2011</option>
                            <option name="2" value="2012">2012</option>
                            <option name="3" value="2013">2013</option>
                            <option name="4" value="2014">2014</option>
                            <option name="5" value="2015">2015</option>
                            <option name="6" value="2016">2016</option>
                            <option name="7" value="2017">2017</option>
                            <option name="8" value="2018">2018</option>
                            <option name="9" value="2019">2019</option>
                            <option name="10" value="2020">2020</option>
                            <option name="11" value="2021">2021</option>
                        </select>
                        {this.state.error.education[id].degreeEndYear &&    
                            <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.education[id].degreeEndYear}</div>    
                        }
                        </div>
                    </div>
                </div>
                </div>
            </>
    }

    socialMediaField = (id) => {
        return <>
            <div>    
                            <label htmlFor="socialMediaProfile">Social Media</label>    
                            <select name="socialSite"    
                                value={this.props.user.socialMediaProfile[id].socialSite}    
                                onChange={(value)=>this.handleDyanmicChange("socialMediaProfile", id, "socialSite", value.target.value)}    
                                 >
                                <option value="select">--Select--</option>    
                                <option value="LinkedIN">LinkedIN</option>    
                                <option value="Github">Github</option>    
                                <option value="Kaggle">Kaggle</option> 
                                <option value="Instagram">Instagram</option>    
                                <option value="Youtube">Youtube</option>     
                            </select>
                            {this.state.error.socialMediaProfile[id].socialSite &&    
                                        <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.socialMediaProfile[id].socialSite}</div>    
                                    }
                              
                        </div> 
                        <div>    
                            <label htmlFor="socialMediaProfileLink">Link</label>    
                            <input type="text" name="link"    
                                value={this.props.user.socialMediaProfile[id].link}    
                                onChange={(value)=>this.handleDyanmicChange("socialMediaProfile", id, "link", value.target.value)}    
                                placeholder="Link"     />    
                                {this.state.error.socialMediaProfile[id].link &&    
                                        <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.socialMediaProfile[id].link}</div>    
                                    }
                             
    
                        </div>
        </>
    };

    saveUser = async() => {
        this.setState({error: this.errorField})
        if(this.handleFormValidation()){
            await fetch("http://localhost:8000/users/"+this.props.user.id, {method: 'PUT', headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }, body: JSON.stringify(this.props.user)})
              .then(res=>res.json())
            .then(data=>{
                this.props.pushToView(this.props.user.phoneNumber);
            })
        } 
        
    }

    logout = () => {
        document.cookie = "phoneNumber = ";
        this.props.pushToLogin();
    }

    render() {    
        return (    
            <div className="formDiv col-lg-6">    
                <h3 style={{ textAlign: "center" }} >CV Details Form </ h3>    
                <div>    
                    <form>   
                    <h5>Personal Information</h5> 
                        <div className="d-flex col-lg-12 justify-content-between">
                            <div>    
                                <label htmlFor="studName">Name</label>    
                                <input type="text" name="studName"    
                                    value={this.props.user.studName}    
                                    onChange={this.handleChange}    
                                    placeholder="Your name.."    
                                    // className={studNameErr ? ' showError' : ''} 
                                />    
                                {this.state.error.studName &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.studName}</div>    
                                }    
        
                            </div>    
                            <div>    
                                <label htmlFor="text">Birth Date</label>    
                                <input type="text" name="dob"    
                                    value={this.props.user.dob}    
                                    onChange={this.handleChange}    
                                    placeholder="DD/MM/YYYY.."    
                                    // className={dobErr ? ' showError' : ''} 
                                />    
                                {this.state.error.dob &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.dob}</div>    
                                }    
                            </div>
                        </div>    
                        <div className="d-flex col-lg-12 justify-content-between">
                            <div>    
                                <label htmlFor="phoneNumber">Contact Number</label>    
                                <input type="text" name="phoneNumber"    
                                    onChange={this.handleChange}    
                                    value={this.props.user.phoneNumber}    
                                    placeholder="Your phone number.."    
                                    // className={phoneNumberErr ? ' showError' : ''} 
                                />
                                {this.state.error.phoneNumber &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.phoneNumber}</div>    
                                }    
                            </div>    
                            <div>    
                                <label htmlFor="emailId">Email Id</label>    
                                <input type="text" name="email"    
                                    value={this.props.user.email}    
                                    onChange={this.handleChange}    
                                    placeholder="Your email id.."    
                                    // className={emailIdErr ? ' showError' : ''} 
                                />    
                                {this.state.error.email &&    
                                    <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.email}</div>    
                                }    
        
                            </div>
                        </div>
                        <div>    
                            <label htmlFor="aboutme">About Me</label>    
                                <input type="text" name="aboutme"    
                                    value={this.props.user.aboutme}    
                                    onChange={this.handleChange}    
                                    placeholder="Tell about yourself..."    
                                />      
                            {this.state.error.aboutme &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.aboutme}</div>    
                            }    
                        </div> 
                        <div>    
                            <label htmlFor="city">Address</label>    
                                <input type="text" name="city"    
                                    value={this.props.user.city}    
                                    onChange={this.handleChange}    
                                    placeholder="Your address..."    
                                    // className={cityErr ? ' showError' : ''}
                                />      
                            {this.state.error.city &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{this.state.error.city}</div>    
                            }    
                        </div>  
                        <div className="d-flex justify-content-between mt-3">
                            <h5>Education</h5> 
                            <button type="button" class="btn btn-outline-secondary" onClick={()=>{
                                var newEduArray = this.props.user.education;
                                newEduArray.push(this.emptyEducationField)
                                var newEduErrArray = this.state.error.education;
                                newEduErrArray.push(this.emptyEducationField);
                                this.setState({error:{...this.state.error, education:newEduErrArray} });
                                this.props.setUser({education:newEduArray })
                            }}>+</button>
                        </div> 
                        {
                            this.props.user.education.map((edu, id) => {
                                return this.educationField(id)
                            }
                            )
                        }
                        <div className="d-flex justify-content-between">
                            <h5>Work Experience</h5>  
                            <button type="button" class="btn btn-outline-secondary" onClick={()=>{
                                var newExpArray = this.props.user.experience;
                                newExpArray.push(this.emptyExperienceField);
                                var newExpErrArray = this.state.error.experience;
                                newExpErrArray.push(this.emptyExperienceField);
                                this.setState({error:{...this.state.error, experience:newExpErrArray} });
                                this.props.setUser({experience:newExpArray })
                            }}>+</button>
                            
                        </div>
                        {

                            this.props.user.experience.map((edu, id) => {
                                return this.experienceField(id);
                            })
                        }
                        <div className="d-flex justify-content-between" >
                            <h5>Social Profile</h5>
                            <button type="button" class="btn btn-outline-secondary" onClick={()=>{                    
                                var newSocialArray = this.props.user.socialMediaProfile;
                                newSocialArray.push(this.emptysocialMediaProfile);
                                var newSocialErrArray = this.state.error.socialMediaProfile;
                                newSocialErrArray.push(this.emptysocialMediaProfile);
                                this.setState({error:{...this.state.error, socialMediaProfile:newSocialErrArray }})
                                this.props.setUser({socialMediaProfile:newSocialArray })}}>+
                            </button>
                            
                        </div> 
                        {
                            this.props.user.socialMediaProfile.map((media, id)=> {
                                return this.socialMediaField(id);
                            })
                        }
                        <div className='d-flex justify-content-center'>    
                            <input type="button" value="Submit" className="btn btn-primary ms-2 me-2" onClick={this.saveUser} />
                            <input type="button" value="Logout" className="btn btn-primary ms-2 me-2" onClick={this.logout} />
                        </div>
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Editor;