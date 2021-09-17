import React, { Component } from "react";
import pic from "../assets/pic.png";
import { useparam } from 'react-router-dom';
class ViewResume extends Component {
  constructor(props) {
    super(props);

  }

  educationField = (edu, id) => {
    return (
      <>
        <div>
          <label htmlFor="instituteName">Institute:&nbsp;&nbsp;</label>
          {edu.instituteName}
        </div>
        <div>
          <label htmlFor="degreeName">Degree:&nbsp;&nbsp;</label>
          {edu.degreeName}
        </div>
        <div className="d-flex mb-1">
          <label className="" htmlFor="degreeStartDate">
            Duration:&nbsp;&nbsp;
          </label>
          {edu.degreeStartMonth && (
            <div>
              {edu.degreeStartMonth},{edu.degreeStartYear}&nbsp;-&nbsp;
              {edu.degreeEndMonth},{edu.degreeEndYear}
            </div>
          )}
        </div>
      </>
    );
  };

  experienceField = (exp, id) => {
    return (
      <>
        <div>
          <label htmlFor="companyName">Company:&nbsp;&nbsp;</label>
          {exp.companyName}
        </div>
        <div>
          <label htmlFor="designation">Designation:&nbsp;&nbsp;</label>
          {exp.designation}
        </div>
        <div className="d-flex mb-1">
          <label htmlFor="jobStartDate">Duration:&nbsp;&nbsp;</label>
          {exp.expStartMonth && (
            <div>
              {exp.expStartMonth},{exp.expStartYear}&nbsp;-&nbsp;
              {exp.expEndMonth},{exp.expEndYear}{" "}
            </div>
          )}
        </div>
      </>
    );
  };

  socialMediaField = (social, id) => {
    return (
      <>
        <div>
          {social.socialSite && (
            <div>
              {social.socialSite}&nbsp;-&nbsp;&nbsp;{social.link}
            </div>
          )}
        </div>
      </>
    );
  };

  render() {
    var user = this.props.user
      ? this.props.user
      : this.props.location.state.user;

    return (
      <div className="viewResume">
        <h2 className="d-flex justify-content-around mb-4">Your Resume</h2>
        <div className="d-flex">
          <div class="lftsde col-lg-5">
            <div class="userpic">
              <img
                src={pic}
                alt="test"
                style={{ width: "121px", height: "121px", margin: "10px" }}
              />
            </div>

            <div>
              <strong class="hd_inf wf w100 clrw mt20">
                Personal Information
              </strong>
              <div class="wf cg clrw">
                <table class="isqdet f1">
                  <tbody>
                    <tr>
                      <td class="fldname colr_isq">
                        <label htmlFor="studName">Name:&nbsp;&nbsp;</label>
                        {user.studName}{" "}
                      </td>
                    </tr>
                    <tr>
                      <td class="fldname colr_isq">
                        <label htmlFor="text">Date of Birth:&nbsp;&nbsp;</label>
                        {user.dob}{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <strong class="hd_inf wf w100 clrw mt20">
              Contact Information
            </strong>
            <div class="wf cg clrw">
              <table class="isqdet f1">
                <tbody>
                  <tr>
                    <td class="fldname colr_isq">
                      <label htmlFor="phoneNumber">Contact:&nbsp;&nbsp;</label>
                      {user.phoneNumber}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td class="fldname colr_isq">
                      <p className="mb-0" htmlFor="emailId">
                        Email Id:&nbsp;&nbsp;
                      </p>
                      {user.email}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td class="fldname colr_isq">
                      <label htmlFor="city">Address:&nbsp;&nbsp;</label>
                      {user.city}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="rgtsde col-lg-7">
            <table class="yui-u first">
              <tbody>
                <tr>
                  <td class="cg">
                    <h3>{user.studName}{" "}</h3>
                  </td>
                </tr>
                <p class="fldname colr_isq cg">{user.aboutme}</p>
              </tbody>
            </table>

            <span class="hd_inf wf w100">Work Experience</span>
            <span class="wf cg job">
              <table class="isqdet f1">
                <tbody>
                  <tr>
                    <td class="fldname colr_isq">
                      {user.experience.map((edu, id) => {
                        return this.experienceField(edu, id);
                      })}
                    </td>
                    <td class="colon">:</td>
                    <td>
                      <span class="fldvalue"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>

            <span class="hd_inf wf w100">Education</span>

            <span class="wf cg job">
              <table class="isqdet f1">
                <tbody>
                  <tr>
                    <td class="fldname colr_isq">
                      {user.education.map((edu, id) => {
                        return this.educationField(edu, id);
                      })}{" "}
                    </td>
                    <td class="colon">:</td>
                    <td>
                      <span class="fldvalue"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>

            <span class="hd_inf wf w100">Social Profile</span>

            <span class="wf cg job">
              <table class="isqdet f1">
                <tbody>
                  <tr>
                    <td class="fldname colr_isq">
                      {user.socialMediaProfile.map((media, id) => {
                        return this.socialMediaField(media, id);
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewResume;
