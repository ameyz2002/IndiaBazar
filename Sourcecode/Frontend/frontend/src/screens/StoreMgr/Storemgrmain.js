import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'

const Storemgrmain = (props) => {
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

  const onaddproduct = () => {
    props.history.push('/storemanagingdepartment')
  }

  const onlistofproduct = () => {
    props.history.push('/storemgrprodlist')
  }

  const onproductlist = () => {
    props.history.push('/DetailProductListScreen')
  }

  const onstock = () => {
    props.history.push('/stockbilling')
  }

  return (
    <div>
      <img
        src="./images/header.jpg"
        class="card-img-top"
        alt="..."
        height="200px"
      />
      <Header title="Store Manager Department" />
      <div>
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
      </div>
      <div className="storemgrmain">
        <div className="btn-group">
          <button
            onClick={onaddproduct}
            style={{ marginRight: 4 + 'em' }}
            className="btn btn-lg btn-secondary">
            Add Product
          </button>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <button
            onClick={onlistofproduct}
            style={{ marginRight: 3 + 'em' }}
            className="btn btn-lg btn-secondary">
            List of Product
          </button>

          <ul></ul>

          <ul></ul>
          <button
            onClick={onproductlist}
            style={{ marginRight: 3 + 'em' }}
            className="btn btn-lg btn-secondary">
            Detail productlist
          </button>
          <ul></ul>
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
    </div>
  )
}

export default Storemgrmain
