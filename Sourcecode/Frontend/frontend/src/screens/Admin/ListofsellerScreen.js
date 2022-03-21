import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSellers } from '../../actions/adminActions'
import Footer from '../../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListofSellersScreen = (props) => {
  const dispatch = useDispatch()
  const sellers = useSelector((store) => store.sellers)
  const { error, response, loading } = sellers

  useEffect(() => {
    dispatch(getSellers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onDelete = (sellerId) => {
    axios
      .delete(
        `http://localhost:8080/indiabazaar/admin/deleteSeller/${sellerId}`
      )
      .then(
        (response) => {
          console.log(response)
          toast.success('Deleted.!')
          dispatch(getSellers())
        },
        (error) => {
          console.log(error)
          toast.error('Not deleted.!')
        }
      )
  }

  return (
    <div>
      <div className="listofsellers">
        <Header title="List of All Sellers" />
        <div className="listofusertable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.result &&
                response.result.length > 0 &&
                response.result.map((seller) => {
                  return (
                    <tr>
                      <th>{seller.brandName}</th>
                      <td>{seller.contact}</td>
                      <td>{seller.address}</td>
                      <td>
                        <button
                          className="btn btn-danger badge-pill"
                          onClick={() => {
                            onDelete(seller.sellerId)
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
      </div>
      <div class="container">
        <button>
          <a type="button" className="btn btn-light" href="/admindepartment">
            Admin Home Page
          </a>
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ListofSellersScreen
