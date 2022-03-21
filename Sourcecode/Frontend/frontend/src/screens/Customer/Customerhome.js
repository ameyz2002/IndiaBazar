import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Card } from 'react-bootstrap'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'

const Customerhome = (props) => {
  const onProducts = () => {
    props.history.push('/custprodlist')
  }

  const onOrders = () => {
    props.history.push('/orderlist')
  }

  const Signout = () => {
    sessionStorage.removeItem('user')
    props.history.push('/home')
  }

  const user = JSON.parse(sessionStorage.getItem('user'))
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div className="custhome">
        <div class="cart">
          <div class="YUhWwv">
            <a class="_3SkBxJ" href="/cartitemlist">
              <svg
                class="V3C5bO"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  class="_1bS9ic"
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"></path>
              </svg>
              <span>Cart</span>
            </a>
          </div>
        </div>
        <div>
          <Button
            className="btn btn-outline-dark"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}>
            {user.firstName}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem>
              <a style={{ textDecoration: 'none' }} href="/userprofile">
                My Profile
              </a>
            </MenuItem>
            <MenuItem onClick={Signout}>Sign out</MenuItem>
          </Menu>
        </div>
        <div className="btn-group productbtn">
          <button
            style={{ marginRight: 4 + 'em' }}
            onClick={onProducts}
            type="button"
            className="btn btn-dark ">
            Products
          </button>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <button
            type="button"
            className="btn btn-dark productbtn"
            onClick={onOrders}
            style={{ marginRight: 4 + 'em' }}>
            My Orders
          </button>
        </div>
        <div className="tomer">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div class="card">
                  <img
                    src="./images/electronics.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card">
                  <img
                    src="./images/fashion.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card">
                  <img
                    src="./images/groceries.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                  </div>
                </div>
              </div>
              <li></li>
              <div className="col-sm">
                <div class="card">
                  <img
                    src="./images/furniture.jpg"
                    class="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card">
                  <img
                    src="./images/cookware.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card">
                  <img
                    src="./images/jwellery.jpg"
                    class="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customerhome
