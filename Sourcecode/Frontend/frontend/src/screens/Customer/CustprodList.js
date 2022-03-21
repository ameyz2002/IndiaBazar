import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/adminActions'
import Footer from '../../components/Footer'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const CustProdList = (props) => {
  const [quantity = 1, setQuantity] = useState('')
  const dispatch = useDispatch()
  const products = useSelector((store) => store.products)
  const { error, response, loading } = products

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const user = JSON.parse(sessionStorage.getItem('user'))

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const addToCart = (userId, productId, quantity) => {
    const body = {
      userId,
      productId,
      quantity,
    }
    axios
      .post(`http://localhost:8080/indiabazaar/customer/addToCart`, body)
      .then(
        (response) => {
          console.log(response)
          toast.success('Added successful.!')
          dispatch(getProducts())
        },
        (error) => {
          console.log(error)
          toast.error('Addition failed.!')
        }
      )
  }

  return (
    <div>
      <div className="user">
        <Header title="Product List" />
        <div className="custhome">
          <div class="cart">
            <div class="YUhWwv">
              <a class="_3SkBxJ" href="/cartpage">
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
                <a style={{ textDecoration: 'none' }} href="/home">
                  sign out
                </a>
              </MenuItem>
            </Menu>
          </div>

          <div className="search">
            <input
              name="q"
              type="text"
              placeholder="Search…"
              value=""
              autocomplete="off"
              maxlength="240"
              class="s-input s-input__search js-search-field "
              aria-label="Search"
              aria-controls="top-search"
              data-controller="s-popover"
              data-action="focus->s-popover#show"
              data-s-popover-placement="bottom-start"></input>
          </div>
          <ul></ul>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Available Quantity</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Seller BrandName</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.result &&
                response.result.length > 0 &&
                response.result.map((product) => {
                  return (
                    <tr>
                      <td>{product.productName}</td>
                      <td>{product.description}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>{product.discount}</td>
                      <td>{product.seller.brandName}</td>
                      <td>
                        <input
                          type="text"
                          name="quantity"
                          class="form-control input-number"
                          onChange={(e) => {
                            setQuantity(e.target.value)
                          }}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            addToCart(user.userId, product.productId, quantity)
                          }
                          className="btn btn-success badge-pill">
                          Add to Cart
                        </button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
        <div class="container">
          <button>
            <a type="button" className="btn btn-light" href="/customerhome">
              Home Page
            </a>
          </button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default CustProdList
