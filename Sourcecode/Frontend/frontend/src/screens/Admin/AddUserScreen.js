import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../actions/adminActions'
import Footer from "../../components/Footer";

const AddUserScreen = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [role, setRole] = useState('')
  const dispatch = useDispatch()

  const addUsersStore = useSelector((store) => store.addUsers)
  const { loading, response, error } = addUsersStore

  useEffect(() => {
    if (response && response.status == 'OK') {
      props.history.push('/admindepartment')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addUser(firstName, lastName, email, password, mobile, role))
  }
  return (
    <div className="addcateg">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        User
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="">
            myprofile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/signin">
            sign out
          </a>
        </li>
      </ul>
      <div>
        <div className="adduser">
          <Header title="Add user" />
          <div className="form">
            <div className="mb-3">
              <label className="form-label">FirstName</label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="fname"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">LastName</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="lname"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email"
                className="form-control"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div className="mb-3">
              <lable classname="form-lable">password</lable>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                className="form-control"
                placeholder="****"></input>
            </div>
            <div className="mb-2">
              <label className="form-label" maxlength={10}>
                Mobile
              </label>
              <input
                onChange={(e) => {
                  setMobile(e.target.value)
                }}
                type="mobile"
                className="form-control"
                placeholder="mobile"
              />
            </div>
            <input
              onChange={(e) => {
                setRole(e.target.value)
              }}
              type="radio"
              name="role"
              value="CUSTOMER"
            />
            <label class="radio-inline">CUSTOMER</label>

            <input
              onChange={(e) => {
                setRole(e.target.value)
              }}
              type="radio"
              name="role"
              value="STOREMGR"
            />
            <label class="radio-inline">STORE MANAGER</label>

            <input
              onChange={(e) => {
                setRole(e.target.value)
              }}
              type="radio"
              name="role"
              value="ORDERMGR"
            />
            <label class="radio-inline">ORDER MANAGER</label>

            <div className="mb-3">
              <button onClick={onAdd} className="btn btn-success">
                Add
              </button>
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

export default AddUserScreen
