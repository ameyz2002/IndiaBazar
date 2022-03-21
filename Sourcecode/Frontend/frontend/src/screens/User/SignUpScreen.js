import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { signup } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SignupScreen = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status === 'OK') {
      // user successfully got registered
      props.history.push('/signin')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    dispatch(signup(firstName, lastName, email, mobile, password))
  }
  return (
    <div>
      <h1>Welcome to India Bazaar</h1>
      <div className="signup">
        <Header title="SignUp" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              type="firstname"
              className="form-control"
              placeholder="Fname"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              type="lastname"
              className="form-control"
              placeholder="Lname"
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
              placeholder="test@test.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" maxLength={10}>
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
          <div className="mb-3">
            <lable classname="form-lable">password</lable>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className="form-control"
              placeholder="*****"></input>
          </div>
          <div className="mb-3">
            <button onClick={onSignup} className="btn btn-success">
              Registration
            </button>
            <div className="float-end">
              Have user name? <Link to="/signin">Signin here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupScreen
