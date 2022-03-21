import React from "react";
import Footer from "../../components/Footer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

function UserProfile(props) {
  const onAdd = () => {
    props.history.push("/addaddresscustomer");
  };

  const onBank = () => {
    props.history.push("/addbank");
  };

  const onAddlist = () => {
    props.history.push("/listofaddress");
  };

  const onBanklist = () => {
    props.history.push("/listofbank");
  };

  const onEditProfile = () => {
    props.history.push("/updateprofile");
  };

  const Signout = () => {
    sessionStorage.clear();
    props.history.push("/home");
  };

  const user = JSON.parse(sessionStorage.getItem("user"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
      <div className="userprofilebutton">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {user.firstName}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <a style={{ textDecoration: "none" }} href="/userprofile">
              My Profile
            </a>
          </MenuItem>
          <MenuItem>
            <a style={{ textDecoration: "none" }} href="/home">
              sign out
            </a>
          </MenuItem>
        </Menu>
      </div>
      <div className="userprofile">
        <div className="usercard">
          <img src="..." class="card-img-top" alt="..." height="100px" />
          <div className="usercard-body">
            <h5 className="usercard-title"></h5>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Name : {user.firstName}
            {user.lastName}
          </li>
          <li class="list-group-item">Email : {user.email}</li>
          <li class="list-group-item">Mobile : {user.mobile}</li>
        </ul>
      </div>
      <div className="mb">
        <button onClick={onAdd} className="btn btn-outline-info">
          Add New Address
        </button>
        <button onClick={onBank} className="btn btn-outline-info">
          Add New Bank
        </button>
      </div>
      <div className="mb">
        <button onClick={onAddlist} className="btn btn-outline-info">
          List of Address
        </button>
        <button onClick={onBanklist} className="btn btn-outline-info">
          List of Banks
        </button>
      </div>
      <div className="mb">
      <button onClick={onEditProfile} className="btn btn-outline-info">
          Edit Profile
        </button>
        </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default UserProfile;
