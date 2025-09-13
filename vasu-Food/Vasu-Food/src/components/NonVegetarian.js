import React from "react";
import data from "../utils/Veg.json";
import { useState } from "react";
function NonVegetarian() {

  const [search, setSearch] = useState("");
  return (
    <>
    <div className="container">
        <input
          type="text"
          className="form-control mt-5 bg-grey mb-3"
          placeholder="Search for Non Vegetarian items..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container pt-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.nonveg.filter((item) => {
              return search.toLowerCase === ""
                ? item
                : item.itemName.toLowerCase().includes(search);
            }).map((item, index) => (
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-img-container">
                  <img
                    className="card-img-top"
                    src={item.photoURL}
                    alt="Thumbnail"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>{item.itemName}</strong>
                    <p>{item.description}</p>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View Item
                      </button>
                    </div>
                    <small className="text-body-secondary">
                      <strong>Price: </strong>
                      {item.priceInIndia}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default NonVegetarian;
