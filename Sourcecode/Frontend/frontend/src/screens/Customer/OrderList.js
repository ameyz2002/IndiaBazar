import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderList } from '../../actions/customerActions'
import Footer from '../../components/Footer'

const OrderList = (props) => {
  const dispatch = useDispatch()
  const orderList = useSelector((store) => store.orderList)
  const { error, response, loading } = orderList

  const user = JSON.parse(sessionStorage.getItem('user'))
  const userId = user.userId

  useEffect(() => {
    dispatch(getOrderList(userId))
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <div className="user">
        <Header title="Order List" />

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
              <th>OrderId</th>
              <th>User Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Delivery Details</th>
            </tr>
          </thead>
          <tbody>
            {response &&
              response.result &&
              response.result.length > 0 &&
              response.result.map((order) => {
                return (
                  <tr>
                    <td>{order.orderId}</td>
                    <td>
                      {order.user.firstName} {order.user.lastName}
                    </td>
                    <td>{order.product.productName}</td>
                    <td>{order.product.price}</td>
                    <td>{order.quantity}</td>
                    <td>{order.quantity * order.product.price}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.deliveryDetails}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div className="container">
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

export default OrderList
