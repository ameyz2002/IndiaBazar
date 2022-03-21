import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSeller } from '../../actions/adminActions'
import Footer from "../../components/Footer";

const AddSellerScreen = (props) => {
  const [brandName, setBrandName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')

  const dispatch = useDispatch()

  const addSellersStore = useSelector((store) => store.addSellers)
  const { loading, response, error } = addSellersStore

  useEffect(() => {
    if (response && response.status === 'OK') {
      props.history.push('/admindepartment')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addSeller(brandName, contact, address))
  }
  return (
    <div>
      <div className="addseller">
        <Header title="Add Seller" />
        <div className="form">
          <div className="mb-3">
            <label className="form-label">BrandName</label>
            <input
              onChange={(e) => {
                setBrandName(e.target.value)
              }}
              type="text"
              className="form-control"
              placeholder="brand name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">contact</label>
            <input
              onChange={(e) => {
                setContact(e.target.value)
              }}
              type="text"
              className="form-control"
              placeholder="contact"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              className="form-control"
              placeholder="address"
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
  )
}

export default AddSellerScreen
