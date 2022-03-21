import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItemList } from '../../actions/customerActions'
import Footer from '../../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

const CartitemList = (props) => {
  const dispatch = useDispatch()
  const cartitemlist = useSelector((store) => store.cartitemlist)
  const { error, response, loading } = cartitemlist

  const user = JSON.parse(sessionStorage.getItem('user'))
  const userId = user.userId

  useEffect(() => {
    dispatch(getCartItemList(userId))
  }, [])

  useEffect(() => {}, [error, response, loading])

  const placeOrder = (cartId) => {
    axios
      .post(`http://localhost:8080/indiabazaar/customer/placeOrder/${cartId}`)
      .then(
        (response) => {
          console.log(response)
          toast.success('Added successful.!')
          dispatch(getCartItemList(userId))
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
        <Header title="Cart List" />

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
              <th>CartId</th>
              <th>User Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {response &&
              response.result &&
              response.result.length > 0 &&
              response.result.map((cart) => {
                return (
                  <tr>
                    <td>{cart.cartId}</td>
                    <td>
                      {cart.user.firstName} {cart.user.lastName}
                    </td>
                    <td>{cart.product.productName}</td>
                    <td>{cart.product.price}</td>
                    <td>{cart.quantity}</td>
                    <td>{cart.quantity * cart.product.price}</td>
                    <td>
                      <button
                        className="btn btn-success badge-pill"
                        onClick={() => placeOrder(cart.cartId)}>
                        Place order
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
  )
}

export default CartitemList
