import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../actions/adminActions'
import Footer from "../../components/Footer";

const AddCategoryScreen = (props) => {
  const [catName, setCatName] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const addCategoryStore = useSelector((store) => store.addCategory)
  const { loading, response, error } = addCategoryStore

  useEffect(() => {
    if (response && response.status == 'OK') {
      props.history.push('/admindepartment')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addCategory(catName, description))
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
        <div className="addcategory">
          <Header title="Add Categories" />
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                onChange={(e) => {
                  setCatName(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="title"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                class="form-control"
                placeholder="Description"
                id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </div>
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

export default AddCategoryScreen
