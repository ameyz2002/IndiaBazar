import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/adminActions'
import Footer from '../../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

const StoremgrProdlist = (props) => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.products)
  const { error, response, loading } = products

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onDelete = (productId) => {
    axios
      .delete(
        `http://localhost:8080/indiabazaar/storeMgr/deleteProduct/${productId}`
      )
      .then(
        (response) => {
          console.log(response)
          toast.success('Deleted.!')
          dispatch(getProducts())
        },
        (error) => {
          console.log(error)
          toast.error('Not deleted.!')
        }
      )
  }

  return (
    <div>
      <div className="user">
        <Header title="Product List" />

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
              <th>Quantity</th>
              <th>Price</th>
              <th>Discount</th>
              <th>AvgRating</th>
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
                    <th>{product.productName}</th>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                    <td>{product.avgRating}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => {
                          onDelete(product.productId)
                        }}>
                        Delete
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
          <a type="button" className="btn btn-light" href="/storemgrmain">
            Store Home Page
          </a>
        </button>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default StoremgrProdlist
