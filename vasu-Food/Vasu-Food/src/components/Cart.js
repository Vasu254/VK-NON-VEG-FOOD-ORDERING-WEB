// import { Link, Outlet } from "react-router-dom";
import React from "react";
import CheckOut from "./CheckOut";
import { useState } from "react";
// import Error from "./Error";


function Cart() {
  const [showComponentA, setShowComponentA] = useState(false);

  const toggleComponent = () => {
    setShowComponentA(true);
   
  };

  return (
    <>
      <div className="container mt-4">.</div>
      <div className="px-3 px-sm-4 px-xl-5 pt-1 pb-4 pb-sm-5">
        <div className="row">
          {/* Items in cart*/}
          <div className="col-lg-8 col-md-7 pt-sm-2">
            {/* Item*/}
            <div className="d-sm-flex justify-content-between align-items-center mt-3 mb-4 pb-3 border-bottom">
              <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                <a
                  className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
                  href="/"
                >
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mzirtzltsxh9ajwynwqx"
                    width={120}
                    alt="Pizza"
                  />
                </a>
                <div className="pt-2">
                  <h3 className="product-title fs-base mb-2">
                    <a href="/">Pizza Pepperoni with Tomatoes</a>
                  </h3>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Size:</span>Medium
                  </div>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Base:</span>Standard
                  </div>
                  <div className="fs-lg text-accent pt-2">
                    $9.<small>00</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
                style={{ maxWidth: "9rem" }}
              >
                <label className="form-label" htmlFor="quantity1">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="quantity1"
                  defaultValue={1}
                  min={1}
                />
                <button className="btn btn-link px-0 text-danger" type="button">
                  <i className="ci-close-circle me-2" />
                  <span className="fs-sm">Remove</span>
                </button>
              </div>
            </div>
            {/* Item*/}
            <div className="d-sm-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
              <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                <a
                  className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
                  href="/"
                >
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jkxusre4aqxqcxg8cjhs"
                    width={120}
                    alt="Burger"
                  />
                </a>
                <div className="pt-2">
                  <h3 className="product-title fs-base mb-2">
                    <a href="/">Burger with Fries</a>
                  </h3>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Size:</span>XL
                  </div>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Sauce:</span>Barbeque
                  </div>
                  <div className="fs-lg text-accent pt-2">
                    $12.<small>00</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
                style={{ maxWidth: "9rem" }}
              >
                <label className="form-label" htmlFor="quantity2">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="quantity2"
                  defaultValue={1}
                  min={1}
                />
                <button className="btn btn-link px-0 text-danger" type="button">
                  <i className="ci-close-circle me-2" />
                  <span className="fs-sm">Remove</span>
                </button>
              </div>
            </div>
            {/* Item*/}
            <div className="d-sm-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
              <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                <a
                  className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
                  href="/"
                >
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/f91a7320b55ed40154a7e79c5e872f5b"
                    width={120}
                    alt="Drink"
                  />
                </a>
                <div className="pt-2">
                  <h3 className="product-title fs-base mb-2">
                    <a href="/">Hyderabadi Dum Biryani</a>
                  </h3>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Size:</span>Full
                  </div>
                  <div className="fs-lg text-accent pt-2">
                    $1.<small>00</small>
                  </div>
                </div>
              </div>
              <div
                className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
                style={{ maxWidth: "9rem" }}
              >
                <label className="form-label" htmlFor="quantity3">
                  Quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="quantity3"
                  defaultValue={3}
                  min={1}
                />
                <button className="btn btn-link px-0 text-danger" type="button">
                  <i className="ci-close-circle me-2" />
                  <span className="fs-sm">Remove</span>
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar*/}
          <div className="col-lg-4 col-md-5 pt-3 pt-sm-4">
            <div className="rounded-3 bg-secondary px-3 px-sm-4 py-4">
              <div className="text-center mb-4 pb-3 border-bottom">
                <h3 className="h5 mb-3 pb-1">Total</h3>
                <h4 className="fw-normal">
                  $24.<small>00</small>
                </h4>
              </div>
              <div className="mb-4">
                <label className="form-label mb-3" htmlFor="order-comments">
                  <span className="badge bg-info fs-xs me-2">Note</span>
                  Additional comments
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  id="order-comments"
                  defaultValue={""}
                />
              </div>
              <h3 className="h6 mb-4">Apply promo code</h3>
              <input
              className="form-control"
              type="text"
              placeholder="Enter promocode "
              required=""
              id="fd-address"
            />
            <i className="ci-card fs-lg me-2" />
              <button className="btn btn-outline-success d-block w-100" style={{color:'black'}} > Apply promocode</button>

                <i className="ci-card fs-lg me-2" />
                
                <button className="btn btn-primary d-block w-100" onClick={toggleComponent}> Proceed to Checkout</button>
               
              
            </div>
            {/* <Outlet/> */}
          </div>
        </div>
      </div>
     {showComponentA&&<CheckOut/>}
    </>
  );
}

export default Cart;
