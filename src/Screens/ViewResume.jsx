import React, {Component} from "react";

class ViewResume extends Component{
    constructor(props) {    
        super(props);
    }; 

    educationField = (edu, id) => {
        return (<>
                <div>    
                            <label htmlFor="instituteName">Institute:&nbsp;&nbsp;</label>    
                            {edu.instituteName}    
                            </div> 
                        <div>    
                            <label htmlFor="degreeName">Degree:&nbsp;&nbsp;</label>    
                            {edu.degreeName}    
                        </div> 
                        <div className="d-flex mb-3">
                                
                                <label className="" htmlFor="degreeStartDate">Duration:&nbsp;&nbsp;</label>    
                                {edu.degreeStartMonth&&<div>{edu.degreeStartMonth},{edu.degreeStartYear}&nbsp;-&nbsp;{edu.degreeEndMonth},{edu.degreeEndYear}</div>}     
                        </div>
        </>
        )
    }

    experienceField = (exp, id) => {
        return <>
                <div>    
                    <label htmlFor="companyName">Company:&nbsp;&nbsp;</label>    
                    {exp.companyName}        
                </div>
                <div>    
                    <label htmlFor="designation">Designation:&nbsp;&nbsp;</label>    
                    {exp.designation}    
                    
                </div> 
                <div>    
                    <label htmlFor="jobStartDate">Duration:&nbsp;&nbsp;</label> 
                    {exp.expStartMonth  && <div>{exp.expStartMonth},{exp.expStartYear}&nbsp;-&nbsp;{exp.expEndMonth},{exp.expEndYear}  </div>}
                </div>
            </>
    }

    socialMediaField = (social, id) => {
        return <>
            <div>    
                           
                            {social.socialSite && <div>{social.socialSite}&nbsp;-&nbsp;&nbsp;{social.link}</div> }
                        </div>
        </>
    };


    render(){

        var user = this.props.user?this.props.user:this.props.location.state.user;

       return (
                <div className="formDiv col-lg-6 fs-5">    
                <h2 className="d-flex justify-content-around mb-5" >Your Resume</h2>
                <div> 
                    <strong className="fs-4 mb-0">Personal Information</strong> 
                        <div className="d-flex col-lg-12">
                            <label htmlFor="studName">Name:&nbsp;&nbsp;</label> 
                                {user.studName}   
                        </div>    
                        <div className="d-flex col-lg-12">
                            <div className="d-flex col-lg-6"> 
                            <label htmlFor="phoneNumber">Contact:&nbsp;&nbsp;</label>  
                                {user.phoneNumber}        
                            </div>    
                            
                        </div>
                        <div className="d-flex col-lg-12">
                                <p className="mb-0" htmlFor="emailId">Email Id:&nbsp;&nbsp;</p> 
                                {user.email}    
                        </div>
                        
                        <div className="d-flex col-lg-12">
                            <label htmlFor="text">Date of Birth:&nbsp;&nbsp;</label>    
                                {user.dob}        
                        </div>
                    
                        
                        <div className="mb-3">
                            <label htmlFor="city">Address:&nbsp;&nbsp;</label>
                            {user.city}        
                        </div>  
                        <div className="d-flex col-lg-12 justify-content-between"> 
                            <div className="d-flex flex-column col-lg-4"><strong className="d-block fs-4 mb-0">Education</strong> 
                            {
                                user.education.map((edu, id) => {
                                    return this.educationField(edu,id)
                                }
                                )
                            }</div>

                            <div className="d-flex flex-column col-lg-6"><strong className="d-block fs-4 mb-0">Work Experience</strong> 
                            {
                                user.experience.map((edu, id) => {
                                    return this.experienceField(edu,id);
                                })
                            }</div>
                        </div>
                        <strong className="fs-4 mb-0">Social Profile</strong> 
                        {
                            user.socialMediaProfile.map((media, id)=> {
                                return this.socialMediaField(media,id);
                            })
                        }
                </div>  
                
            </div >
       )
    }
}

export default ViewResume;