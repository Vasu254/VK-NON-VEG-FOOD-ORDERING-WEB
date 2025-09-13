import React from "react";

function Contact() {
  return (
    <>
    <div className="container mt-4">.</div>
      <div className="container mt-4">
        {" "}
        <div className="card-body position-relative zindex-2 py-5 download custom-opacity">
          <form className="mx-auto" style={{ maxWidth: 800 }}>
            <h2 className="h1 card-title text-center pb-4">Contact Us...</h2>
            <div className="row g-4">
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your name"
                  required=""
                  id="name"
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="company">
                  City
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="City"
                  id="city"
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email address"
                  required=""
                  id="email"
                />
              </div>
              <div className="col-sm-6">
                <label className="form-label fs-base" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Phone number"
                  id="phone"
                />
              </div>
              <div className="col-sm-12">
                <label className="form-label fs-base" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  className="form-control form-control-lg"
                  rows={6}
                  placeholder="Enter your message here..."
                  required=""
                  id="message"
                  defaultValue={""}
                />
              </div>
              {/* <div className="col-sm-12">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="seo" />
            <label className="form-check-label fs-base" htmlFor="seo">
              SEO Website Audit
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="email-marketing"
              defaultChecked=""
            />
            <label className="form-check-label fs-base" htmlFor="email-marketing">
              Email Marketing
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="social" />
            <label className="form-check-label fs-base" htmlFor="social">
              Social Networks
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="content-marketing"
            />
            <label
              className="form-check-label fs-base"
              htmlFor="content-marketing"
            >
              Content Marketing
            </label>
          </div>
        </div> */}
              <div className="col-sm-12 text-center pt-4">
                <button className="btn btn-lg btn-success" type="submit">
                  Send Mail
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
