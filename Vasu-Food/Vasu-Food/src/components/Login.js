import React, { useState } from "react";

import NewUser from "./NewUser";

function Login() {
  const [newuser, setnewuser] = useState({ cond: false, text: "Login" });
  const callNewUser = () => {
    setnewuser({ cond: true, text: "Sign Up" });
  };
  return (
    <>
      <div className="container mt-4">.</div>
      {newuser.cond === false && (
        <div class="container col-xl-10 col-xxl-8 px-4 py-4">
          <div class="row align-items-center g-lg-5 py-5 ">
            <div class="col-md-10 mx-auto col-lg-5 ">
              <form
                class="p-4 p-md-5 border rounded-3 bg-body-tertiary "
                method="post"
              >
                {/* <div class="alert alert-warning" role="alert"></div> */}

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
                  {newuser.text}
                </button>
                <hr class="my-4" />
                <small class="text-body-secondary p">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <div class="floating">
                  <button
                    type="button"
                    class="btn btn-secondary mt-3"
                    onClick={callNewUser}
                  >
                    New-User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {newuser.cond === true && <NewUser newuser />}
    </>
  );
}

export default Login;
