import React from "react";

function Download() {
  return (
    <>
      <section
        className="bg-primary bg-size-cover bg-position-center pt-5"
        style={{ backgroundImage: "url(img/food-delivery/mobile-app-bg.jpg)" }}
      >
        <div className="container pt-2 pt-sm-0">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-sm-6 offset-xl-2 offset-lg-1 mt-md-n5 text-center text-sm-start">
              <h2 className="text-light mb-3">
                Order food on the go with Cartzilla App
              </h2>
              <p className="text-light opacity-70 mb-0 d-block d-sm-none d-md-block">
                Pay with in app wallet, collect loyalty points, track your
                orders in real time and much more.
              </p>
              <div className="mt-4 pt-2">
                <a
                  className="btn-market btn-apple me-3 mb-2"
                  href="/"
                  role="button"
                >
                  <span className="btn-market-subtitle">Download on the</span>
                  <span className="btn-market-title">App Store</span>
                </a>
                <a
                  className="btn-market btn-google mb-2"
                  href="/"
                  role="button"
                >
                  <span className="btn-market-subtitle">Download on the</span>
                  <span className="btn-market-title">Google Play</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-sm-6 offset-lg-1 pt-5 pt-sm-3">
              <img
                className="d-block mx-auto mx-sm-0"
                src="img/food-delivery/phone.png"
                width={331}
                alt="Mobile App Screen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
