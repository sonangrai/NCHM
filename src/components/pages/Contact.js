import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacts - NCHM</title>
      </Helmet>
      <div className="contact__page">
        <div className="left__cont">
          <div className="upper">
            <h3>Contact Us</h3>
            <p>Feel Free to keep in touch with us</p>
          </div>
          <div className="lower">
            <ul>
              <li>
                <a href="tel:+9770123456">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 384 384"
                  >
                    <g>
                      <g>
                        <path d="M362.667,266.667c-26.56,0-52.267-4.267-76.16-12.16c-7.36-2.347-15.787-0.64-21.653,5.227l-46.933,47.04    c-60.48-30.72-109.867-80.107-140.587-140.48l46.933-47.147c5.867-5.867,7.573-14.293,5.227-21.653    c-7.893-23.893-12.16-49.6-12.16-76.16C117.333,9.493,107.84,0,96,0H21.333C9.6,0,0,9.493,0,21.333    C0,221.653,162.347,384,362.667,384c11.84,0,21.333-9.493,21.333-21.333V288C384,276.16,374.507,266.667,362.667,266.667z" />
                      </g>
                    </g>
                  </svg>{" "}
                  +977 1123456
                </a>
              </li>
              <li>
                <a href="mailto:somthing@hotmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 433.664 433.664"
                  >
                    <g>
                      <g>
                        <path d="M229.376,271.616c-4.096,2.56-8.704,3.584-12.8,3.584s-8.704-1.024-12.8-3.584L0,147.2v165.376c0,35.328,28.672,64,64,64    h305.664c35.328,0,64-28.672,64-64V147.2L229.376,271.616z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M369.664,57.088H64c-30.208,0-55.808,21.504-61.952,50.176l215.04,131.072l214.528-131.072    C425.472,78.592,399.872,57.088,369.664,57.088z" />
                      </g>
                    </g>
                  </svg>{" "}
                  someting@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right__cont">
          <form>
            <div className="form-item inline-form">
              <div className="inline-item">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="inline-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="something@gmail.com"
                />
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Message Here"></textarea>
            </div>
            <div className="form-item">
              <button type="submit">
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 448.011 448.011"
                >
                  <g>
                    <g>
                      <path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4    l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472    l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z" />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
