import React from "react";
import logo1 from '../utils/logo1.jpg'
export default function Footer() {
  return (
    <>
      <footer className="footer bg-black custom-opacity pt-5" id="footer">
        <div className="container pt-2">
          <div className="row pb-2">
            <div className="col-lg-2 col-sm-4 pb-2 mb-4">
              <div className="mt-n1">
                <a className="d-inline-block align-middle" id="download" href="/">
                  <img
                    className="d-block mb-4"
                    src={logo1}
                    width="117"
                    alt="Vasu-Foods"
                    style={{borderRadius:'20px'}}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Join us</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Careers
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Restaurants
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Become a Courier
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Let us help you</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Help Center
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Support
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4">
              <div className="widget widget-links widget-light pb-2 mb-4">
                <h3 className="widget-title text-light">Follow us</h3>
                <ul className="widget-list">
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      LinkedIn
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Twitter
                    </a>
                  </li>
                  <li className="widget-list-item">
                    <a className="widget-list-link" href="/">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-8" id="download">
              <div className="widget pb-2 mb-4">
                <h3 className="widget-title text-light pb-1 btn">
                  Download our app
                </h3>
                <div className="d-flex flex-wrap">
                  <a
                    className="btn-market btn-apple border border-light me-3 mb-2 download"
                    href="/"
                    role="button"
                    
                  >
                    <span className="btn-market-subtitle btn" id="download">
                      Download on the
                    </span>
                    
                    <span className="btn-market-title btn" id="download">App Store</span>
                  </a>
                  <a
                    className="btn-market btn-google border border-light mb-2 btn download"
                    href="/"
                    role="button"

                  >
                    <span className="btn-market-subtitle btn" id="download">Download on the</span>
                    <span className="btn-market-title btn" id="download">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-light mt-md-2 mb-3" />
          <div className="d-md-flex justify-content-between pt-4 pb-1">
            <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
              © All rights reserved. Made by {" "}
              <a
                className="text-light"
                href="/"
                rel="noopener"
              >
                Vasu-Foods
              </a>
            </div>
            <div className="widget widget-links widget-light pb-4">
              <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="/">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="widget-list-item ms-4">
                  <a className="widget-list-link fs-ms" href="/">
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
