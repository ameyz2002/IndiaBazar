import Header from "../components/Header";
import Footer from "../components/Footer";

const AddProductScreen = (props) => {
  const onAdd = () => {
    props.history.push("/productlist");
  };
  return (
    <div className="addproduct">
      <Header title="Store Managing Department" />
      <div>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" placeholder="name" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="text" className="form-control" placeholder="quantity" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="text" className="form-control" placeholder="price" />
        </div>
        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input type="text" className="form-control" placeholder="discount" />
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
  );
};

export default AddProductScreen;
