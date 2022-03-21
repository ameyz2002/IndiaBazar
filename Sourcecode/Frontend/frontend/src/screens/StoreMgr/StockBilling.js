import Header from '../../components/Header'
import Footer from "../../components/Footer";

const StockBillingScreen = (props) => {
    return (
      <div className="addcateg">
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
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
          <div className="stockbilling">
          <Header title="Stock Billing" />
          <div className="listofcategory">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sellers</th>
              <th>Total Amount</th>

            </tr>
          </thead>
          <tr>
            <th></th>
            <td></td>
          </tr>
        </table>
      </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      
      </div>
    )
}

export default StockBillingScreen