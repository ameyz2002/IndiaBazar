import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'

const AdminDepartmentScreen = (props) => {
  const Signout = () => {
    sessionStorage.clear()
    props.history.push('/signin')
  }

  const onProducts = () => {
    props.history.push('/productlist')
  }

  const onfeedback = () => {
    props.history.push('/listoffeedback')
  }

  const onratings = () => {
    props.history.push('/ratings')
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
      <Header title="Admin Department" />
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
          <MenuItem>
            <a style={{ textDecoration: 'none' }} href="/signin">
              Sign out
            </a>
          </MenuItem>
        </Menu>
      </div>

      <div className="storemgrmain">
        <div className="btn-group ">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ marginRight: 3 + 'em' }}>
            User
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/adduser">
                Add User
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/addseller">
                Add Seller
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/userlist">
                User List
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/sellerlist">
                Seller List
              </a>
            </li>
          </ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ marginRight: 3 + 'em' }}>
            Category
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/addcategory">
                Add Category
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/listofcategories">
                List of Category
              </a>
            </li>
          </ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>

          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ marginRight: 3 + 'em' }}>
            Payment
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/staffsalary">
                Staff Salary
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/stockpayment">
                Stock Payment
              </a>
            </li>
          </ul>
          <ul>
            <ul></ul>
            <ul></ul>
          </ul>
          <button
            onClick={onProducts}
            style={{ marginRight: 3 + 'em' }}
            className="btn btn-secondary btn-lg">
            Products
          </button>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <button
            onClick={onfeedback}
            style={{ marginRight: 3 + 'em' }}
            className="btn btn-secondary btn-lg">
            Feedback
          </button>

          <ul></ul>
          <ul></ul>
          <ul></ul>
          <button
            onClick={onratings}
            style={{ marginRight: 3 + 'em' }}
            className="btn btn-secondary btn-lg">
            Ratings
          </button>
        </div>
      </div>
      <div>
        <li></li>
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

export default AdminDepartmentScreen
