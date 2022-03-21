import React from "react";
import { Button } from "reactstrap";
import Header from "../../components/Header";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer";
import { addBank } from "../../actions/customerActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddBank = (props) => {
  const [ifscCode, setIfscCode] = useState("");
  const [accNo, setAccNo] = useState("");
  const [holderName, setHolderName] = useState("");
  const dispatch = useDispatch();

  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId=user.userId

  const addBankStore = useSelector((store) => store.addbank);
  const { loading, response, error } = addBankStore;

  useEffect(() => {
    if (response && response.status == "OK") {
      props.history.push("/userprofile");
    } else if (error) {
      alert("error");
    }
  }, [loading, response, error]);

  const onAddBank = () => {
    dispatch(addBank(ifscCode, accNo, holderName,userId));
  };

  return (
    <div>
      <div className="addbank">
        <Header title="Add Bank Details" />
        <div></div>
        <div className="form">
          <div className="mb-3"></div>
          <div className="mb-3">
            <label className="form-label">IFSC code</label>
            <input
             onChange={(e) => {
              setIfscCode(e.target.value);
            }}
              type="text"
              className="form-control"
              placeholder="IFSC code"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Account No</label>
            <input 
             onChange={(e) => {
              setAccNo(e.target.value);
            }}
            type="text" className="form-control" placeholder="12345" />
          </div>
          <div className="mb-3">
            <label className="form-label">Holder Name</label>
            <input 
             onChange={(e) => {
              setHolderName(e.target.value);
            }}
            type="text" className="form-control" placeholder="ABC" />
          </div>
          <div className="mb-3">
            <Button outline color="primary" onClick={onAddBank} className="">
              Add Bank
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default AddBank;
