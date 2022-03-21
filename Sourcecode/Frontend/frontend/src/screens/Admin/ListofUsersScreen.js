import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../actions/adminActions'
import Footer from '../../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListofUsersScreen = (props) => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.users)
  const { error, response, loading } = users

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onDelete = (userId) => {
    axios
      .delete(`http://localhost:8080/indiabazaar/admin/deleteUser/${userId}`)
      .then(
        (response) => {
          console.log(response)
          toast.success('Deleted.!')
          dispatch(getUsers())
        },
        (error) => {
          console.log(error)
          toast.error('Not deleted.!')
        }
      )
  }

  return (
    <div>
      <div className="listofusers">
        <Header title="List of All Users" />
        <div className="listofusertable">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.result &&
                response.result.length > 0 &&
                response.result.map((user) => {
                  return (
                    <tr>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          className="btn btn-danger badge-pill"
                          onClick={() => {
                            onDelete(user.userId)
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
      <button>
        <a type="button" className="btn btn-light" href="/admindepartment">
          Admin Home Page
        </a>
      </button>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ListofUsersScreen
