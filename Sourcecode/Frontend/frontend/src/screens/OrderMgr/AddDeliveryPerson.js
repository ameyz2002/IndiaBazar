import Header from '../../components/Header'
import Footer from "../../components/Footer";

const AddDeliveryPerson = (props) => {
    const onAdd = () => {
        props.history.push('/')
    }
    return (
        <div>
            <div  className="deliveryperson">
          <Header title="Delivery Person" />
          <div className="form">
            <div className="mb-3">
              <label className="form-label">contact</label>
              <input
               type="text"
               className="form-control"
               placeholder="contact" 
              />
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Address</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default AddDeliveryPerson