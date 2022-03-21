import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBank} from '../../actions/customerActions'
import Footer from "../../components/Footer";

const ListofBank = (props) => {
  const dispatch = useDispatch()
  const bank = useSelector((store) => store.bank)
  const { error, response, loading } = bank

  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId=user.userId

  useEffect(() => {
    dispatch(getBank(userId))
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <div className="listofusers">
        <Header title="List of All Bank" />
        <div className="listofusertable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ifsccode</th>
                <th>AccountNo</th>
                <th>HolderName</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.result &&
                response.result.length > 0 &&
                response.result.map((bank) => {
                  return (
                    <tr>
                      <td>{bank.ifscCode}</td>
                      <td>{bank.accNo}</td>
                      <td>{bank.holderName}</td>
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

export default ListofBank
