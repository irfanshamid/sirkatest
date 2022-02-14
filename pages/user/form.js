import { useEffect, useState } from "react";
import global from "../api/service";
import StyledCard from "../component/card";

export default function Home() {
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      name: {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
      },
      username: e.target.username.value,
      password: e.target.password.value,
      address: {
        city: e.target.city.value,
        street: e.target.street.value,
        number: e.target.number.value,
        zipcode: e.target.zipcode.value,
        geolocation: {
          lat: e.target.lat.value,
          long: e.target.long.value,
        },
      },
      phone: e.target.phone.value,
    };
    global.actions.submit_user(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledCard>
        <h3>Detail User</h3>
        <div className="row">
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">First Name</label>
              <input type="text" name="firstname" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Last Name</label>
              <input type="text" name="lastname" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Username</label>
              <input type="text" name="username" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Password</label>
              <input type="text" name="password" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Phone</label>
              <input type="text" name="phone" className="form-control" />
            </div>
          </div>
        </div>
      </StyledCard>

      <StyledCard>
        <h3>Address</h3>
        <div className="row">
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">City</label>
              <input type="text" name="city" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Street</label>
              <input type="text" name="street" className="form-control" />
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="form-groupd">
              <label className="form-label">Number</label>
              <input type="text" name="number" className="form-control" />
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="form-groupd">
              <label className="form-label">Zipcode</label>
              <input type="text" name="zipcode" className="form-control" />
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="form-groupd">
              <label className="form-label">Latitude</label>
              <input type="text" name="lat" className="form-control" />
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="form-groupd">
              <label className="form-label">Latitude</label>
              <input type="text" name="long" className="form-control" />
            </div>
          </div>
        </div>
      </StyledCard>

      <StyledCard>
        <div className="row justify-content-end">
          <div className="col-md-6 my-2 py-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="confirm"
              />
              <label className="form-check-label" htmlFor="confirm">
                Confirm data submitions is valid
              </label>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn btn-secondary w-100" type="button">
              Cancel
            </button>
          </div>
          <div className="col-md-3 my-2">
            <button className="btn btn-primary w-100" type="submit">
              Save
            </button>
          </div>
        </div>
      </StyledCard>
    </form>
  );
}
