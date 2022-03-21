import React from "react";
import { Button } from "reactstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../actions/customerActions";

const AddAddressCustomer = (props) => { 
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPinCode] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();

  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId=user.userId

  const addAddressStore = useSelector((store) => store.addaddress);
  const { loading, response, error } = addAddressStore;

  useEffect(() => {
    if (response && response.status == "OK") {
      props.history.push("/userprofile");
    } else if (error) {
      alert("error");
    }
  }, [loading, response, error]);

  const onAdd = () => {
    dispatch(addAddress(area, city, state, country, pincode, mobile, userId));
  };

  return (
    <div>
      <div class="cart">
        <div class="YUhWwv">
          <a class="_3SkBxJ" href="/cartpage">
            <svg
              class="V3C5bO"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="_1bS9ic"
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                fill="#fff"
              ></path>
            </svg>
            <span>Cart</span>
          </a>
        </div>
      </div>

      <div className="addaddresscustomer">
        <Header title="Add Address" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Area</label>
            <input
              onChange={(e) => {
                setArea(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="area"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="city"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">State</label>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="state"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="country"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">PinCode</label>
            <input
              onChange={(e) => {
                setPinCode(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="pin Code"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="mobile"
            />
          </div>
          <div className="mb-3">
            <Button outline color="primary" onClick={onAdd} className="">
              Add
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddAddressCustomer;
