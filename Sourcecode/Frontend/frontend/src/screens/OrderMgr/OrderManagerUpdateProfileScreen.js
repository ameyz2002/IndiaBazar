import Header from '../../components/Header'
import Footer from "../../components/Footer";

const OrderManagerUpdateProfileScreen = (props) => {
    return (
        <div>
  <Header title="Order Managing Department" />
  <br></br>
  <br></br>
  <table border="3" class="position-absolute top-50 start-50 translate-middle">
  <div className="mb-1" >
          <label className="form-label">Name:</label>
          <input
            type="Name"
            className="form-control"
            placeholder="Name"
            size="50"
          />
        </div>
        <div className="mb-1">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-1">
          <label className="form-label" maxlength={10}>
            Mobile:
          </label>
          <input type="mobile" className="form-control" placeholder="mobile" />
        </div>
        <div className="mb-1">
          <label className="form-label">Address:</label>
          <input
            type="Address"
            className="form-control"
            placeholder="Address"
          />
        </div>
<div>
<button class="btn btn-success" type="button" id="button-addon2">Add Delivery Details</button>
</div>
    </table>
    <div>
        <Footer />
      </div>
        </div>
    )
}

export default OrderManagerUpdateProfileScreen