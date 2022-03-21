import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import { getAllOrders } from '../../actions/ordermgrActions'
import axios from 'axios'
import { toast } from 'react-toastify'

const OrderDetailListScreen = (props) => {
  const [deliveryDetails, setDeliveryDetails] = useState('')
  const dispatch = useDispatch()
  const orderDetailedList = useSelector((store) => store.orderDetailedList)
  const { error, response, loading } = orderDetailedList

  useEffect(() => {
    dispatch(getAllOrders())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const update = (orderId, deliveryDetails) => {
    // const body = `${deliveryDetails}`
    axios
      .put(
        `http://localhost:8080/indiabazaar/orderMgr/updateDeliveryDetails/${orderId}`,
        `${deliveryDetails}`
      )
      .then(
        (response) => {
          console.log(response)
          toast.success('Updated successful.!')
          dispatch(getAllOrders())
        },
        (error) => {
          console.log(error)
          toast.error('Updation failed.!')
        }
      )
  }

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
            className="s-input s-input__search js-search-field "
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
              <th>Action</th>
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
                    <td>
                      <input
                        type="text"
                        name="deliveryDetails"
                        placeholder={order.deliveryDetails}
                        class="form-control input-text"
                        onChange={(e) => {
                          setDeliveryDetails(e.target.value)
                        }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-success badge-pill"
                        onClick={() => update(order.orderId, deliveryDetails)}>
                        Update Delivery Details
                      </button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <button>
          <a type="button" className="btn btn-light" href="/OrderManagerMain">
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

export default OrderDetailListScreen
