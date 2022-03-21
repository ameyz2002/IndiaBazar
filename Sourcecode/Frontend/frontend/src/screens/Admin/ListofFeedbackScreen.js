import Header from '../../components/Header'
import Footer from "../../components/Footer";
const ListofFeedbackScreen = (props) => {
    return (
      <div className="listoffeed">
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
          <div className="listoffeedback">
          <Header title="List of Feedback" />
          <table className="table table-striped">
          <thead>
            <tr>
              <th>Feedback</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tr>
            <th></th>
            <td></td>
          </tr>
        </table>
        </div>
        </div>
        <div>
        <Footer />
      </div>
        </div>
    )
}

export default ListofFeedbackScreen