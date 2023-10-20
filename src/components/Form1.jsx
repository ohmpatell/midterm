import React, { useRef } from "react";
import '../forms.css'

const Form1 = () => {
  const file1 = useRef();
  const name1 = useRef();
  const description1 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name1.current.value);
    console.log(description1.current.value);
    console.log(file1.current.files[0]);
    handleCancel(e);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    file1.current.value = "";
    name1.current.value = "";
    description1.current.value = "";
  };

  return (
    <div>
      <form className="form-container">
      <h2>New Shop</h2>

        <div className="form-group">
          <input ref={file1} id="imageInput" type="file" className="form-control-file" />
        </div>

        <div className="form-group group">
          <input
            ref={name1}
            id="nameInput"
            type="text"
            className="form-control"
            placeholder="Name"
          />

          <textarea
            ref={description1}
            id="descriptionInput"
            className="form-control"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="form-group buttons">
          <button id="submitBtn" type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button id="cancelBtn" type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
