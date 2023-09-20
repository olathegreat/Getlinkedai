import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Oval} from 'react-loader-spinner';

import { toast } from 'react-toastify';
import "./ContactPage.css";
import axios from "../../api/axios";

const url = "/hackathon/contact-form"

const ContactPage = () => {
  const [formDetails, setFormDetails] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formSubmit = async (e) =>{
    e.preventDefault();

    if(formDetails.email !==""   && formDetails.first_name !=="" && formDetails.message !==""){
        setIsLoading(true);

        try{

            const response = await axios.post(url, formDetails,{
                Headers:{
                    "Content-Type" : "application/json"
                }
            })
            console.log(response);
            toast.success('successfully sent!', {
                position: "top-right", 
                autoClose: 5000,    
                hideProgressBar: false, 
                closeOnClick: true,    
                pauseOnHover: true,   
                draggable: true,  
              })
              setFormDetails({...formDetails, email: "", first_name:"", message:"" });
              setIsLoading(false);

        }catch(err){
            
            toast.error(err.message, {
                position: "top-right", 
                autoClose: 3000,    
                hideProgressBar: false, 
                closeOnClick: true,    
                pauseOnHover: true,   
                draggable: true,  
              })
              setError(err.mesage);
            setIsLoading(false);

        }
       
    }else{
        setError("You need to fill all fields");
        console.log(formDetails);
    }
  }
 
  return (
    <div className="contact-page">
      <Nav />

      <main>
        <ToastContainer/>
        <div className="left">
          <h3>Get in touch</h3>

          <p>
            Contact
            <br></br>
            Information
          </p>

          <p>
            27, Alara Street <br></br>
            Yaba 100012 <br></br>
            Lagos State
          </p>

          <p>Call Us: 07067981819</p>

          <p>
            We are open from Monday-Friday
            <br></br>
            08:00am-05:00pm
          </p>

          <h5>Share on</h5>

          <div className="social-media">
            <img src="/images/instagram.png" alt="instagram-icon" />
            <img src="/images/twitter.png" alt="twitter-icon" />
            <img src="/images/facebook.png" alt="facebook-icon" />
            <img src="/images/linkedin.png" alt="linkedin-icon" />
          </div>
        </div>

        <div className="right">
          <form onSubmit={formSubmit}>
            <h4>
              Questions or need assistance?<br></br>
              Let us know about it!
            </h4>

            <p className="mobile-only">
              {" "}
              Email us to ask any question related to our event
            </p>

            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFormDetails({ ...formDetails, first_name: e.target.value });
              }}
              value={formDetails.first_name}
            />
            <input
              type="email"
              placeholder="Mail"
              onChange={(e) => {
                setFormDetails({ ...formDetails, email: e.target.value });
              }}
              value={formDetails.email}
            />
            <textarea
              placeholder="Message"
              onChange={(e) => {
                setFormDetails({ ...formDetails, message: e.target.value });
              }}
              value={formDetails.message}
            />

            <p>{error}</p>

            <div className="button-wrapper">
                {
                    isLoading ? <Oval
                    height={80}
                    width={80}
                    color="rgba(255, 255,255, .8)"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="rgba(255, 255,255, .3)"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  
                  /> :   <button type="submit">Submit</button>
                }
            
            </div>

          </form>
        </div>

        <div className="mobile-sm-link">
          <h5>Share on</h5>

          <div className="social-media">
            <img src="/images/instagram.png" alt="instagram-icon" />
            <img src="/images/twitter.png" alt="twitter-icon" />
            <img src="/images/facebook.png" alt="facebook-icon" />
            <img src="/images/linkedin.png" alt="linkedin-icon" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
