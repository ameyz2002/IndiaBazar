import Header from '../../components/Header'
import Footer from "../../components/Footer";

const AddFeedbackScreen = (props) => {
    const onAdd = () => {
        props.history.push('/listoffeedback')
    }
    return (
        <div>
            <div className="addfeedback">
          <Header title="Add Feedback" />
          <div className="form">
            <div className="mb-3">
              <label className="form-label">Feedback</label>
              <input
               type="text"
               className="form-control"
               placeholder="feedback" 
              />
            </div>
            <div className="form">
            <div className="mb-3">
              <label className="form-label">ratings</label>
              <input
               type="text"
               className="form-control"
               placeholder="ratings" 
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

export default AddFeedbackScreen