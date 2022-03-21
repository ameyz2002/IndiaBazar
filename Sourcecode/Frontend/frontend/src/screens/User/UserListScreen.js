import Header from "../../components/Header";
import Footer from "../../components/Footer";

const UserListScreen = (props) => {
  return (
    <div>
      <Header title="User List" />
      <div className="search">
        <input
          name="q"
          type="text"
          placeholder="Search…"
          value=""
          autocomplete="off"
          maxlength="240"
          class="s-input s-input__search js-search-field "
          aria-label="Search"
          aria-controls="top-search"
          data-controller="s-popover"
          data-action="focus->s-popover#show"
          data-s-popover-placement="bottom-start"
        ></input>
        <ul></ul>
        <ul></ul>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-danger badge-pill">Delete</button>
            </td>
            
          </tr>
        </table>
        <div>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default UserListScreen;
