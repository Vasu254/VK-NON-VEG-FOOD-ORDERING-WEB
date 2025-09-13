import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Vegetarian from "./Vegetarian";
function Items() {
  return (
    <>
     <div className="container mt-4">.</div>
      <div className="d-flex justify-content-around mt-5">
        <button type="button" class="btn btn-light">
          <Link to="allitems" id="itembtn">
            All-Items
          </Link>
        </button>
        <button type="button" className="btn btn-warning">
          <Link to="veg" id="itembtn">
            Vegetarian
          </Link>
        </button>
        <button type="button" class="btn btn-light">
          <Link to="nonveg" id="itembtn">
            Non-Vegetarian
          </Link>
        </button>
      </div>

      <Outlet />
    </>
  );
}

export default Items;
