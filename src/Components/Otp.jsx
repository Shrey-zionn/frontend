import React, { useState } from "react";
import signuppic from "../assets/helloworld.gif";
import "./otp.css";
import errorpic from "../assets/InvalidEmail.gif";
import * as api from "../axios";


const Ola = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const otpcheck = async (e) => {
    e.preventDefault();

    // let res = await api.otpVerify(e.target.value)
    // console.log(res);
    alert("done");
  };

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col order-2 order-lg-1">
            <div className="con-image mt-5">
              {error ? (
                <img className="img-signup" src={errorpic} alt="signuppic" />
              ) : (
                <img className="img-signup" src={signuppic} alt="signuppic" />
              )}
            </div>
          </div>
          <div className="txt col pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
            <div className="container">
              <form id="form1" onSubmit={otpcheck}>
                <div className="container">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                      <div className="inp-css mt-4">
                        <input
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          type="tel"
                          className="butto-2"
                          placeholder="enter otp"
                          pattern="[0-9]{6}"
                          title="otp should be of 6 digits"
                          required
                        />
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                  
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col"></div>
                    <div className="col">
                      <div className="sign-btn">
                        <button
                          form="form1"
                          type="submit"
                          className="btn-2-su"
                          onSubmit={otpcheck}
                        >
                          sign up
                        </button>
                      </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ola;
