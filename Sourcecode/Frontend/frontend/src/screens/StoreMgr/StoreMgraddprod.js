import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions/storemgrActions";
import Footer from "../../components/Footer";

const StoreManagingDepartmentScreen = (props) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [sellerId, setSellerId] = useState("");

  const dispatch = useDispatch();

  const addProductStore = useSelector((store) => store.addproducts);
  const { loading, response, error } = addProductStore;

  useEffect(() => {
    if (response && response.status == "OK") {
      props.history.push("/storemgrmain");
    } else if (error) {
      alert("error");
    }
  }, [loading, response, error]);

  const onAdd = () => {
    dispatch(addProduct(productName, description, quantity, price, discount,categoryId,sellerId))
  }

  return (
    <div className="addproduct">
      <div>
        <div className="storemanaging">
          <Header title="Store Managing Department" />
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="quantity"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="form-control"
                placeholder="price"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Discount</label>
              <input
                onChange={(e) => {
                  setDiscount(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="discount"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CategoryId</label>
              <input
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="12"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">SellerId</label>
              <input
                onChange={(e) => {
                  setSellerId(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="12"
              />
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

export default StoreManagingDepartmentScreen;
