import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailRegex.test(newEmail));
  };
  return (
    <div className="whole">
      <div className="main">
        <form action="">
          <div className="heading">
            <h2>Registration Form</h2>
          </div>
          <div className="names">
            <div className="details">
              <input type="text" name="" id="fName" placeholder="First Name" />
            </div>

            <div className="details">
              <input type="text" id="lName" placeholder="Last Name" />
            </div>
          </div>

          <div className="info">
            <div className="details">
              <input
                type="email"
                name=""
                id="eMail"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              {!isValidEmail && <p style={{"color":"red"}}>Please enter a valid email address.</p>}
            </div>
            <div className="details">
              <input type="number" name="" id="mblNumber" placeholder="Mobile Number" maxLength={10}/>
            </div>
          </div>

          <div className="basic">
            <div className="details">
              <input type="date" name="" id="" placeholder="Date of Birth" />
            </div>

            <div className="details">
              <input type="text" name="" id="" placeholder="Address" />
            </div>
          </div>
          <div>
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
