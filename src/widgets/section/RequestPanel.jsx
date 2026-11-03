import { useState } from "react";
import api from "@/shared/api";

function RequestPanel(){
let [contactInfo, setContactInfo] = useState({name: '', email: '', message: ''})
let [error, setError] = useState(false)



let inputPanel = ((infoType, typeValue, inputType, placeholderType)=>{


return (
   <input 
      value={contactInfo[infoType]}
      type={typeValue} 
      onChange={(event)=>{
    setContactInfo(prev => ({
    ...prev,
    [inputType]: event.target.value
  }));
      }}
      placeholder={placeholderType}/>
)
})

return (
    <section className='flooring_Request'>
<div className="container">
  <div className="flooring_Request_main">
    <div className="flooring_Request_left">
     <div className="flooring_Request_info">
      <h2>Contact Us</h2>
    </div>
    <div className="flooring_Request_panel">
      <div className="flooring_Request_panel_info">
      <div className="flooring_Request_panel_inputs">
   {inputPanel('name', 'text', 'name', 'Your name')}
   {inputPanel('email', 'email', 'email', 'Your email')}
      </div>
      <textarea
            value={contactInfo.message}
            onChange={(event)=>{
    setContactInfo(prev => ({
    ...prev,
    message: event.target.value
  }));
      }}
      placeholder='Message'></textarea>
{!contactInfo.email.trim()  && error && (
  <p style={{ color: 'red' }}>
    Please enter your email address.
  </p>
)}
      </div>
      <button 
      type="button" 
      onClick={()=>{
if (!contactInfo.email.trim()) {
  setError(true);
  return;
} else {
  setError(false);
}
let contact =  JSON.parse(localStorage.getItem('emailInfo')) || [];

contact.push(contactInfo);

api({contactInfo, contact})


  setContactInfo({
  name: '',
  email: '',
  message: ''
});
      }}
      >Submit</button>
    </div>
    </div>
  </div>
</div>
  </section>
)
}


export default RequestPanel