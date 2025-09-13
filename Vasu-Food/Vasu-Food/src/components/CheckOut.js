import React from "react";
import cards from "../utils/cards.png";
function CheckOut() {
  return (
    <>
      <form
        className="needs-validation px-3 px-sm-4 px-xl-5 pt-sm-1 pb-4 pb-sm-5 cart-background"
        noValidate=""
      >
        <div className="row pb-4 pt-3">
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="fd-name">
              Your name<sup className="text-danger ms-1">*</sup>
            </label>
            <input
              className="form-control"
              type="text"
              required=""
              id="fd-name"
            />
            <div className="invalid-feedback">Please enter your name!</div>
          </div>
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="fd-phone">
              Phone number<sup className="text-danger ms-1">*</sup>
            </label>
            <input
              className="form-control"
              type="text"
              required=""
              id="fd-phone"
            />
            <div className="invalid-feedback">
              Please enter your phone number!
            </div>
          </div>
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="fd-time">
              Delivery time<sup className="text-danger ms-1">*</sup>
            </label>
            <select className="form-select" id="fd-time">
              <option value="asap">As soon as possible</option>
              <option value="11:00am">by 11:00 AM</option>
              <option value="11:15am">by 11:15 AM</option>
              <option value="11:30am">by 11:30 AM</option>
              <option value="11:45am">by 11:45 AM</option>
              <option value="12:00pm">by 12:00 PM</option>
              <option value="12:15pm">by 12:15 PM</option>
              <option value="12:30pm">by 12:30 PM</option>
              <option value="12:45pm">by 12:45 PM</option>
              <option value="1:00pm">by 1:00 PM</option>
            </select>
          </div>
          <div className="col-sm-6 mb-4">
            <div className="fs-sm fw-medium mb-3">Drop-off options</div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dropoff"
                defaultChecked=""
                id="hand-to-me"
              />
              <label className="form-check-label" htmlFor="hand-to-me">
                Hand it to me
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dropoff"
                id="at-door"
              />
              <label className="form-check-label" htmlFor="at-door">
                Leave it at my door
              </label>
            </div>
          </div>
        </div>
        <h2 className="h5 pb-3">Delivery address</h2>
        <div className="row mb-4">
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="fd-city">
              City<sup className="text-danger ms-1">*</sup>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="City"
              required=""
              id="fd-address"
            />
          </div>
          <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="fd-address">
              Address<sup className="text-danger ms-1">*</sup>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Street, Apartment number or suite"
              required=""
              id="fd-address"
            />
            <div className="invalid-feedback">Please enter your address!</div>
          </div>
          <div className="col-12 mb-4">
            <label className="form-label mb-3" htmlFor="fd-comments">
              <span className="badge bg-info fs-xs me-2">Note</span>Additional
              comments
            </label>
            <textarea
              className="form-control"
              rows={5}
              id="fd-comments"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-4 mb-sm-0">
            <h2 className="h5 pb-2">Cash on delivery</h2>
            <div className="form-check form-check-inline mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                defaultChecked=""
                id="cash"
              />
              <label className="form-check-label" htmlFor="cash">
                Pay with cash to the courier
              </label>
            </div>
           
            <h2 className="h5 mt-3 pt-4 pb-2">Online payment</h2>
            <div className="form-check form-check-inline pb-4">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="online"
              />
              <label className="form-check-label" htmlFor="online">
                Pay with:&nbsp;&nbsp;&nbsp;
                <img
                  className="d-inline-block align-middle"
                  src={cards}
                  style={{ width: 187 }}
                  alt="Cerdit Cards"
                />
              </label>
            </div>
            <button
              className="btn btn-primary d-block w-100 mt-3"
              type="submit"
            >
              Complete order
            </button>
          </div>
          <div className="col-sm-6">
            <div className="d-fle flex-column h-100 rounded-3 bg-secondary px-3 px-sm-4 py-4">
              <h2 className="h5 pb-3">Your total</h2>
              <div className="d-flex justify-content-between fs-md border-bottom pb-3 mb-3">
                <span>Subtotal:</span>
                <span className="text-heading">
                  $24.<small>00</small>
                </span>
              </div>
              <div className="d-flex justify-content-between fs-md border-bottom pb-3 mb-3">
                <span>Delivery:</span>
                <span className="text-heading">
                  $6.<small>00</small>
                </span>
              </div>
              <div className="d-flex justify-content-between fs-md mb-2">
                <span>Total:</span>
                <span className="text-heading fw-medium">
                  $30.<small>00</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CheckOut;
