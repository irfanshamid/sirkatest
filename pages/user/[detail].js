import { useLayoutEffect, useState } from "react";
import global from "../api/service";
import { useRouter } from "next/router";
import StyledCard from "../component/card";
/* eslint no-use-before-define: 0 */ // --> OFF

export default function Detail() {
  const [detail, setDetails] = useState([]);
  const router = useRouter();

  useLayoutEffect(() => {
    getDetails(router.query.detail);
  }, []);

  const getDetails = (id) => {
    global.actions.get_detail_user(id).then((res) => {
      setDetails(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      id: detail.id,
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
    global.actions.edit_user(router.query.detail, data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledCard>
        <h3>Detail User</h3>
        <div className="row">
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstname"
                className="form-control"
                defaultValue={detail.name ? detail.name.firstname : ""}
              />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                defaultValue={detail.name ? detail.name.lastname : ""}
              />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                defaultValue={detail ? detail.email : ""}
              />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                defaultValue={detail.username ? detail.username : ""}
              />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                defaultValue={detail.password ? detail.password : ""}
              />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                defaultValue={detail.phone ? detail.phone : ""}
              />
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
              <input
                type="text"
                name="city"
                className="form-control"
                defaultValue={detail.address ? detail.address.city : ""}
              />
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="form-groupd">
              <label className="form-label">Street</label>
              <input
                type="text"
                name="street"
                className="form-control"
                defaultValue={detail.address ? detail.address.street : ""}
              />
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="form-groupd">
              <label className="form-label">Number</label>
              <input
                type="text"
                name="number"
                className="form-control"
                defaultValue={detail.address ? detail.address.number : ""}
              />
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="form-groupd">
              <label className="form-label">Zipcode</label>
              <input
                type="text"
                name="zipcode"
                className="form-control"
                defaultValue={detail.address ? detail.address.zipcode : ""}
              />
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="form-groupd">
              <label className="form-label">Latitude</label>
              <input
                type="text"
                name="lat"
                className="form-control"
                defaultValue={
                  detail.address ? detail.address.geolocation.lat : ""
                }
              />
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="form-groupd">
              <label className="form-label">Latitude</label>
              <input
                type="text"
                name="long"
                className="form-control"
                defaultValue={
                  detail.address ? detail.address.geolocation.long : ""
                }
              />
            </div>
          </div>
        </div>
      </StyledCard>

      {router.query.index === "edit" ? (
        <StyledCard>
          <div className="row justify-content-end">
            <div className="col-md-6 my-2 py-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
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
      ) : (
        <StyledCard>
          <div className="row justify-content-end">
            <div className="col-md-3 my-2">
              <button
                className="btn btn-secondary w-100"
                type="button"
                onClick={() => router.push("/user")}
              >
                Back
              </button>
            </div>
          </div>
        </StyledCard>
      )}
    </form>
  );
}
