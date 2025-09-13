import React from "react";
// import { Link } from 'react-router-dom'
function NewUser() {
  return (
    <>
    <div className="container mt-4">.</div>
      <div class="container col-xl-10 col-xxl-8 px-4 py-4">
        <div class="row align-items-center g-lg-5 py-5 ">
          <div class="col-md-10 mx-auto col-lg-5 ">
            <form
              class="p-4 p-md-5 border rounded-3 bg-body-tertiary "
              //   method="post"
            >
              {/* <div class="alert alert-warning" role="alert"></div> */}
              <div class="form-floating mb-3 ">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Sreekanth"
                />
                <label for="username">Name</label>
              </div>
              <div class="form-floating mb-3 ">
                <input
                  type="number"
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="939829xxxx"
                />
                <label for="username">Phone </label>
              </div>
              <div class="form-floating mb-3 ">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="name@example.com"
                />
                <label for="username">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <label for="password">Password</label>
              </div>

              <button class="w-100 btn btn-lg btn-warning" type="submit">
                Sign up
              </button>
              {/* <hr class="my-4" /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUser;
