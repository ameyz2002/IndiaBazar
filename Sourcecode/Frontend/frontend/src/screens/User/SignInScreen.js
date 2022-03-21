import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { signin } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SigninScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (response && response.status === 'OK') {
      sessionStorage.setItem('user', JSON.stringify(response.result))
      const user = JSON.stringify(response.result)
      console.log(user)
      if (response.result.role === 'ADMIN') {
        props.history.push('/admindepartment')
      } else if (response.result.role === 'CUSTOMER') {
        props.history.push('/Customerhome')
      } else if (response.result.role === 'STOREMGR') {
        props.history.push('/Storemgrmain')
      } else if (response.result.role === 'ORDERMGR') {
        props.history.push('/ordermanagermain')
      }
    } else if (response && response.status === 'INTERNAL_SERVER_ERROR') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div className="BGI">
      <h1>Welcome to India Bazaar</h1>
      <div className="signin">
        <Header title="SignIn" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              className="form-control"
              placeholder="test@gmail.com"
            />
          </div>
          <div className="mb-3">
            <lable classname="form-lable">password</lable>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              className="form-control"
              placeholder="*****"></input>
          </div>
          <div className="mb-3">
            <button onClick={onSignin} className="btn btn-success">
              Signin
            </button>
            <div className="float-end">
              New user? <Link to="/signup">create new account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninScreen
