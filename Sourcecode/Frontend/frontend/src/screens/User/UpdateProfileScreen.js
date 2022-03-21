import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from '../../actions/userActions'

import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const UpdateProfile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();

  const updateProfileStore = useSelector((store) => store.userupdate);
  const { loading, response, error } = updateProfileStore;

  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId = user.userId;

  const onUpdate = () => {
    dispatch(
      updateProfile(firstName, lastName, email, password, mobile, userId)
    );
  };

  

  useEffect(() => {
    if (response && response.status === "OK") {
      console.log(response)
      sessionStorage.setItem('user', JSON.stringify(response.result))
      props.history.push("/userprofile");
    } else if (error) {
      alert("error");
    }
  }, [loading, response, error]);

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
      <Header title="Update Profile" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={user.firstName}
            className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder={user.lastName}
            className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={user.email}
            className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={user.password}
            className="form-control"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            placeholder={user.mobile}
            className="form-control"
          ></input>
        </div>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button outline color="primary" onClick={onUpdate} className="">
              Update Profile
            </Button>
          </Col>
        </FormGroup>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UpdateProfile;
