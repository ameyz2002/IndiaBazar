import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress} from '../../actions/customerActions'
import Footer from "../../components/Footer";

const ListofAddress = (props) => {
  const dispatch = useDispatch()
  const address = useSelector((store) => store.address)
  const { error, response, loading } = address

  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId=user.userId

  useEffect(() => {
    dispatch(getAddress(userId))
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <div className="listofusers">
        <Header title="List of All Address" />
        <div className="listofusertable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>AddressId</th>
                <th>Area</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>PinCode</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.result &&
                response.result.length > 0 &&
                response.result.map((address) => {
                  return (
                    <tr>
                      <td>{address.addressId}</td>
                      <td>{address.area}</td>
                      <td>{address.city}</td>
                      <td>{address.state}</td>
                      <td>{address.country}</td>
                      <td>{address.pincode}</td>
                      <td>{address.mobile}</td>
                      <td>
                        <button className="btn btn-danger badge-pill">
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
      <button>
          <a type="button" className="btn btn-light" href="/userprofile">
            Home Page
          </a>
        </button>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default ListofAddress
