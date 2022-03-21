import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'

const OrderManagerMainScreen = (props) => {
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
      <img
        src="./images/header.jpg"
        class="card-img-top"
        alt="..."
        height="200px"
      />
      <Header title="Order Managing Department" />
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

      <div
        class="btn-group"
        class="position-absolute top-50 start-50 translate-middle">
        <a
          href="/orderdetaillist"
          style={{ marginRight: 3 + 'em' }}
          class="btn btn-lg btn-secondary"
          aria-current="page">
          Order Detail List
        </a>
        <a href="/ordersummery" class="btn btn-lg btn-secondary">
          Summery
        </a>
      </div>
      <div className="col-sm">
        <div className="adminlogo">
          <img src="./images/logo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"></h5>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default OrderManagerMainScreen
