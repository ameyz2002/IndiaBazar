import Header from '../../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../actions/adminActions'
import Footer from '../../components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListofCategoriesScreen = (props) => {
  const dispatch = useDispatch()
  const categories = useSelector((store) => store.category)
  const { error, response, loading } = categories

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onDelete = (categoryId) => {
    axios
      .delete(
        `http://localhost:8080/indiabazaar/admin/deleteCategory/${categoryId}`
      )
      .then(
        (response) => {
          console.log(response)
          toast.success('Deleted.!')
          dispatch(getCategory())
        },
        (error) => {
          console.log(error)
          toast.error('Not deleted.!')
        }
      )
  }

  return (
    <div className="listofcat">
      <div>
        <div className="listofcategories">
          <Header title="List of Categories" />
          <div className="listofcategory">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {response &&
                  response.result &&
                  response.result.length > 0 &&
                  response.result.map((category) => {
                    return (
                      <tr>
                        <th>{category.catName}</th>
                        <td>{category.description}</td>

                        <td>
                          <button
                            className="btn btn-danger badge-pill"
                            onClick={() => {
                              onDelete(category.categoryId)
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

export default ListofCategoriesScreen
